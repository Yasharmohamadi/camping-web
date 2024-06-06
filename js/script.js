const menuBtn = document.querySelector('.nav__btn')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('nav__btn--open')
})