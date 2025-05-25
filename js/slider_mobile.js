const sliderMobile = document.querySelector('.slider__mobile');
const sliderMobileTrack = document.querySelector('.slider__track__mobile');
const slidesMobile = document.querySelectorAll('.slide__mobile');
isGrub = false;
let startMousePosition;
let swipeLenght;
let sliderMobilePosition = 0;
let slideWidth = Math.round(sliderMobileTrack.querySelector('.slide__mobile').offsetWidth);
let maxOffsetMobile = slideWidth * (slidesMobile.length - 1);
let currentSlideMobile = 0;
// ===================================================================

sliderMobile.addEventListener('mousedown', function (e) {
    isGrub = true;
    startMousePosition = e.clientX;
    sliderMobileTrack.style.transition = '';
})

sliderMobile.addEventListener('mousemove', function (e) {
    if (!isGrub) return;

    swipeLenght = startMousePosition - e.clientX;
    const newPosition = sliderMobilePosition - swipeLenght;
    sliderMobileTrack.style.transform = `translateX(${newPosition}px)`;
})

sliderMobile.addEventListener('mouseup', function () {
    isGrub = false;

    if (swipeLenght > 150) {
        // если свайп больше 150 то позиция слайдера будет равна 
        sliderMobilePosition += -slideWidth;
    }
    else if (swipeLenght < -150) {
        sliderMobilePosition -= -slideWidth;
    }

    sliderMobilePosition = Math.min(0, Math.max(sliderMobilePosition, -maxOffsetMobile))
    sliderMobileTrack.style.transform = `translateX(${sliderMobilePosition}px)`; // Применяем новую позицию
    sliderMobileTrack.style.transition = 'transform 0.3s ease'; // Возвращаем плавность

    swipeLenght = 0;
})

sliderMobileTrack.addEventListener('mouseleave', function () {
    isGrub = false;
})

// ===================================================================

sliderMobile.addEventListener('touchstart', (e) => {
    isGrub = true;
    startMousePosition = e.touches[0].clientX;
    sliderMobileTrack.style.transition = ''; // Возвращаем плавность
}, { passive: true });

sliderMobile.addEventListener('touchmove', (e) => {
    if (!isGrub) return;

    e.preventDefault();

    swipeLenght = startMousePosition - e.touches[0].clientX;
    const newPosition = sliderMobilePosition - swipeLenght;

    sliderMobileTrack.style.transform = `translateX(${newPosition}px)`;

    console.log(swipeLenght)
    console.log(sliderMobilePosition)
}, { passive: false })

sliderMobile.addEventListener('touchend', function () {
    if (swipeLenght > 20) {
        sliderMobilePosition -= slideWidth;
    }
    else if (swipeLenght < -20) {
        sliderMobilePosition += slideWidth;
    }

    sliderMobilePosition = Math.min(0, Math.max(sliderMobilePosition, -maxOffsetMobile))
    sliderMobileTrack.style.transition = '0.4s ease'; // Возвращаем плавность
    sliderMobileTrack.style.transform = `translateX(${sliderMobilePosition}px)`; // Применяем новую позицию

    isGrub = false;
    swipeLenght = 0;
})

sliderMobile.addEventListener('touchcancel', function () {
    swipeLenght = 0;
    isGrub = false;
    sliderMobileTrack.style.transition = '0.3s ease';
    sliderMobileTrack.style.transform = `translateX(${sliderMobilePosition}px)`;
});