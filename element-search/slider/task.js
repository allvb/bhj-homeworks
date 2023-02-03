const arrayOfImages = Array.from(document.querySelectorAll('.slider__item')); //массив слайдеров
const arrowRight = document.querySelector('.slider__arrow_next');
const arrowLeft = document.querySelector('.slider__arrow_prev');
const arrayOfSliderDots = Array.from(document.querySelectorAll('.slider__dot'));//массив точек
let activeImage = 0;//идекс активного слайда

arrayOfSliderDots[activeImage].className = 'slider__dot slider__dot_active';//зажигаем точку активного слайда

arrowRight.onclick = function() {
    arrayOfImages[activeImage].className = 'slider__item';
    arrayOfSliderDots[activeImage].className = 'slider__dot';
    activeImage = activeImage === arrayOfImages.length - 1 ? 0 : activeImage + 1;
    arrayOfImages[activeImage].className =('slider__item slider__item_active');
    arrayOfSliderDots[activeImage].className = 'slider__dot slider__dot_active';
}
arrowLeft.onclick = function() {
    arrayOfImages[activeImage].className = 'slider__item';
    arrayOfSliderDots[activeImage].className = 'slider__dot';
    activeImage = activeImage === 0 ? arrayOfImages.length - 1 : activeImage - 1;
    arrayOfImages[activeImage].className =('slider__item slider__item_active');
    arrayOfSliderDots[activeImage].className = 'slider__dot slider__dot_active';
}
for (let i = 0; i < arrayOfSliderDots.length; i++) {
    arrayOfSliderDots[i].onclick = function() {
        if (i !== activeImage) {
            arrayOfImages[i].className = 'slider__item slider__item_active';
            arrayOfImages[activeImage].className = 'slider__item';
            arrayOfSliderDots[i].className = 'slider__dot slider__dot_active';
            arrayOfSliderDots[activeImage].className =  'slider__dot';
            activeImage = i;
        }
    }
}
