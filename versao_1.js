/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de BlackJack!");
const novaRodada = confirm("Quer iniciar uma nova rodada?");
console.log(novaRodada);

const carta1Usuario = comprarCarta();
const carta2Usuario = comprarCarta();
const cartasUsuario = carta1Usuario.valor + carta2Usuario.valor;

const carta1Computador = comprarCarta();
const carta2Computador = comprarCarta();
const cartasComputador = carta1Computador.valor + carta2Computador.valor;

if (novaRodada) {
  //inicia o jogo
  console.log(
    `Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação: ${cartasUsuario}`
  );
  console.log(
    `Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação: ${cartasComputador}`
  );
  if (cartasUsuario > cartasComputador) {
    console.log("O usuário ganhou!");
  } else if (cartasUsuario < cartasComputador) {
    console.log("O computador ganhou!");
  } else if (cartasUsuario === cartasComputador) {
    console.log("Empate!");
  } else {
    console.log("Jogue outra vez!");
  }
} else {
  //O jogo acaba
  alert("O jogo acabou");
}
