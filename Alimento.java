package com.exemplo.redistribuicao.model;

import java.util.UUID;

public class Alimento {
    private String id;
    private String restaurante;
    private String nomeItem;
    private String categoria;
    private double quantidadeKg;
    private double precoOriginal;
    private double precoComDesconto;
    private boolean destinadoParaDoacao;
    private boolean reservado;

    public Alimento() {
        this.id = UUID.randomUUID().toString().substring(0, 8);
    }

    public Alimento(String restaurante, String nomeItem, String categoria, double quantidadeKg, double precoOriginal) {
        this.id = UUID.randomUUID().toString().substring(0, 8);
        this.restaurante = restaurante;
        this.nomeItem = nomeItem;
        this.categoria = categoria;
        this.quantidadeKg = quantidadeKg;
        this.precoOriginal = precoOriginal;
        this.reservado = false;
        processarRedistribuicao();
    }

    public void processarRedistribuicao() {
        this.precoComDesconto = this.precoOriginal * 0.40;
        this.destinadoParaDoacao = this.quantidadeKg >= 5.0;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getRestaurante() { return restaurante; }
    public void setRestaurante(String restaurante) { this.restaurante = restaurante; }

    public String getNomeItem() { return nomeItem; }
    public void setNomeItem(String nomeItem) { this.nomeItem = nomeItem; }

    public String getCategoria() { return categoria; }
    public void setCategoria(String categoria) { this.categoria = categoria; }

    public double getQuantidadeKg() { return quantidadeKg; }
    public void setQuantidadeKg(double quantidadeKg) { this.quantidadeKg = quantidadeKg; }

    public double getPrecoOriginal() { return precoOriginal; }
    public void setPrecoOriginal(double precoOriginal) { this.precoOriginal = precoOriginal; }

    public double getPrecoComDesconto() { return precoComDesconto; }
    public void setPrecoComDesconto(double precoComDesconto) { this.precoComDesconto = precoComDesconto; }

    public boolean isDestinadoParaDoacao() { return destinadoParaDoacao; }
    public void setDestinadoParaDoacao(boolean destinadoParaDoacao) { this.destinadoParaDoacao = destinadoParaDoacao; }

    public boolean isReservado() { return reservado; }
    public void setReservado(boolean reservado) { this.reservado = reservado; }
}