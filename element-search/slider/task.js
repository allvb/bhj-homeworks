const arrayOfImages = Array.from(document.querySelectorAll('.slider__item')); //массив слайдеров
const arrowRight = document.querySelector('.slider__arrow_next');
const arrowLeft = document.querySelector('.slider__arrow_prev');
const arrayOfSliderDots = Array.from(document.querySelectorAll('.slider__dot'));//массив точек

arrowRight.onclick = function () { //Нажимаем на правую стрелку
    let index = arrayOfImages.findIndex(e => e.className === 'slider__item slider__item_active') + 1;
    sliderGetActive(index);
}

arrowLeft.onclick = function() { //нажимаем на левую стрелку
    let index = arrayOfImages.findIndex(e => e.className === 'slider__item slider__item_active') - 1;
    sliderGetActive(index);
}
for (let i = 0; i < arrayOfSliderDots.length; i++) {
    arrayOfSliderDots[i].onclick = function() { //нажимаем на точку
        sliderGetActive(i);
    }
}

function sliderGetActive (index) { //функция изменения активного слайда
    let activeIndex = arrayOfImages.findIndex(e => e.className === 'slider__item slider__item_active');
    arrayOfImages[activeIndex].classList.remove('slider__item_active');
    arrayOfSliderDots[activeIndex].classList.remove('slider__dot_active');
    activeIndex = index === arrayOfImages.length ? 0 : index;
    activeIndex = index < 0 ? arrayOfImages.length -1 : activeIndex;
    arrayOfImages[activeIndex].classList.add('slider__item_active');
    arrayOfSliderDots[activeIndex].classList.add('slider__dot_active');
}

arrayOfSliderDots[0].className = 'slider__dot slider__dot_active';//зажигаем точку активного слайда