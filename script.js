var cartasAção = [
    'Avance 2 casas 4',
    'Avance 3 casas 4',
    'Todos Avançam 2 casas 4',
    'Todos Avançam 3 casas 4',
    'escolha pra ver um livro de alguém 4',
    'Se a maioria dos jogadores estiverem a sua frente eles andam 2 casas, caso a maioria estiver atras de você eles avançam 2 casas 4',
    'Se a maioria dos jogadores estiverem a sua frente eles voltam 2 casas, caso a maioria estiver atras de você eles voltam 2 casas 4',
    'Escolha alguém para trocar de lugar no tabuleiro (não pode ser defendida) 4',
    'Todos os seus adversários devem descarta um livro 4',
    'Você ganha um livro 4',
    'Você deve pegar mais 3 cartas de ação 4',

    'Volte 2 casas 4',
    'Volte 3 casas 4',
    'Escolha alguém para ver um de seus livros 4',
    'Todos voltam 2 casas 4',
    'Todos voltam 3 casas 4',
    'Se tiver jogador jogadores a sua frente avance 2 casas, se não tiver volte 2 casas 4',
    'Você deve dar um livro pra outro jogador de sua escolha 4',
    'Todos os seus adversários ganham um livro 4',
    'Você fica o próximo turno sem jogar 4',
    'Você perde um livro 4',
]

var cartasPassivas = [
    'Escolha alguém para voltar três casas. 3',
    'Escolha alguém e role o dado, caso caia par, a pessoa volta 3 casas e se cair ímpar ela avança 3 casas. 3',
    'Vá para a casa de livro mais próximo 3',
    'Escolha um livro aleatório de alguém e descarte-o 3',
    'Escolha uma carta passiva aleatória de alguém e descarte-o 3',
    'Roubar um livro aleatório do próximo jogador 3',
    'Escolher um player e roubar um livro aleatório dele 3',
    'Troca um livro seu por um livro aleatório de outro jogador 3',

    'Reverse card 3',
    'Negue efeitos de roubo 3',
    'Negue efeito de carta de ação 3',
    'O efeito negativo que te afetaria iria para um jogador que não seja a pessoa que jogou 3',
]

var cartasLivros = [
    ' "O Pagador de Promessas" - Dias Gomes vale 2 pontos 1',
    ' "Memórias Póstumas de Brás Cubas" - Machado de Assis vale 3 pontos 1',
    ' "Dom Casmurro" - Machado de Assis vale 2 pontos 1',
    ' "O Guarani" - José de Alencar vale um pontos 1',
    ' "Iracema" - José de Alencar vale 2 pontos 1',
    ' "Os Sertões" - Euclides da Cunha vale   pontos2 1',
    ' "Macunaíma" - Mário de Andrade vale 3 pontos 1',
    ' "Casa-Grande & Senzala" - Gilberto Freyre vale 3 pontos 1',
    ' "Grande Sertão: Veredas" - Guimarães Rosa vale 3 pontos 1',
    ' "Vidas Secas" - Graciliano Ramos vale 3 pontos 1',
    ' "Claro Enigma" - Carlos Drummond de Andrade vale um pontos 1',
    ' "Sagarana" - João Guimarães Rosa vale 2 pontos 1',
    ' "O Cortiço" - Aluísio Azevedo vale 3 pontos 1',
    ' "Quincas Borba" - Machado de Assis vale 2 pontos 1',
    ' "Memórias de um Sargento de Milícias" - Manuel Antônio de Almeida vale 3 pontos 1',
    ' "A Hora da Estrela" - Clarice Lispector vale 2 pontos 1',
    ' "Capitães da Areia" - Jorge Amado vale 3 pontos 1',
    ' "O Triste Fim de Policarpo Quaresma" - Lima Barreto vale 3 pontos 1',
    ' "A Moreninha" -  Joaquim Manuel De Macedo vale 2 pontos 1',
    ' "O Primo Basílio" - José Maria de Eça de Queirós vale 1 pontos 1',
    ' "A Escrava Isaura" - Bernardo Guimarães vale 2 pontos 1',
    ' "O Picapau Amarelo" - Monteiro Lobato vale 3 pontos 1',
    ' "O Auto da Compadecida" - Ariano Suassuna vale 3 pontos 1',
    ' "Os Ratos" - Dyonélio Machado vale 2 pontos 1',
    ' "O Seminário dos Ratos" - Lygia Fagundes Telles vale 3 pontos 1',
    ' "A Pata da Gazela" - José de Alencar vale um ponto 1',
    ' "O Seminarista" - Bernardo Guimarães vale 2 pontos 1',
    ' "O Feijão e o Sonho" - Orígenes Lessa vale um pontos 1',
    ' "O Ateneu" - Raul Pompeia vale 3 pontos 1',
    ' "O Alienista" - Machado de Assis vale 3 pontos 1',
]

var quantcartasAção = 63
var quantcartasPassivas = 36
var quantcartasLivros = 30

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