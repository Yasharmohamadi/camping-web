const menuBtn = document.querySelector('.nav__btn')
const mobileNav = document.querySelector('.mobile-nav')
const menuItems = document.querySelectorAll('.menu__item-link')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('nav__btn--open')

    let btnClass = [...menuBtn.classList]

    if (btnClass.includes('nav__btn--open')) {
        mobileNav.style.right = '0'
    } else {
        mobileNav.style.right = '-30rem'
    }

})

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('menu__item-link--active')
    })
})