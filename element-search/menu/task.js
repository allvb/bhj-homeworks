const arrayMenuItem = Array.from(document.getElementsByClassName('menu__item'));
let indexOfActiveMenu;//индекс открытого меню

for (let i = 0; i < arrayMenuItem.length; i++) {
    const menu = arrayMenuItem[i].querySelector('.menu');
    if (menu) {
        arrayMenu__item[i].querySelector('.menu__link').onclick = function() {
            if (indexOfActiveMenu && indexOfActiveMenu !== i) {//проверяем есть ли другое открытое меню
                const activeMenu = arrayMenuItem[indexOfActiveMenu].querySelector('.menu');
                activeMenu.className = 'menu menu_sub';//закрываем другое открытое меню
                indexOfActiveMenu = undefined;
            }
            if (!indexOfActiveMenu) {//если кликнутое меню закрыто то окрываем его
                menu.classList.add('menu_active');
                indexOfActiveMenu = i;
            } else {
                menu.className = 'menu menu_sub';//если кликнутое меню открыто то закрываем его
                indexOfActiveMenu = undefined;
            }
            return false;
        }
    }
}
