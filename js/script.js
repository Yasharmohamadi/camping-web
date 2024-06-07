const menuBtn = document.querySelector('.nav__btn')
const mobileNav = document.querySelector('.mobile-nav')

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('nav__btn--open')

    let btnClass = [...menuBtn.classList]

    console.log(btnClass);
    if (btnClass.includes('nav__btn--open')) {
        mobileNav.style.right = '0'
    } else {
        mobileNav.style.right = '-30rem'
    }

})