System.register(["../models/negociacao"], function (exports_1, context_1) {
    "use strict";
    var negociacao_1, NegociacaoService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (negociacao_1_1) {
                negociacao_1 = negociacao_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService {
                obterNegociacoes(handler) {
                    return fetch("http://localhost:8080/dados")
                        .then((res) => handler(res))
                        .then((res) => res.json())
                        .then((dados) => dados.map((dado) => new negociacao_1.Negociacao(new Date(), dado.vezes, dado.montante)))
                        .catch((err) => console.log(err.message));
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
