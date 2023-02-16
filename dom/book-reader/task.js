const book = document.getElementById('book');//Книга
const fontSizes = book.querySelectorAll('.font-size');//список шрифтов
const textColors = book.querySelectorAll('div.book__control_color a.color');//список цветов шрифта
const backgroundColors = book.querySelectorAll('div.book__control_background a.color');//список цветов фона

for (const font of fontSizes) {//обработчик клика на размер шрифта
    font.onclick = function() {
        const size = font.dataset.size;
        const activeFont = book.querySelector('.font-size_active');//активный шрифт
        if (font === activeFont) {
            return false;
        }
        activeFont.classList.toggle('font-size_active');
        font.classList.toggle('font-size_active');
        book.classList.remove(`book_fs-${activeFont.dataset.size}`);//стираем предидущий класс шрифта книги
        if (size) {
            book.classList.add(`book_fs-${size}`);//добаляем новый класс книге
        }
        return false;
    };
}

for (const text of textColors) {//обработчик клика на цвет текста
    text.onclick = function () {
        const color = text.dataset.textColor;
        const activeTextColor = book.querySelector('div.book__control_color a.color.color_active');
        if (text === activeTextColor) {
            return false;
        }
        activeTextColor.classList.toggle('color_active');
        text.classList.toggle('color_active');
        book.classList.remove(`book_color-${activeTextColor.dataset.textColor}`);//стираем предидущий цвет текста книги
        book.classList.add(`book_color-${color}`);//добавляем новый класс цвета текста книги
        return false;
    }
}

for (const bg of backgroundColors) {//обработчик клика на цвет фона
    bg.onclick = function () {
        const color = bg.dataset.bgColor;
        const activeBgColor = book.querySelector('div.book__control_background a.color.color_active');
        if (bg === activeBgColor) {
            return false;
        }
        activeBgColor.classList.toggle('color_active');
        bg.classList.toggle('color_active');
        book.classList.remove(`book_bg-${activeBgColor.dataset.bgColor}`);//стираем предидущий цвет фона книги
        book.classList.add(`book_bg-${color}`);//добавляем новый класс цвета фона книге
        return false;
    }
}