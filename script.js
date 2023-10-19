var cartasAção = [
    'Avance um-a casa, restam 3',
    'Avance dois casas, restam 2',
    'Avance três casas, restam 1',
    'Todos Avançam uma casas, restam 3',
    'Todos Avançam duas casas, restam 2',
    'Todos Avançam três casas, restam 1',
    'Veja um livro da escolha do oponente, restam 3',
    'Veja dois livros da escolha do oponente, restam 2',
    'Veja três livros da escolha do oponente, restam 1',
    'Todos os jogadores que tiverem a sua frente avançam uma casa, restam 3',
    'Todos os jogadores que tiverem a sua frente avançam duas casa, restam 2',
    'Todos os jogadores que tiverem a sua frente avançam três casa, restam 1',
    'Todos os jogadores que estiverem atrás de você andam uma casa, restam 3',
    'Todos os jogadores que estiverem atrás de você andam duas casa, restam 2',
    'Todos os jogadores que estiverem atrás de você andam três casa, restam 1',
    'Casa não tenha nenhum jogador a sua frente, ande uma casa, restam 3',
    'Casa não tenha nenhum jogador a sua frente, ande duas casa, restam 2',
    'Casa não tenha nenhum jogador a sua frente, ande três casa, restam 1',
    'Casa não tenha nenhum jogador atrás de você ande uma casa, restam 3',
    'Casa não tenha nenhum jogador atrás de você ande duas casa, restam 2',
    'Casa não tenha nenhum jogador atrás de você ande três casa, restam 1',

    'Volte uma casa, restam 3',
    'Volte duas casas, restam 2',
    'Volte três casas, restam 1',
    'Todos voltam uma casa, restam 3',
    'Todos voltam duas casas, restam 2',
    'Todos voltam três casas, restam 1',
    'Mostre um livro seus da escolha para o oponente, restam 3',
    'Mostre duas livros seus da escolha para o oponente, restam 2',
    'Mostre três livros seus da escolha para o oponente, restam 1',
    'Todos os jogadores que tiverem a sua frente voltam uma casa, restam 3',
    'Todos os jogadores que tiverem a sua frente voltam duas casa, restam 2',
    'Todos os jogadores que tiverem a sua frente voltam três casa, restam 1',
    'Todos os jogadores que estiverem atrás de você voltam uma casa, restam 3',
    'Todos os jogadores que estiverem atrás de você voltam duas casa, restam 2',
    'Todos os jogadores que estiverem atrás de você volta três casa, restam 1',
    'Casa não tenha nenhum jogador a sua frente volte uma casa, restam 3',
    'Casa não tenha nenhum jogador a sua frente volte duas casa, restam 2',
    'Casa não tenha nenhum jogador a sua frente volte três casa, restam 1',
    'Casa não tenha nenhum jogador atrás de você volte uma casa, restam 3',
    'Casa não tenha nenhum jogador atrás de você volte duas casa, restam 2',
    'Casa não tenha nenhum jogador atrás de você volte três casa, restam 1',
]

var cartasPassivas = [
    'Escolha alguém para voltar uma casa, restam 3',
    'Escolha alguém para voltar duas casas, restam 3',
    'Escolha alguém para voltar três casas, restam 3',
    'Escolha alguém e role o dado, caso caia par, a pessoa volta três casas e se cair ímpar ela avança três casas, restam 3',
    'Escolha alguém para comprar uma carta, restam 3',
    'Vá para a casa de livro mais próximo, restam 3',
    'Escolha um livro aleatório de alguém e descarte-o, restam 3',
    'Escolha uma carta aleatória de alguem e descarte-o, restam 3',
    'Escolha alguém para trocar de lugar no tabuleiro, restam 3',
    'Todos os jogadores devem descarta um livro, restam 3',
    'Negue qualquer efeito, restam 3',
    'Reverse card, restam 3',
    'Negue efeitos de roubo, restam 3',
    'Negue efeito de evento, restam 3',
    'Negue efeito de carta aleatoria, restam 3',
    'Negue efeito da casa, restam 3',
    'O efeito negativo que te afetaria iria para um jogador que não seja a pessoa que jogou, restam 3',
    'O efeito negativo que te afetaria iria para o proximo jogador, restam 3',
    'Jogue o dado, caso caia 6 você fica uma rodada sem tomar efeito, restam 3',
    'Esta carta ira refletir o ataque de um inimigo para uma pessoa, mas essa pessoa que sera atacada vai ser definida de acordo com o numero dado, restam  3'
]

var cartasLivros = [
    'Macunaíma, Mário de Andrade, restam 1',
    'Grande Sertão: Veredas, João Guimarães Rosa, restam 1',
    'Quarup, Antônio Callado, restam 1',
    'O Sítio do Pica-pau Amarelo, Monteiro Lobato, restam 1',
    'Mar Absoluto, Cecília Meireles, restam 1',
    'Dom Casmurro, Machado de Assis, restam 1',
    'O Cortiço, Aluísio Azevedo, restam 1',
    'Nova Antologia Poética, Mário Quintana, restam 1',
    'Gabriela, Cravo e Canela, Jorge Amado, restam 1',
    'Vestido de Noiva, Nelson Rodrigues, restam 1',
    'Vidas Secas, Graciliano Ramos, restam 1',
    'A Paixão Segundo G.H., Clarice Lispector, restam 1',
    'A Moreninha, Joaquim Manoel de Macedo, restam 1',
    'Iracema, José de Alencar, restam 1',
    'Memórias Póstumas de Brás Cubas, Machado de Assis, restam 1',
    'O Ateneu, Raul Pompeia, restam 1',
    'As Três Marias, de Rachel de Queiroz, restam 1',
    'A Escrava Isaura, de Bernardo Guimarães, restam 1',
    'Os Sertões, de Euclides da Cunha, restam 1',
    'O Guarani, José de Alencar, restam 1',
    'O Pagador de Promessas, Dias Gome, restams 1'
]

