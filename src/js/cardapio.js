import { toggleHambuguer } from "./hamburguer.js";

let pratos = []
const endpointAPI = "https://syinapse.github.io/YumeMenuAPI/yumeMenu.json";

const btnPromos = document.getElementById('btnPromo');
const btnEntrada = document.getElementById('btnEntrada');
const btnPrincipal = document.getElementById("btnPrincipal");
const btnBebida = document.getElementById("btnBebida");
const btnSobremesa = document.getElementById("btnSobremesa");

toggleHambuguer();
buscarPratos();
async function buscarPratos() {
    const res = await fetch(endpointAPI); // Realiza a requisição para o link da API. O método fetch() só retorna erro caso ocorra problemas na rede. Precisa do await junto com o seu retorno.
    pratos = await res.json(); // Em base do response retornado, a array de livros recebe em formato de objetos.
    pratos.sort();
    exibirNaTela(pratos);
}


btnPrincipal.addEventListener('click', () => {
    removeEstilo();
    const principais = getPratoCategoria("principal");
    aplicaEstilo(btnPrincipal);
    exibirNaTela(principais);
})

btnEntrada.addEventListener('click', () => {
    removeEstilo();
    const entrada = getPratoCategoria("entrada");
    aplicaEstilo(btnEntrada);
    exibirNaTela(entrada);
})

btnPromos.addEventListener('click', () => {
    removeEstilo();
    exibirNaTela(getPratoPromos());
    aplicaEstilo(btnPromos);
})

btnBebida.addEventListener('click', () => {
    removeEstilo();
    const bebidas = getPratoCategoria("bebidas")
    aplicaEstilo(btnBebida);
    exibirNaTela(bebidas);
})

btnSobremesa.addEventListener('click', () => {
    removeEstilo();
    const sobrem = getPratoCategoria("sobremesa");
    aplicaEstilo(btnSobremesa);
    exibirNaTela(sobrem);
})

// Exibir na tela

function exibirNaTela(pratos) {
    const menu = document.getElementById('menu');
    limparTela(menu);
    pratos.forEach(prato => {
        menu.appendChild(criarCard(prato));
    });
}

// Filtros de prato

function getPratoCategoria(categoria) {
    return pratos.filter(p => p.categoria === categoria);
}

function getPratoPromos() {
    return pratos.filter(p => p.temDesconto);
}

function limparTela(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
// Criando Card de Cardápio

function criarCard(prato) {
    const cardPrato = document.createElement('article');
    const img = document.createElement('img');
    const divInfos = document.createElement('div');
    const divTitulo = document.createElement('div');
    const nomePrato = document.createElement('h2');
    const btnPeca = document.createElement('button');
    const divPrecos = document.createElement('div');
    const precoAtual = document.createElement('h3');
    const mark = document.createElement('span');
    const precoDescontado = document.createElement('h4');
    const ingredientes = document.createElement('p');
    
    // Definindo os valores nos atributos
    cardPrato.classList.add("pratoMenu");
    img.classList.add("ilustraComida");
    img.src = prato.img;
    img.alt = prato.alt;
    divInfos.classList.add("pratoInfo");
    
    divTitulo.classList.add("cardTitulo");
    nomePrato.textContent = prato.nome;
    btnPeca.classList.add("btnPedir");
    btnPeca.textContent = "Peça Agora"

    divPrecos.classList.add("cardPreco");
    mark.classList.add("marked");
    mark.textContent = prato.preçoOriginal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });
    precoDescontado.textContent = prato.preçoDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL' });
    ingredientes.textContent = prato.ingredientes;
    
    if (!prato.temDesconto) {
        precoDescontado.style.display = 'none';
    }

    // Adicionando ao card
    precoAtual.appendChild(mark);
    divTitulo.appendChild(nomePrato);
    divTitulo.appendChild(btnPeca);
    divPrecos.appendChild(precoAtual);
    divPrecos.appendChild(precoDescontado);
    divInfos.appendChild(divTitulo);
    divInfos.appendChild(divPrecos);
    divInfos.appendChild(ingredientes);
    
    cardPrato.appendChild(img);
    cardPrato.appendChild(divInfos);

    return cardPrato;
}

function aplicaEstilo(botao) {
     botao.style.backgroundColor = '#EB96C1'
}

function removeEstilo() {
    const botoes = document.querySelectorAll(".btnCardapio");
    botoes.forEach(b => {
        b.style.backgroundColor = '';
    })
}
