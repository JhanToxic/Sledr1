'use stict';

document.addEventListener("DOMContentLoaded", (event) => {
  

    console.log("DOM fully loaded and parsed");



    const slides = document.querySelectorAll('.slide');
    let effect = 0;

    // Устанавливаем начальные позиции слайдов
    slides.forEach((slide, index) => {
        slide.style.left = `${index * 100}%`;
    });

    // Функция для смены слайдов
    const slideimage = () => {
        slides.forEach((slide) => { 
            slide.style.transform = `translateX(-${effect * 100}%)`;
        });
    };

    // Переключение на следующий слайд (зацикливание)
    const NextSlide = () => {
        if (effect < slides.length - 1) { 
            effect++;
        } else {
            effect = 0; // Возврат к первому слайду
        }
        slideimage();
    };

    // Переключение на предыдущий слайд (зацикливание)
    const PervSlide = () => {
        if (effect > 0) { 
            effect--;
        } else {
            effect = slides.length - 1; // Переход к последнему слайду
        }
        slideimage();
    };

    document.querySelectorAll('.first-toogle')[0].addEventListener('click',PervSlide)

    document.querySelectorAll('.second-toogle')[0].addEventListener('click',NextSlide)

});