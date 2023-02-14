//массив кнопок (на случай есл их несколько)
const dropDownValue = [...document.querySelectorAll('.dropdown__value')];
//массив списков внутри кнопок
const dropDownList = [...document.querySelectorAll('.dropdown__list')];

function dropUpDown(i) { //функция сворачивания и разворачивания списка
    dropDownList[i].className = dropDownList[i].className === 'dropdown__list' ? 'dropdown__list dropdown__list_active': 'dropdown__list';
}

for (let i = 0; i < dropDownValue.length; i++) {
    dropDownValue[i].addEventListener('click', () => {dropUpDown(i)});//сворачиваем или разворачиваем кнопку по клику
    const dropDownItem = dropDownList[i].querySelectorAll('.dropdown__item');//массив элементов списка в кнопке
    for (let j = 0; j < dropDownItem.length; j ++) {
        dropDownItem[j].onclick = function() {//обработчик клика на элементе развернутого списка
            let value = dropDownItem[j].querySelector('.dropdown__link');
            dropDownValue[i].textContent = value.textContent;
            dropUpDown(i);
            return false;
        }
    }
}