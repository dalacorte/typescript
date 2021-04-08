export function tempoDeExecucao() {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodo = descriptor.value;

        descriptor.value = function (...args: any[]) {

            console.log(`Parâmetros do método ${propertyKey}: ${JSON.stringify(args)}`);
            const t1 = performance.now();

            const retorno = metodo.apply(this, args);

            const t2 = performance.now();
            console.log(`${propertyKey} demorou ${t2 - t1} ms`);
            return retorno;
        }

        return descriptor;
    }
}