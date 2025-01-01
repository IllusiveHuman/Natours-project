'use strict'

const menu_btn = document.querySelector('.navigation__button')
const span_menu_btn = document.querySelector('.navigation__icon')
const navigation_background = document.querySelector('.navigation__background')
const navigation_nav = document.querySelector('.navigation__nav')

// after & before of span_menu_btn
const beforeStyles = window.getComputedStyle(span_menu_btn, '::before');
const afterStyles = window.getComputedStyle(span_menu_btn, '::after');
// console.log(beforeStyles, afterStyles)

const openNav = function () {
    navigation_nav.classList.toggle('u-hidden')
}

menu_btn.addEventListener('click', () => {
    navigation_background.classList.toggle('navigation__open')
    document.body.classList.toggle('u-isOpen')
    setTimeout(openNav, 200)

    if (span_menu_btn.style.backgroundColor != 'transparent') {
        span_menu_btn.style.backgroundColor = 'transparent'
        span_menu_btn.classList.add('navigation__button__after-rotate')
        span_menu_btn.classList.add('navigation__button__before-rotate')

    }
    else {
        span_menu_btn.style.backgroundColor = '#333'
        span_menu_btn.classList.remove('navigation__button__after-rotate')
        span_menu_btn.classList.remove('navigation__button__before-rotate')
    }
})