
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

public class ServidorSalvaComida {

    private static final List<Alimento> bancoDeAlimentos = new CopyOnWriteArrayList<>();
    private static final Path ARQUIVO_DADOS = Paths.get("salvacomida_dados.txt");

    public static void main(String[] args) throws IOException {
        carregarDadosDoDisco();

        HttpServer server = HttpServer.create(new InetSocketAddress(8080), 0);

        server.createContext("/", exchange -> {
            if ("/".equals(exchange.getRequestURI().getPath())) {
                String bootstrap = "<!DOCTYPE html><meta charset='UTF-8'><meta name='viewport' content='width=device-width,initial-scale=1'><script src='/app.js' defer></script>";
                enviarResposta(exchange, 200, "text/html; charset=UTF-8", bootstrap.getBytes(StandardCharsets.UTF_8));
            } else {
                enviarResposta(exchange, 404, "text/plain", "Rota nao encontrada".getBytes(StandardCharsets.UTF_8));
            }
        });

        server.createContext("/app.js", exchange -> {
            byte[] jsBytes = carregarArquivoJs();
            enviarResposta(exchange, 200, "application/javascript; charset=UTF-8", jsBytes);
        });

        server.createContext("/api/alimentos", exchange -> {
            configurarCors(exchange);
            String metodo = exchange.getRequestMethod();

            if ("OPTIONS".equalsIgnoreCase(metodo)) {
                exchange.sendResponseHeaders(204, -1);
                return;
            }

            if ("GET".equalsIgnoreCase(metodo)) {
                String jsonArray = "[" + bancoDeAlimentos.stream()
                        .map(Alimento::toJson)
                        .collect(Collectors.joining(",")) + "]";
                enviarResposta(exchange, 200, "application/json; charset=UTF-8", jsonArray.getBytes(StandardCharsets.UTF_8));
            } else if ("POST".equalsIgnoreCase(metodo)) {
                String corpo = new String(exchange.getRequestBody().readAllBytes(), StandardCharsets.UTF_8);
                Map<String, String> dados = parseFormUrlEncoded(corpo);

                String restaurante = dados.getOrDefault("restaurante", "Estabelecimento");
                String nomeItem = dados.getOrDefault("nomeItem", "Item");
                String categoria = dados.getOrDefault("categoria", "Refeição Pronta");
                double qtd = Double.parseDouble(dados.getOrDefault("quantidadeKg", "1.0").replace(",", "."));
                double preco = Double.parseDouble(dados.getOrDefault("precoOriginal", "10.0").replace(",", "."));
                int validade = Integer.parseInt(dados.getOrDefault("horasValidade", "4"));

                Alimento novo = new Alimento(restaurante, nomeItem, categoria, qtd, preco, validade);
                bancoDeAlimentos.add(0, novo);
                salvarDadosNoDisco();

                enviarResposta(exchange, 201, "application/json; charset=UTF-8", novo.toJson().getBytes(StandardCharsets.UTF_8));
            }
        });

        server.createContext("/api/reservar", exchange -> {
            configurarCors(exchange);
            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                Map<String, String> params = parseFormUrlEncoded(exchange.getRequestURI().getQuery());
                String id = params.get("id");
                for (Alimento a : bancoDeAlimentos) {
                    if (a.getId().equals(id)) {
                        a.setReservado(!a.isReservado());
                        break;
                    }
                }
                salvarDadosNoDisco();
                enviarResposta(exchange, 200, "application/json; charset=UTF-8", "{\"ok\":true}".getBytes(StandardCharsets.UTF_8));
            }
        });

