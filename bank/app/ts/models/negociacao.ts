import { Imprimivel } from './imprimivel';

export class Negociacao implements Imprimivel {

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number) {
    }

    get volume() {

        return this.quantidade * this.valor;
    }

    texto(): void {

        console.log(
            `Data: ${this.data},
            Quantidade: ${this.quantidade},
            Valor: ${this.valor},
            Volume: ${this.volume}`
        )
    }
}