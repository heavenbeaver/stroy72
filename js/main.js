let servicesSection = document.querySelector('.services');
let serviceCard_1 = document.getElementById('sc-1');
let serviceCard_2 = document.getElementById('sc-2');
let serviceCard_3 = document.getElementById('sc-3');
let serviceCard_4 = document.getElementById('sc-4');


// document.addEventListener('scroll', () => {
//     const rect_1 = serviceCard_1.getBoundingClientRect();
//     const rect_2 = serviceCard_2.getBoundingClientRect();
//     const rect_3 = serviceCard_3.getBoundingClientRect();
//     const rect_4 = serviceCard_4.getBoundingClientRect();
//     const rect = servicesSection.getBoundingClientRect();

//     const windowHeight = window.innerHeight;

//     if (rect_1.top < windowHeight * 0.75 && rect_1.bottom > windowHeight * 0.25) {
//         serviceCard_1.style.transform = `translateX(0)`;
//         serviceCard_1.style.opacity = 1;
//     }

//     if (rect_2.top < windowHeight * 0.75 && rect_2.bottom > windowHeight * 0.25) {
//         serviceCard_2.style.transform = `translateX(0)`;
//         serviceCard_2.style.opacity = 1;
//     }

//     if (rect_3.top < windowHeight * 0.75 && rect_3.bottom > windowHeight * 0.25) {
//         serviceCard_3.style.transform = `translateX(0)`;
//         serviceCard_3.style.opacity = 1;
//     }

//     if (rect_4.top < windowHeight * 0.75 && rect_4.bottom > windowHeight * 0.25) {
//         serviceCard_4.style.transform = `translateX(0)`;
//         serviceCard_4.style.opacity = 1;
//     }
//     // if (rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25) {
//     //     serviceCard_1.style.transform = `translateX(0)`;
//     //     serviceCard_1.style.opacity = 1;
//     //     serviceCard_2.style.transform = `translateX(0)`;
//     //     serviceCard_2.style.opacity = 1;
//     //     serviceCard_3.style.transform = `translateX(0)`;
//     //     serviceCard_3.style.opacity = 1;
//     //     serviceCard_4.style.transform = `translateX(0)`;
//     //     serviceCard_4.style.opacity = 1;
//     // }
// })

const header = document.querySelector('.header');
const headerBanner = document.querySelector('.header__banner');

window.addEventListener('scroll', () => {
    // проверяем на сколько прокрутился экран
    if (window.scrollY >= headerBanner.scrollHeight) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

const bannerArrow = document.querySelector('.banner__arrow');
bannerArrow.addEventListener('click', () => {
    document.querySelector('.about').scrollIntoView({behavior: 'smooth'});
})