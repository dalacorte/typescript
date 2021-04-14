System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function tempoDeExecucao() {
        return function (target, propertyKey, descriptor) {
            const metodo = descriptor.value;
            descriptor.value = function (...args) {
                const retorno = metodo.apply(this, args);
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("tempoDeExecucao", tempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
