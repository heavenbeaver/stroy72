const header = document.querySelector('.header');
const headerBanner = document.querySelector('.header__banner');

// кнопка для прокручивания на верх страницы
const arrowUp = document.querySelector('.up__arrow');

arrowUp.onclick = function () {
    window.scrollTo({ behavior: 'smooth', top: 0 });
};

window.onscroll = function () {
    if (scrollY > 600) {
        arrowUp.style.opacity = 1;
        arrowUp.style.pointerEvents = 'auto';
    } else {
        arrowUp.style.opacity = 0;
        arrowUp.style.pointerEvents = 'none';
    }
};

window.addEventListener('scroll', () => {
    // проверяем на сколько прокрутился экран
    if (window.scrollY >= headerBanner.scrollHeight / 1.5) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const bannerArrow = document.querySelector('.banner__arrow');
bannerArrow.addEventListener('click', () => {
    document.querySelector('.about').scrollIntoView({behavior: 'smooth'});
});

// АККОРДЕОН

function accordion(selector, onlyOne = false){
    const accordionWrapper = document.querySelector(selector);
    const accordionBtns = accordionWrapper.querySelectorAll('.accordion__btn');

    accordionBtns.forEach(function(btn){

        if (onlyOne) {
            btn.addEventListener('click', showOnlyCurrent);
        } else {
            btn.addEventListener('click', showContent);
        }

        function showContent() {
            const currentItem = btn.closest('.accordion__item');
            const currentContent = currentItem.querySelector('.accordion__content');

            currentItem.classList.toggle('active');

            if (currentItem.classList.contains('active')){
                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
            } else {
                currentContent.style.maxHeight = 0;
            }
        }

        function showOnlyCurrent(){
            const currentItem = btn.closest('.accordion__item');
            const currentContent = currentItem.querySelector('.accordion__content');
            // если кликаем по уже активному то скрываем
            if (currentItem.classList.contains('active')) {
                currentItem.classList.remove('active');
                currentContent.style.maxHeight = 0;
            } else {
                // убираем active у всех
                const accordionItems = accordionWrapper.querySelectorAll('.accordion__item');
                accordionItems.forEach(function(item){
                    item.classList.remove('active');
                    currentContent.style.maxHeight = 0;
                })

                // скрываем контент у всех
                const accordionContents = accordionWrapper.querySelectorAll('.accordion__content');
                accordionContents.forEach(function(content){
                    content.style.maxHeight = 0;
                })

                // делаем активным текущий блок
                currentItem.classList.add('active');

                // показываем контент текущего блока
                currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
            }
        }
    })
}

accordion('#accordion-1', true);
