const tabs = [...document.getElementsByClassName('tab')];
const tabsContent = [...document.getElementsByClassName('tab__content')];

function tabGetActive(i) { //функция активации таблицы с индексом i
    if (tabs[i].className !== 'tab tab_active') { //активна ли таблица с индексом i
        const tabActive = document.getElementsByClassName('tab tab_active'); 
        const contentActive = document.querySelector('.tab__content.tab__content_active');
        tabActive[0].className = 'tab'; //гасим активную таблицу
        contentActive.className = 'tab__content'; //закрываем текущее содержимое
        tabs[i].className = 'tab tab_active'; //подсвечиваем таблицу с индексом i
        tabsContent[i].classList.add('tab__content_active'); //выводим содержимое i-ой таблицы
    }
}

for (let i = 0; i < tabs.length; i++) { //назначаем каждой таблице обработчик по клику
    tabs[i].addEventListener('click', () => tabGetActive(i));
}

document.addEventListener('keydown', function(event) { //облаботчик по нажатию (влево и вправо)
    if (event.key === 'ArrowLeft') { //если нажата стрелка влево
        let index = tabs.findIndex((item) => item.className === 'tab tab_active');
        index = index === 0 ? tabs.length - 1 : index - 1;
        tabGetActive(index);
    }
    if (event.key === 'ArrowRight') { //если нажата стрелка вправо
        let index = tabs.findIndex((item) => item.className === 'tab tab_active');
        index = index === tabs.length - 1 ? 0 : index + 1;
        tabGetActive(index);
    }
} )