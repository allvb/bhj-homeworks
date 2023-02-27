const hasTooltip = document.getElementsByClassName('has-tooltip');//список ссылок

for (const item of hasTooltip) {
    const tooltip = document.createElement('div');//создаем div
    tooltip.classList.add('tooltip');//присваиваем ему класс
    tooltip.textContent = item.getAttribute('title');//содержание
    tooltip.setAttribute('style', 'top: 0; left: 0');//атрибуты
        
    item.appendChild(tooltip);//добавляем div
    
    item.onclick = () => { 
        const { top, left } = item.getBoundingClientRect();//находим координаты ссылки
        tooltip.style.top = top - 30 + 'px';//присваиваем кординаты подсказке
        tooltip.style.left = left + 'px';

        item.querySelector('.tooltip').classList.toggle('tooltip_active');//активируем подсказку
        return false;
    }
}
