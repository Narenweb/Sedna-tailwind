import './css/tailwind.css';
document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.nav');
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const position = window.scrollY;
        if(position){
        header.classList.add('fixed-navbar');

        }
        else{
        header.classList.remove('fixed-navbar');

        }
    })
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active-close');
        navbar.classList.toggle('nav-active');
        header.classList.toggle('header-active');
        // header.style.height="100vh";
    })
});