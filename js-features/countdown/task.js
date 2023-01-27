
const timeElement = document.getElementById('timer');
const oldTime = timeElement.textContent; // Запоминаем начальное значение
const link = document.getElementById('link');
const countDown = function () {
    let time = timeElement.textContent.split(':');
    if (time[0] === '00' && time[1] === '00' && time[2] === '00') { // Если время кончилось
        alert('Вы победили в конкурсе!');
        timeElement.textContent = oldTime.toString(); // Восстанавливаем начальное значение
        // location = '//rabotatam.ru/uploads/monthly_2017_04/large.58f1bdeda1c5c_.jpg.91c33c120ad86a4dbf2c50dd44d00890.jpg';
        link.click();
    } else if (time[0] !== '00' && time[1] === '00' && time[2] !== '00') { // Уменьшение часа
        time[0] = Number(time[0]) - 1;
        time[0] = time[0].toString().padStart(2, '0');
        time[1] = '59';
        time[2] = '59';
        return
        timeElement.textContent = time.join(':');
    } else if (time[1] !== '00' && time[2] === '00') { // Уменьшение минуты
        time[1] = Number(time[1]) - 1;
        time[1] = time[1].toString().padStart(2, '0');
        time[2] = '59'; 
        timeElement.textContent = time.join(':');
        return;
    } else if (time[2] !== '00') { // Уменьшение секунды
        time[2] = Number(time[2]) - 1;
        time[2] = time[2].toString().padStart(2, '0');
        timeElement.textContent = time.join(':');
    }   
}

setInterval(countDown, 1000);
