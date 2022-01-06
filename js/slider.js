let slider = document.getElementById('testimony__slider');
let btnLeft = document.getElementById('testimony__btnLeft');
let btnRight = document.getElementById('testimony__btnRight');

btnLeft.addEventListener('click', function(){
    slider.scrollLeft -= slider.offsetWidth;
});

btnRight.addEventListener('click', function(){
    slider.scrollLeft += slider.offsetWidth;
});

// --- Section Questions --- //
let titleQuestions = [...document.querySelectorAll('.questions__title')];
titleQuestions.forEach(question => {
    question.addEventListener('click', () => {
        let height = 0;
        let answer = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;

        addPadding.classList.toggle('questions__padding--add'); 

        question.children[0].classList.toggle('questions__arrow--rotate');

        if(answer.clientHeight === 0) {
            height = answer.scrollHeight;
        }

        answer.style.height = `${height}px`;
    })
});

// --- Section Menú MediaQuerie --- //
const openMenu = document.querySelector('.nav__menu');
const menu = document.querySelector('.nav__link');
const closeMenu = document.querySelector('.nav__close');

openMenu.addEventListener('click', () => {
    menu.classList.add('nav__link--show');
});

closeMenu.addEventListener('click', () =>{
    menu.classList.remove('nav__link--show');
});
































