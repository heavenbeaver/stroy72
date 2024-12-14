let servicesSection = document.querySelector('.services');
let serviceCard_1 = document.getElementById('sc-1');
let serviceCard_2 = document.getElementById('sc-2');
let serviceCard_3 = document.getElementById('sc-3');
let serviceCard_4 = document.getElementById('sc-4');

document.addEventListener('scroll', () => {
    const rect_1 = serviceCard_1.getBoundingClientRect();
    const rect_2 = serviceCard_2.getBoundingClientRect();
    const rect_3 = serviceCard_3.getBoundingClientRect();
    const rect_4 = serviceCard_4.getBoundingClientRect();
    const rect = servicesSection.getBoundingClientRect();

    const windowHeight = window.innerHeight;

    if (rect_1.top < windowHeight * 0.75 && rect_1.bottom > windowHeight * 0.25) {
        serviceCard_1.style.transform = `translateX(0)`;
        serviceCard_1.style.opacity = 1;
    }

    if (rect_2.top < windowHeight * 0.75 && rect_2.bottom > windowHeight * 0.25) {
        serviceCard_2.style.transform = `translateX(0)`;
        serviceCard_2.style.opacity = 1;
    }

    if (rect_3.top < windowHeight * 0.75 && rect_3.bottom > windowHeight * 0.25) {
        serviceCard_3.style.transform = `translateX(0)`;
        serviceCard_3.style.opacity = 1;
    }

    if (rect_4.top < windowHeight * 0.75 && rect_4.bottom > windowHeight * 0.25) {
        serviceCard_4.style.transform = `translateX(0)`;
        serviceCard_4.style.opacity = 1;
    }
    // if (rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25) {
    //     serviceCard_1.style.transform = `translateX(0)`;
    //     serviceCard_1.style.opacity = 1;
    //     serviceCard_2.style.transform = `translateX(0)`;
    //     serviceCard_2.style.opacity = 1;
    //     serviceCard_3.style.transform = `translateX(0)`;
    //     serviceCard_3.style.opacity = 1;
    //     serviceCard_4.style.transform = `translateX(0)`;
    //     serviceCard_4.style.opacity = 1;
    // }
})

let moreBtn = document.querySelector('.more__projects__title');
let moreContent = document.querySelector('.more__projects__content');

moreBtn.addEventListener('click', () => {
    if (!moreBtn.classList.contains('active')){
        moreBtn.classList.add('active');
        moreContent.style.display = 'flex';
        setTimeout(function(){
            moreContent.style.opacity = 1;
            moreContent.style.height = '100%';
        }, 100)
    } else {
        moreBtn.classList.remove('active');
        moreContent.style.height = 0;
        moreContent.style.opacity = 0;
        setTimeout(function() {
            moreContent.style.display = 'none';
        }, 100)

    }
    
})