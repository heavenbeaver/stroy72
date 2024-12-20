const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.slider-track');
let currentIndex = 0;

// Установка начального активного слайда
const updateActiveSlide = () => {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        if (index === currentIndex) {
            slide.classList.add('active');
        }
    });

    // Смещение ленты слайдов
    const offset = -currentIndex * (slides[0].clientWidth + 20); // Учитываем ширину слайда и отступы
    track.style.transform = `translateX(${offset}px)`;
};

// Автопрокрутка
const autoSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateActiveSlide();
};

// Начинаем авто-слайд
setInterval(autoSlide, 3000); // Автопрокрутка каждые 3 секунды

// Инициализация
updateActiveSlide();