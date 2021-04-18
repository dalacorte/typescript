import { Negociacao } from './negociacao';
import { Imprimivel } from './imprimivel';
import { Igualavel } from './igualavel';

export class Negociacoes implements Imprimivel, Igualavel<Negociacoes> {

    private _negociacoes: Negociacao[] = [];

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Negociacao[] {

        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    texto(): void {

        console.log(JSON.stringify(this._negociacoes));
    }


    igual(negociacoes: Negociacoes): boolean {

        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.paraArray())
    }
}

