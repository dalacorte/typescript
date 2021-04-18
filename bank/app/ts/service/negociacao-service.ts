import { NegociacaoParcial } from '../models/negociacao-parcial';
import { HandlerFunction } from './handler-function';
import { Negociacao } from '../models/negociacao';

export class NegociacaoService {

    obterNegociacoes(handler: HandlerFunction): Promise<Negociacao[]> {

        return <Promise<Negociacao[]>>fetch("http://localhost:8080/dados")
            .then((res) => handler(res))
            .then((res) => res.json())
            .then((dados: NegociacaoParcial[]) => dados.map((dado) => new Negociacao(new Date(), dado.vezes, dado.montante)))
            .catch((err) => {
                console.log(err);
                throw new Error('Não foi possível importar as negociações');
            });
    }
}

