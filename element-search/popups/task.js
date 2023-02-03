const modal_main = document.getElementById('modal_main');
const modal_succes = document.getElementById('modal_success');
const modal_close = document.getElementsByClassName('modal__close');
const show_success = document.getElementsByClassName('show-success');

modal_main.className = 'modal modal_active'; // активируем окно

modal_close.item(0).onclick = function() { 
    modal_main.className = 'modal';
}
modal_close.item(2).onclick = function() {
    modal_succes.className = 'modal';
}

show_success.item(0).onclick = function () { // смена окон
    modal_main.className = 'modal';
    modal_succes.className = 'modal modal_active';
}
