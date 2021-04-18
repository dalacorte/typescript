import { Imprimivel } from './imprimivel';
import { Igualavel } from './igualavel';


export interface Objeto<T> extends Imprimivel, Igualavel<T> {


}