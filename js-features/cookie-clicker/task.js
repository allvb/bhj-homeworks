const cookie = document.getElementById('cookie'); // Элемент картинка
const clicker__counter = document.getElementById('clicker__counter'); // Элемент счётчик
const clicker__speed = document.getElementById('clicker__speed'); // Элемент скорость клика в секунду
let flag = true;
let count = 0;
let oldclick = 0;
let newClick;

cookie.onclick = function() { 
    newClick = new Date(); // Время клика
    let speed = parseFloat((newClick - oldclick) / 1000); // Интервал между кликами в секундах
    clicker__speed.textContent = String((1 / speed).toFixed(2)); 
    oldclick = newClick;
    flag ? cookie.width = 250 : cookie.width = 200;
    flag = !flag;
    count++;
    clicker__counter.textContent = count.toString();
}