import { NegociacaoController } from './controllers/negociacao-controller';

const controller = new NegociacaoController();
$('.form').submit(controller.adiciona.bind(controller));
$('#btn-importar').click(controller.importaDados.bind(controller));