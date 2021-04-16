import { Imprimivel } from '../models/imprimivel';

export function imprimir(...objetos: Imprimivel[]) {

    objetos.forEach(objeto => objeto.texto());
}