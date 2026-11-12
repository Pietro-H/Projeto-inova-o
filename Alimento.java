import java.util.Locale;
import java.util.UUID;

public class Alimento {
    private String id;
    private String restaurante;
    private String nomeItem;
    private String categoria;
    private double quantidadeKg;
    private double precoOriginal;
    private double precoFinal;
    private int descontoPercentual;
    private int horasValidade;
    private String destino;
    private String ongParceira;
    private double co2EvitadoKg;
    private double aguaEconomizadaLitros;
    private boolean reservado;
    private boolean expirado;

    public Alimento(String restaurante, String nomeItem, String categoria, double quantidadeKg, double precoOriginal, int horasValidade) {
        this.id = UUID.randomUUID().toString().substring(0, 6).toUpperCase();
        this.restaurante = restaurante;
        this.nomeItem = nomeItem;
        this.categoria = categoria;
        this.quantidadeKg = quantidadeKg;
        this.precoOriginal = precoOriginal;
        this.horasValidade = horasValidade;
        this.reservado = false;
        this.expirado = false;
        processarInteligencia();
    }

    private Alimento() {}

    public void processarInteligencia() {
        this.co2EvitadoKg = this.quantidadeKg * 2.5;
        this.aguaEconomizadaLitros = this.quantidadeKg * 1000.0;

        if (this.horasValidade <= 0) {
            this.horasValidade = 0;
            this.expirado = true;
            this.destino = "COMPOSTAGEM";
            this.descontoPercentual = 100;
            this.precoFinal = 0.0;
            this.ongParceira = "Usina de Compostagem Urbana";
            return;
        }

        this.expirado = false;
        if (this.quantidadeKg >= 5.0 || this.horasValidade <= 3) {
            this.destino = "DOACAO_ONG";
            this.descontoPercentual = 100;
            this.precoFinal = 0.0;
            this.ongParceira = selecionarOngPorCategoria(this.categoria);
        } else {
            this.destino = "VENDA_RELAMPAGO";
            this.ongParceira = "Consumidor Local";
            this.descontoPercentual = (this.horasValidade <= 6) ? 70 : 50;
            this.precoFinal = this.precoOriginal * (1.0 - (this.descontoPercentual / 100.0));
        }
    }

    public void avancarUmaHora() {
        if (!this.reservado && !this.expirado) {
            this.horasValidade -= 1;
            processarInteligencia();
        }
    }

    private String selecionarOngPorCategoria(String cat) {
        if (cat.contains("Hortifrúti")) return "Cozinha Comunitária Verde";
        if (cat.contains("Padaria")) return "Projeto Pão Solidário";
        if (cat.contains("Laticínios")) return "Instituto Nutrir Bem";
        return "Banco de Alimentos Municipal";
    }

    public String getId() { return id; }
    public boolean isReservado() { return reservado; }
    public void setReservado(boolean reservado) { this.reservado = reservado; }

    private String limparTexto(String s) {
        return s == null ? "" : s.replace("|", "/").replace("\n", " ").replace("\r", "");
    }

    public String toStorageLine() {
        return String.format(Locale.US, "%s|%s|%s|%s|%.2f|%.2f|%d|%b|%b",
            limparTexto(id), limparTexto(restaurante), limparTexto(nomeItem),
            limparTexto(categoria), quantidadeKg, precoOriginal, horasValidade,
            reservado, expirado
        );
    }

    public static Alimento fromStorageLine(String line) {
        String[] p = line.split("\\|");
        if (p.length < 9) return null;
        Alimento a = new Alimento();
        a.id = p[0];
        a.restaurante = p[1];
        a.nomeItem = p[2];
        a.categoria = p[3];
        a.quantidadeKg = Double.parseDouble(p[4]);
        a.precoOriginal = Double.parseDouble(p[5]);
        a.horasValidade = Integer.parseInt(p[6]);
        a.reservado = Boolean.parseBoolean(p[7]);
        a.expirado = Boolean.parseBoolean(p[8]);
        a.processarInteligencia();
        return a;
    }

    private String escaparJson(String texto) {
        if (texto == null) return "";
        return texto.replace("\\", "\\\\").replace("\"", "\\\"");
    }

    public String toJson() {
        return String.format(Locale.US,
            "{" +
            "\"id\":\"%s\"," +
            "\"restaurante\":\"%s\"," +
            "\"nomeItem\":\"%s\"," +
            "\"categoria\":\"%s\"," +
            "\"quantidadeKg\":%.2f," +
            "\"precoOriginal\":%.2f," +
            "\"precoFinal\":%.2f," +
            "\"descontoPercentual\":%d," +
            "\"horasValidade\":%d," +
            "\"destino\":\"%s\"," +
            "\"ongParceira\":\"%s\"," +
            "\"co2EvitadoKg\":%.2f," +
            "\"aguaEconomizadaLitros\":%.0f," +
            "\"reservado\":%b," +
            "\"expirado\":%b" +
            "}",
            escaparJson(id), escaparJson(restaurante), escaparJson(nomeItem),
            escaparJson(categoria), quantidadeKg, precoOriginal, precoFinal,
            descontoPercentual, horasValidade, escaparJson(destino),
            escaparJson(ongParceira), co2EvitadoKg, aguaEconomizadaLitros,
            reservado, expirado
        );
    }
}