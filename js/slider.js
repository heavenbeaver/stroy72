const container = document.querySelector('.container');
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide')
const sliderTrack = document.querySelector('.slider__track');
const slide = document.querySelector('.slide');
const btnLeft = document.querySelector('.left');
const btnRight = document.querySelector('.right');
let currentPosition = 0;
let currentSlide = 0;
let offset = slide.scrollWidth + 64;
let maxOffset = (slides.length - 1) * -offset;
sliderTrack.style.paddingLeft = `${container.scrollWidth/2 - slide.scrollWidth/2}px`

function slideNext() {
    if (currentPosition > maxOffset) {
        currentPosition = currentPosition - offset;
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
        currentSlide++;
        slides.forEach((slide) => {
            slide.classList.remove('focus');
            slides[currentSlide].classList.add('focus');
        })
    } else {
        currentPosition = 0;
        currentSlide = 0;
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
        slides.forEach((slide) => {
            slide.classList.remove('focus');
            slides[currentSlide].classList.add('focus');
        })
    }
}

function slidePrev() {
    if (currentPosition != 0) {
        currentPosition = currentPosition + offset;
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
        currentSlide--;
        slides.forEach((slide) => {
            slide.classList.remove('focus');
            slides[currentSlide].classList.add('focus');
        })
    } else {
        currentPosition = maxOffset;
        currentSlide = slides.length - 1;
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
        slides.forEach((slide) => {
            slide.classList.remove('focus');
            slides[currentSlide].classList.add('focus');
        })
    }
}

btnRight.addEventListener('click', () => {
    slideNext();
    console.log(currentPosition)
});

btnLeft.addEventListener('click', () => {
    slidePrev();
});

// Автопрокрутка слайдера

let autoplayTimer;
let restartTimer;
let pauseDuration = 5000;
let autoplayInterval = 3000;

function scrollToRight() {
    autoplayTimer = setInterval(function(){
        slideNext();
    }, autoplayInterval)
}

function stopAutoplay() {
    clearInterval(autoplayTimer);
    clearInterval(restartTimer);
}

function restartAutoplay(){
    restartTimer = setTimeout(() => {
        scrollToRight();
    }, pauseDuration);
};

function handleButtonClick(){
    stopAutoplay();
    restartAutoplay();
}

btnLeft.addEventListener('click', handleButtonClick);
btnRight.addEventListener('click', handleButtonClick);
slider.addEventListener('mousedown', handleButtonClick);
slider.addEventListener('touchstart', handleButtonClick);

scrollToRight();

// листание слайдера

let startX = 0; // Начальная точка касания
let currentX = 0; // Текущая точка во время движения
let isSwiping = false; // Флаг, указывающий, что сейчас происходит свайп
let isGrubbing = false;

sliderTrack.addEventListener('mousedown', (e) => {
    slider.style.cursor = 'grabbing';
    startX = e.clientX;
    isGrubbing = true;
})

sliderTrack.addEventListener('mousemove', (e) => {
    if (!isGrubbing) return;
    currentX = e.clientX;
})

slider.addEventListener('mouseup', () => {
    if (!isGrubbing) return;
    
    const grubDistance = currentX - startX;
    if (grubDistance > 50) {
        slidePrev();
    } else if (grubDistance < -50) {
        slideNext();
    }

    // Сбрасываем флаги
    isGrubbing = false;
    startX = 0;
    currentX = 0;
    slider.style.cursor = 'grab';
})

// Обработчик начала касания
sliderTrack.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX; // Запоминаем начальную позицию пальца
    isSwiping = true;
});

// Обработчик движения пальца
sliderTrack.addEventListener('touchmove', (event) => {
    if (!isSwiping) return;
    currentX = event.touches[0].clientX; // Обновляем текущую позицию пальца
});

// Обработчик окончания касания
slider.addEventListener('touchend', () => {
    if (!isSwiping) return;
    const swipeDistance = currentX - startX; // Вычисляем расстояние свайпа
    // Если свайп длиннее 50px, определяем направление
    if (swipeDistance > 50) {
        slidePrev();
    } else if (swipeDistance < -50) {
        slideNext();
    } else {
        return
    }

    // Сбрасываем флаги
    isSwiping = false;
    startX = 0;
    currentX = 0;
});