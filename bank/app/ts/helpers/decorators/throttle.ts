export function throttle(milisegundos = 500) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodo = descriptor.value;
        let timer = 0;

        descriptor.value = function (...args: any[]) {

            clearInterval(timer);
            timer = setTimeout(() => metodo.apply(this, args), 500);
        }

        return descriptor;
    }
}