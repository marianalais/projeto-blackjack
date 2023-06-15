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

let cartasUsuario = [];
let cartasComputador = [];
let somaUsuario = 0;
let somaComputador = 0;
let textoCartasUsuario = "";
let textoCartasComputador = "";

const filtrarQtd = (lista, valor) => {
  return lista.filter((item) => item.valor === valor).length;
};

if (novaRodada) {
  let rodada = 0;
  while (novaRodada === true && rodada < 2) {
    cartasUsuario.push(comprarCarta());
    cartasComputador.push(comprarCarta());

    somaUsuario += cartasUsuario[rodada].valor;
    somaComputador += cartasComputador[rodada].valor;
    textoCartasUsuario += cartasUsuario[rodada].texto;
    textoCartasComputador += cartasComputador[rodada].texto;
    rodada++;

    if (
      filtrarQtd(cartasUsuario, 11) === 2 ||
      filtrarQtd(cartasComputador, 11) === 2
    ) {
      cartasUsuario = [];
      cartasComputador = [];
      rodada = 0;
      somaUsuario = 0;
      somaComputador = 0;
      textoCartasUsuario = "";
      textoCartasComputador = "";
    }
  }

  let novaCompra = confirm(
    `Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}. 
        \nDeseja comprar mais uma carta?`
  );

  while (novaCompra && somaUsuario <= 21) {
    const novaCarta = comprarCarta();

    cartasUsuario.push(novaCarta);
    somaUsuario += novaCarta.valor;
    textoCartasUsuario += novaCarta.texto;

    novaCompra = confirm(
      `Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}. 
          \nDeseja comprar mais uma carta?`
    );
  }

  while (somaUsuario >= somaComputador && somaComputador <= 21) {
    const novaCarta = comprarCarta();
    cartasComputador.push(novaCarta);
    somaComputador += novaCarta.valor;
    textoCartasComputador += novaCarta.texto;
  }

  if (somaUsuario > 21) {
    alert(
      `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaUsuario} 
          \nAs cartas do computador são: ${textoCartasComputador}. Sua pontuação é ${somaComputador} 
          \nO computador ganhou.`
    );
  } else if (somaComputador > 21) {
    alert(
      `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaUsuario} 
        \nAs cartas do computador são: ${textoCartasComputador}. Sua pontuação é ${somaComputador}
        \nO usuário ganhou.`
    );
  } else if (somaUsuario > somaComputador) {
    alert(
      `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaUsuario} 
          \nAs cartas do computador são: ${textoCartasComputador}. Sua pontuação é ${somaComputador} 
          \nO usuário ganhou.`
    );
  } else if (somaComputador > somaUsuario) {
    alert(
      `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaUsuario} 
        \nAs cartas do computador são: ${textoCartasComputador}. Sua pontuação é ${somaComputador}
        \nO computador ganhou.`
    );
  } else if (somaUsuario === somaComputador) {
    alert(
      `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaUsuario} 
          \nAs cartas do computador são: ${textoCartasComputador}. Sua pontuação é ${somaComputador}
          \nEmpate`
    );
  }
} else {
  alert("Você escolheu sair. Para iniciar um novo jogo, atualize a página.");
}
