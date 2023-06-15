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

const novaRodada = confirm(
  `Boas vindas ao jogo de BlackJack! \nQuer iniciar uma nova rodada?`
);

const carta1Usuario = comprarCarta();
const carta2Usuario = comprarCarta();
const cartasUsuario = carta1Usuario.valor + carta2Usuario.valor;

const carta1Computador = comprarCarta();
const carta2Computador = comprarCarta();
const cartasComputador = carta1Computador.valor + carta2Computador.valor;

if (novaRodada === true) {
  //inicia o jogo
  alert(
    `Usuário - cartas: ${carta1Usuario.texto} ${carta2Usuario.texto} - pontuação: ${cartasUsuario}
    \nComputador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - pontuação: ${cartasComputador}`
  );
  if (cartasUsuario > cartasComputador) {
    alert("O usuário ganhou!");
  } else if (cartasUsuario < cartasComputador) {
    alert("O computador ganhou!");
  } else if (cartasUsuario === cartasComputador) {
    alert("Empate!");
  } else {
    alert("Jogue outra vez!");
  }
} else {
  //O jogo acaba
  alert("O jogo acabou");
}