var quantcartasAção = 84
var quantcartasPassivas = 57
var quantcartasLivros = 20

var botões = document.querySelectorAll('.botãoCarta')

var cartaRodada = null
var txtEfeito = null

function sortearCarta(tipo) {

    var numeroSorteado = Math.floor(Math.random() * (tipo).length)

    let cartaEscolhida = tipo[numeroSorteado]
    cartaRodada = cartaEscolhida
    let quantCartaEscolhida = cartaEscolhida.slice(-1)

    if (quantCartaEscolhida == '0') {
        while (quantCartaEscolhida == '0') {
            numeroSorteado = Math.floor(Math.random() * tipo.length)
            cartaEscolhida = tipo[numeroSorteado]
            cartaRodada = cartaEscolhida
            quantCartaEscolhida = cartaEscolhida.slice(-1)
        }
    }

    switch (quantCartaEscolhida) {
        case '1':
            tipo[numeroSorteado] = tipo[numeroSorteado].replace('1', '0')
            break;

        case '2':
            tipo[numeroSorteado] = tipo[numeroSorteado].replace('2', '1')
            break;

        case '3':
            tipo[numeroSorteado] = tipo[numeroSorteado].replace('3', '2')
            break;
    }

    let fundoCarta = document.getElementById('fundoCarta')
    let txtAçãoRestam = document.querySelector("#açãoRestam")
    let txtPassivasRestam = document.querySelector("#passivasRestam")
    let txtLivtrosRestam = document.querySelector("#livrosRestam")

    switch (tipo) {
        case cartasAção:
            fundoCarta.style.backgroundImage = 'url(Assets/Carta_Bronze_F.jpg)'
            quantcartasAção -= 1
            txtAçãoRestam.innerText = quantcartasAção
            break
        case cartasPassivas:
            fundoCarta.style.backgroundImage = 'url(Assets/Carta_Azul_F.jpg)'
            quantcartasPassivas -= 1
            txtPassivasRestam.innerText = quantcartasPassivas
            botões[0].classList.toggle('esconder')
            botões[1].classList.toggle('esconder')
            botões[2].classList.toggle('esconder')
            botões[3].classList.toggle('esconder')
            break
        case cartasLivros:
            fundoCarta.style.backgroundImage = 'url(Assets/Carta_Dourada_F.jpg)'
            quantcartasLivros -= 1
            txtLivtrosRestam.innerText = quantcartasLivros
            botões[0].classList.toggle('esconder')
            botões[1].classList.toggle('esconder')
            botões[2].classList.toggle('esconder')
            botões[3].classList.toggle('esconder')
            break
    }

    txtEfeito = document.getElementById('efeito')
    txtEfeito.innerText = tipo[numeroSorteado]

}

function trocarPag() {
    let pagJogadores = document.querySelector('#pagJogadores')
    let pagSorteio = document.querySelector('#pagSorteio')
    pagJogadores.classList.toggle('esconder')
    pagSorteio.classList.toggle('esconder')
}

var cartasP1 = document.querySelector("#cartasP1")
var cartasP2 = document.querySelector("#cartasP2")
var cartasP3 = document.querySelector("#cartasP3")
var cartasP4 = document.querySelector("#cartasP4")

function adicionarCartaJogador(jogador) {
    let idAleatorio = Math.floor(Math.random() * 10000)
    switch (jogador) {
        case 1:
            cartasP1.innerHTML += `<p>-> ${cartaRodada} <button onclick="removerCarta(this.id)" id="${idAleatorio}" >Remover</button></p>`
            break;
        case 2:
            cartasP2.innerHTML += `<p>-> ${cartaRodada} <button onclick="removerCarta(this.id)" id="${idAleatorio}" >Remover</button></p>`
            break;
        case 3:
            cartasP3.innerHTML += `<p>-> ${cartaRodada} <button onclick="removerCarta(this.id)" id="${idAleatorio}">Remover</button></p>`
            break;
        case 4:
            cartasP4.innerHTML += `<p>-> ${cartaRodada} <button onclick="removerCarta(this.id)" id="${idAleatorio}">Remover</button></p>`
            break;
    }
    txtEfeito.innerText = ''
    botões[0].classList.toggle('esconder')
    botões[1].classList.toggle('esconder')
    botões[2].classList.toggle('esconder')
    botões[3].classList.toggle('esconder')
}

function mudarJogador(jogador) {
    switch (jogador) {
        case 1:
            cartasP1.classList.toggle("esconder")
            break;
        case 2:
            cartasP2.classList.toggle("esconder")
            break;
        case 3:
            cartasP3.classList.toggle("esconder")
            break;
        case 4:
            cartasP4.classList.toggle("esconder")
            break;
    }
}

function removerCarta(idCarta) {
    var cartaApagada = document.getElementById(`${idCarta}`).parentNode
    cartaApagada.parentElement.removeChild(cartaApagada)
}