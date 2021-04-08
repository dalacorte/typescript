export function tempoDeExecucao() {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodo = descriptor.value;

        descriptor.value = function (...args: any[]) {

            const retorno = metodo.apply(this, args);
            return retorno;
        }

        return descriptor;
    }
}