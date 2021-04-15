import { Negociacao } from './negociacao';

export class Negociacoes {

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
}

