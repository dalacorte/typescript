System.register(["./controllers/negociacao-controller"], function (exports_1, context_1) {
    "use strict";
    var negociacao_controller_1, controller;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (negociacao_controller_1_1) {
                negociacao_controller_1 = negociacao_controller_1_1;
            }
        ],
        execute: function () {
            controller = new negociacao_controller_1.NegociacaoController();
            $('.form').submit(controller.adiciona.bind(controller));
        }
    };
});
