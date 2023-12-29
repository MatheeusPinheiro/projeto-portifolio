

let btnMenu = document.querySelector('#btn-menu')
let menu = document.querySelector('#menu-mobile')
let overlay = document.querySelector('#overlay-menu')

function abrirMenu() {
    menu.classList.add('abrir-menu')
}

function fecharMenu() {
    menu.classList.remove('abrir-menu')
}


btnMenu.addEventListener('click', abrirMenu)

menu.addEventListener('click', fecharMenu)

overlay.addEventListener('click', fecharMenu)


