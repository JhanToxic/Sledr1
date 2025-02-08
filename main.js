const slides = document.querySelectorAll('.slide');
var effect = 0;

slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slideimage = () => {
    slides.forEach((slide) => { 
        slide.style.transform = `translateX(-${effect * 100}%)`;
    });
};

const NextSlide = () => {
    if (effect < slides.length - 1) { 
        effect++;
        slideimage();
    }
};

const PervSlide = () => {
    if (effect != 0) { 
        effect--;
        slideimage();
    }
};
