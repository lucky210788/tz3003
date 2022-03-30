function burgerMenu(selector) {
    const menu = document.querySelector('.menu');
    const button = document.querySelector(`.${selector}`);
    let isOpen = false;

    button.addEventListener('click', () => {
        toggleMenu();
    });

    document.addEventListener('click', (e) => {
        if (!e.path.includes(button) && !e.path.includes(menu) && isOpen) {
            toggleMenu();
        }
    });

    function toggleMenu() {
        button.classList.toggle('burger-menu-btn__active');
        if (button.classList.contains('burger-menu-btn__active')) {
            menu.classList.remove('mob-hide');
        } else {
            menu.classList.add('mob-hide');
        }
        isOpen = !isOpen;
    }
}

burgerMenu('burger-menu-btn');
