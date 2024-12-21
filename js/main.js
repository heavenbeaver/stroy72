const header = document.querySelector('.header');
const headerBanner = document.querySelector('.header__banner');

window.addEventListener('scroll', () => {
    // проверяем на сколько прокрутился экран
    if (window.scrollY >= headerBanner.scrollHeight / 1.5) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

const bannerArrow = document.querySelector('.banner__arrow');
bannerArrow.addEventListener('click', () => {
    document.querySelector('.about').scrollIntoView({behavior: 'smooth'});
})