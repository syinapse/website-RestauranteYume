export function customLoad() {
    //funcao para fazer o efeito de transicao entre a tela de carregamento e o conteudo
    window.onload = function () {
        const intro = document.getElementById("inicio");
        setTimeout(() => {
            intro.classList.add("efeito-out");

            setTimeout(() => {
                intro.style.display = "none";
                content.classList.remove("hiden");
                content.classList.add("efeito-in");
            }, 1000);
        }, 3000); // 3000
    };


    function trocar(cor) {
        document.body.style.background = cor;
    }

    //Funcao para nao poder scrollar a tela, e esconer o coanteudo do index
    document.body.classList.add('no-scroll');


    setTimeout(() => {
        document.body.classList.remove('no-scroll');
    }, 5000);

    window.addEventListener('DOMContentLoaded', () => {
        document.body.classList.add('no-scroll');
        document.getElementById('conteudo2').classList.add('hidden');
        document.getElementById('inicio').classList.remove('hidden');


        setTimeout(() => {
            document.body.classList.remove('no-scroll');
            document.getElementById('conteudo2').classList.remove('hidden');
            document.getElementById('inicio').classList.add('hidden');
        }, 3000); // 5000
    });
}