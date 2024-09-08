const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

const images = document.querySelectorAll('.image');
let slideNumber = 1;
const length = images.length;

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slideNumber*640}px)`;
    slideNumber++;
};
const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slideNumber-2)*640}px)`;
    --slideNumber;
};
const getFirstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slideNumber = 1;
};
const getLastSlide = ()=>{
    slider.style.transform = `translateX(-${(length-1)*800}px)`;
    slideNumber = length;
};

right.addEventListener('click',()=>{
   slideNumber < length ? nextSlide() : getFirstSlide();

});
left.addEventListener('click',()=>{
   slideNumber < 4 ? prevSlide() : getLastSlide();

});



window.addEventListener('scroll', function() {
    // Get the scroll position
    let scrollPosition = window.scrollY;

    // Calculate a color based on scroll position
    let red = Math.min(255, scrollPosition / 2); // Adjust the value to control the intensity
    let green = Math.min(255, 255 - scrollPosition / 4);
    let blue = Math.min(255, scrollPosition / 3);

    // Set the background color
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});


