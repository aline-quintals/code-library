/* =========================================
   MENU TOGGLE (abrir/fechar iframe)
========================================= */

const menuToggle = document.getElementById('menuToggle');
const menuFrame = document.querySelector('.menu-frame');
const content = document.getElementById('content');

menuToggle.addEventListener('click', () => {

    // abre/fecha menu
    menuFrame.classList.toggle('open');

    // ajusta conteúdo
    content.classList.toggle('full');

});


/* =========================================
   MENU ATIVO (highlight item)
========================================= */

const params = new URLSearchParams(window.location.search);
const page = params.get('page');

const items = document.querySelectorAll('.menu-item');

items.forEach(item => {

    if (item.dataset.page === page) {
        item.classList.add('active');
    }

});