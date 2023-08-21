const prompt = require('prompt-sync')();

const CODIGO = ["COD01", "COD02", "COD03", "COD04", "COD05", "COD06", "COD07", "COD08", "COD09", "COD10"];
const SERVICO = ["ENTREGA DE CACHORRO DOADO", "BUSCA DE GATO PERDIDO", "BUSCA DE CACHORRO PERDIDO", "BANHO E TOSA", "PASSEIO COM O CACHORRO", "HOSPEDAGEM PARA ANIMAIS", "CONSULTA VETERINÁRIA", "ADESTRAMENTO", "DOAÇÃO DE RAÇÃO", "VACINAÇÃO"];
const VALORUNITARIODOACAO = [10.00, 20.00, 25.50, 30.00, 15.00, 50.00, 50.00, 40.00, 5.00, 25.00];
let MOVIMENTO = Array(10).fill(0);

let carrinho = [];

function exibirServicos() {
  console.log("SERVIÇOS DISPONÍVEIS:");
  for (let i = 0; i < CODIGO.length; i++) {
    console.log(`${CODIGO[i]} - ${SERVICO[i]} - R$${VALORUNITARIODOACAO[i].toFixed(2)}`);
  }
}

function selecionarServico(codigo) {
  const index = CODIGO.indexOf(codigo);
  if (index !== -1 && carrinho.length < 10 && !carrinho.includes(codigo)) {
    carrinho.push(codigo);
    MOVIMENTO[index]++;
    console.log(`Serviço "${SERVICO[index]}" adicionado ao carrinho.`);
  } else if (carrinho.includes(codigo)) {
    console.log("Este serviço já foi adicionado ao carrinho.");
  } else {
    console.log("Serviço não encontrado ou carrinho cheio.");
  }
}

function calcularTotal() {
  let total = 0;
  for (const codigo of carrinho) {
    const index = CODIGO.indexOf(codigo);
    total += VALORUNITARIODOACAO[index];
  }
  return total;
}

function main() {
  while (true) {
    console.log("\nBem-vindo à ONG DogsLife!");
    exibirServicos();

    const codigoSelecionado = prompt("Informe o código do serviço que deseja adicionar ao carrinho (ou 'sair' para encerrar): ");
    if (codigoSelecionado.toLowerCase() === "sair") {
      console.log(`Total a ser doado para a ONG: R$${calcularTotal().toFixed(2)}`);
      carrinho = [];
    } else {
      selecionarServico(codigoSelecionado);
    }
  }
}

main();