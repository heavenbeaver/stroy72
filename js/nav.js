const navBtnAbout = document.getElementById('about');
const navBtnServices = document.getElementById('services');
const navBtnPortfolio = document.getElementById('portfolio');
const navBtnContacts = document.getElementById('contacts');
const logo = document.querySelector('.nav__logo');
const getOrderBtn = document.querySelector('.get-order__btn');

navBtnAbout.onclick = () => {
    document.querySelector('.about').scrollIntoView({ behavior: 'smooth' });
}

navBtnServices.onclick = () => {
    document.querySelector('.services').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

navBtnPortfolio.onclick = () => {
    document.querySelector('.portfolio').scrollIntoView({ behavior: 'smooth' });
}

navBtnContacts.onclick = () => {
    document.querySelector('.contacts').scrollIntoView({ behavior: 'smooth' });
}

logo.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

getOrderBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.main-form').scrollIntoView({behavior: 'smooth'});
})