        server.createContext("/api/excluir", exchange -> {
            configurarCors(exchange);
            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                Map<String, String> params = parseFormUrlEncoded(exchange.getRequestURI().getQuery());
                String id = params.get("id");
                bancoDeAlimentos.removeIf(a -> a.getId().equals(id));
                salvarDadosNoDisco();
                enviarResposta(exchange, 200, "application/json; charset=UTF-8", "{\"ok\":true}".getBytes(StandardCharsets.UTF_8));
            }
        });

        server.createContext("/api/lote-iot", exchange -> {
            configurarCors(exchange);
            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                Random rand = new Random();
                List<Alimento> catalogo = new ArrayList<>(Arrays.asList(
                    new Alimento("Bistrô Urbano", "Risoto de Funghi e Frango", "Refeição Pronta", Math.round((5.5 + rand.nextDouble() * 4) * 10.0) / 10.0, 78.00, 2),
                    new Alimento("Padaria Trigo Ouro", "Pães Integrais e Bolos", "Padaria / Pães", Math.round((2.0 + rand.nextDouble() * 2.5) * 10.0) / 10.0, 34.00, 5),
                    new Alimento("Mercado Natural", "Frutas e Verduras da Estação", "Hortifrúti", Math.round((6.0 + rand.nextDouble() * 5) * 10.0) / 10.0, 52.00, 7),
                    new Alimento("Cantina Universitária", "Marmitas Executivas", "Refeição Pronta", Math.round((7.0 + rand.nextDouble() * 4) * 10.0) / 10.0, 85.00, 3),
                    new Alimento("Queijaria Vale Verde", "Queijo Minas e Requeijão", "Laticínios", Math.round((1.5 + rand.nextDouble() * 2) * 10.0) / 10.0, 48.00, 9),
                    new Alimento("Confeitaria Doce Aroma", "Salgados Assados Variados", "Padaria / Pães", Math.round((3.0 + rand.nextDouble() * 3) * 10.0) / 10.0, 44.00, 4),
                    new Alimento("Sacolão Central", "Tomates, Batatas e Cenouras", "Hortifrúti", Math.round((8.0 + rand.nextDouble() * 4) * 10.0) / 10.0, 39.00, 6),
                    new Alimento("Restaurante Grill Sul", "Carnes Grelhadas e Guarnições", "Refeição Pronta", Math.round((4.2 + rand.nextDouble() * 3) * 10.0) / 10.0, 92.00, 2)
                ));
                Collections.shuffle(catalogo);
                for (int i = 0; i < 3; i++) {
                    bancoDeAlimentos.add(0, catalogo.get(i));
                }
                salvarDadosNoDisco();
                enviarResposta(exchange, 201, "application/json; charset=UTF-8", "{\"ok\":true}".getBytes(StandardCharsets.UTF_8));
            }
        });

        server.createContext("/api/avancar-tempo", exchange -> {
            configurarCors(exchange);
            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                for (Alimento a : bancoDeAlimentos) {
                    a.avancarUmaHora();
                }
                salvarDadosNoDisco();
                enviarResposta(exchange, 200, "application/json; charset=UTF-8", "{\"ok\":true}".getBytes(StandardCharsets.UTF_8));
            }
        });

        server.createContext("/api/limpar-concluidos", exchange -> {
            configurarCors(exchange);
            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                bancoDeAlimentos.removeIf(Alimento::isReservado);
                salvarDadosNoDisco();
                enviarResposta(exchange, 200, "application/json; charset=UTF-8", "{\"ok\":true}".getBytes(StandardCharsets.UTF_8));
            }
        });

        server.createContext("/api/resetar-demo", exchange -> {
            configurarCors(exchange);
            if ("POST".equalsIgnoreCase(exchange.getRequestMethod())) {
                popularDadosIniciais();
                salvarDadosNoDisco();
                enviarResposta(exchange, 200, "application/json; charset=UTF-8", "{\"ok\":true}".getBytes(StandardCharsets.UTF_8));
            }
        });

        server.setExecutor(null);
        server.start();
        System.out.println("====================================================");
        System.out.println("🚀 SALVACOMIDA ENTERPRISE ONLINE NA PORTA 8080!");
        System.out.println("💾 Persistência ativa em: " + ARQUIVO_DADOS.toAbsolutePath());
        System.out.println("👉 Acesse: http://localhost:8080");
        System.out.println("====================================================");
    }

    private static void popularDadosIniciais() {
        bancoDeAlimentos.clear();
        bancoDeAlimentos.add(new Alimento("Restaurante Sabor & Cia", "Arroz Carreteiro e Feijão", "Refeição Pronta", 7.5, 65.00, 3));
        bancoDeAlimentos.add(new Alimento("Padaria Pão Quente", "Combo Pães e Croissants", "Padaria / Pães", 2.2, 28.00, 5));
        bancoDeAlimentos.add(new Alimento("Hortifrúti Vida Verde", "Cesta de Legumes Orgânicos", "Hortifrúti", 5.8, 42.00, 8));
        bancoDeAlimentos.add(new Alimento("Laticínios Serra Azul", "Iogurtes Naturais e Queijos", "Laticínios", 1.8, 36.00, 10));
    }

    private static void carregarDadosDoDisco() {
        try {
            if (Files.exists(ARQUIVO_DADOS)) {
                List<String> linhas = Files.readAllLines(ARQUIVO_DADOS, StandardCharsets.UTF_8);
                bancoDeAlimentos.clear();
                for (String l : linhas) {
                    if (!l.trim().isEmpty()) {
                        Alimento a = Alimento.fromStorageLine(l);
                        if (a != null) bancoDeAlimentos.add(a);
                    }
                }
                if (!bancoDeAlimentos.isEmpty()) return;
            }
        } catch (Exception ignored) {}
        popularDadosIniciais();
        salvarDadosNoDisco();
    }

    private static synchronized void salvarDadosNoDisco() {
        try {
            List<String> linhas = bancoDeAlimentos.stream()
                    .map(Alimento::toStorageLine)
                    .collect(Collectors.toList());
            Files.write(ARQUIVO_DADOS, linhas, StandardCharsets.UTF_8);
        } catch (IOException e) {
            System.err.println("Erro ao salvar dados: " + e.getMessage());
        }
    }

    private static byte[] carregarArquivoJs() throws IOException {
        Path[] caminhosPossiveis = {
            Paths.get("app.js"),
            Paths.get("src/app.js"),
            Paths.get("src/main/java/app.js")
        };
        for (Path p : caminhosPossiveis) {
            if (Files.exists(p)) {
                return Files.readAllBytes(p);
            }
        }
        String erroJs = "document.body.innerHTML = '<h2 style=\"color:red;font-family:sans-serif\">Erro: Arquivo app.js não encontrado!</h2>';";
        return erroJs.getBytes(StandardCharsets.UTF_8);
    }

    private static void configurarCors(HttpExchange exchange) {
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");
    }

    private static void enviarResposta(HttpExchange exchange, int status, String contentType, byte[] conteudo) throws IOException {
        exchange.getResponseHeaders().set("Content-Type", contentType);
        exchange.sendResponseHeaders(status, conteudo.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(conteudo);
        }
    }

    private static Map<String, String> parseFormUrlEncoded(String raw) {
        Map<String, String> map = new HashMap<>();
        if (raw == null || raw.isEmpty()) return map;
        for (String pair : raw.split("&")) {
            String[] kv = pair.split("=", 2);
            if (kv.length == 2) {
                String chave = URLDecoder.decode(kv[0], StandardCharsets.UTF_8);
                String valor = URLDecoder.decode(kv[1], StandardCharsets.UTF_8);
                map.put(chave, valor);
            }
        }
        return map;
    }
}