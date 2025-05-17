export function toggleHambuguer() {
    const headerMenu = document.querySelector(".header-menu");
    const hamburguer = document.querySelector(".hamburguer");

    function toggleMenu() {
        const tog = hamburguer.classList.toggle('active');
        headerMenu.classList.toggle('active');
        if (tog && destaqueHome != null) {
            destaqueHome.style.zIndex = '-1';
        }
        else
            destaqueHome.style.zIndex = '1';
    }

    hamburguer.addEventListener('click', toggleMenu);

    headerMenu.addEventListener('click', (e) => {
        if (e.target.classList.contain('item-menu')) {
            toggleMenu();
        }
    });
}