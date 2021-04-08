System.register(["../views/negociacoes-view", "../views/mensagem-view", "../models/negociacoes", "../models/negociacao"], function (exports_1, context_1) {
    "use strict";
    var negociacoes_view_1, mensagem_view_1, negociacoes_1, negociacao_1, NegociacaoController, DiaDaSemana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (negociacoes_view_1_1) {
                negociacoes_view_1 = negociacoes_view_1_1;
            },
            function (mensagem_view_1_1) {
                mensagem_view_1 = mensagem_view_1_1;
            },
            function (negociacoes_1_1) {
                negociacoes_1 = negociacoes_1_1;
            },
            function (negociacao_1_1) {
                negociacao_1 = negociacao_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new negociacoes_1.Negociacoes();
                    this._negociacoesView = new negociacoes_view_1.NegociacoesView('#negociacoesView', true);
                    this._mensagemView = new mensagem_view_1.MensagemView('#mensagemView', true);
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (this._diaUtil(data)) {
                        this._mensagemView.update('Somente negociações em dias úteis!');
                        return;
                    }
                    const negociacao = new negociacao_1.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.paraArray().forEach(negociacao => {
                        console.log(negociacao.data);
                        console.log(negociacao.quantidade);
                        console.log(negociacao.valor);
                    });
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso');
                }
                _diaUtil(data) {
                    return data.getDay() != DiaDaSemana.Sabado && data.getDay() != DiaDaSemana.Domingo;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
