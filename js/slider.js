// let slider = document.querySelector('.slider');
// let sliderTrack = document.querySelector('.slider__track');
// let slides = document.querySelectorAll('.slide');
// let slide = document.querySelector('.slide');
// // let sliderWrapper = document.querySelector('.slide__wrapper');
// let sliderBtnLeft = document.getElementById('sliderBtnLeft');
// let sliderBtnRight = document.getElementById('sliderBtnRight');
// let counterText = document.querySelector('.slides__counter');
// let counter = 1;
// let currentPosition = 0;
// let offset = slide.scrollWidth;
// let maxOffset = (slides.length - 1) * -offset;

// // начальное значение счетчика слайдера
// counterText.innerText = `${counter} из ${slides.length}`

// sliderBtnRight.addEventListener('click', () => {
//     if (currentPosition > maxOffset) {
//         currentPosition = currentPosition - offset;
//         sliderTrack.style.transform = `translateX(${currentPosition}px)`;
//         counter++;
//         counterText.innerText = `${counter} из ${slides.length}`
//     } else {
//         return
//     }
// });

// sliderBtnLeft.addEventListener('click', () => {
//     if (currentPosition != 0) {
//         currentPosition = currentPosition + offset;
//         sliderTrack.style.transform = `translateX(${currentPosition}px)`;
//         counter--;
//         counterText.innerText = `${counter} из ${slides.length}`
//     } else {
//         return
//     }
// });