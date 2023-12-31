
const images = document.querySelectorAll('.slides_diplom .slides_slide  img');
const sliderLine = document.querySelector('.slides_diplom .slides_slide ');
let dots = document.querySelectorAll('.dots-item'),
    dotsArea = document.querySelector('.dots-block');
let count = 0;
let width;

function init() {
    //console.log('resize');
    width = document.querySelector('.slideon').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        // item.style.height = 'auto';
    });
    rollSlider();
}
// let timer = 0;
// makeTimer(); //Создаем интервал
// function makeTimer() {
//     clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
//     timer = setInterval(function() {
//         scrollSlide(1);
//         rollSlider(count);
//     }, 5000);
// }

init();
window.addEventListener('resize', init);

document.querySelector('.btns_left').addEventListener('click', () => scrollSlide(1));

document.querySelector('.btns_right').addEventListener('click', () => scrollSlide(-1));

dots.forEach((dot, index) => dot.addEventListener('click', () => setSlide(index)));

function scrollSlide(direction) {
    count = (count + direction + images.length) % images.length;
    moveSlide();
}

function setSlide(index) {
    count = index;
    moveSlide();
}

function moveSlide() {
    document.querySelector('.dots-item.active').classList.remove('active');
    document.querySelectorAll('.dots-item')[count].classList.add('active');

    rollSlider();
    // makeTimer();
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}


