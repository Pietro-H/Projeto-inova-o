package com.exemplo.redistribuicao.controller;

import com.exemplo.redistribuicao.model.Alimento;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.stream.Collectors;

@Controller
public class AlimentoController {

    private final List<Alimento> listaAlimentos = new CopyOnWriteArrayList<>();

    @GetMapping("/")
    public String index(@RequestParam(required = false) String busca, Model model) {
        List<Alimento> exibidos = listaAlimentos;

        if (busca != null && !busca.trim().isEmpty()) {
            String termo = busca.toLowerCase().trim();
            exibidos = listaAlimentos.stream()
                    .filter(a -> (a.getNomeItem() != null && a.getNomeItem().toLowerCase().contains(termo))
                              || (a.getRestaurante() != null && a.getRestaurante().toLowerCase().contains(termo))
                              || (a.getCategoria() != null && a.getCategoria().toLowerCase().contains(termo)))
                    .collect(Collectors.toList());
        }

        long totalDoacoes = listaAlimentos.stream().filter(Alimento::isDestinadoParaDoacao).count();
        long totalVendas = listaAlimentos.size() - totalDoacoes;
        long totalReservados = listaAlimentos.stream().filter(Alimento::isReservado).count();

        model.addAttribute("alimentos", exibidos);
        model.addAttribute("busca", busca);
        model.addAttribute("totalItens", listaAlimentos.size());
        model.addAttribute("totalDoacoes", totalDoacoes);
        model.addAttribute("totalVendas", totalVendas);
        model.addAttribute("totalReservados", totalReservados);
        model.addAttribute("novoAlimento", new Alimento());

        return "index";
    }

    @PostMapping("/cadastrar")
    public String cadastrar(@ModelAttribute Alimento alimento) {
        if (alimento.getId() == null || alimento.getId().isEmpty()) {
            alimento.setId(java.util.UUID.randomUUID().toString().substring(0, 8));
        }
        alimento.processarRedistribuicao();
        listaAlimentos.add(alimento);
        return "redirect:/";
    }

    @PostMapping("/reservar")
    public String reservar(@RequestParam String id) {
        for (Alimento a : listaAlimentos) {
            if (a.getId().equals(id)) {
                a.setReservado(!a.isReservado());
                break;
            }
        }
        return "redirect:/";
    }

    @PostMapping("/excluir")
    public String excluir(@RequestParam String id) {
        listaAlimentos.removeIf(a -> a.getId().equals(id));
        return "redirect:/";
    }
}