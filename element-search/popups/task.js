const modalMain = document.getElementById('modal_main');
const modalClose = Array.from(document.getElementsByClassName('modal__close modal__close_times'));
const modalSucces = document.getElementById('modal_success');
const showSuccess = document.getElementsByClassName('show-success');

for (let i = 0; i < modalClose.length; i++) {
    modalClose[i].onclick = function() {
        let modal = this.closest('.modal');
        modal.className = 'modal';
    }
}

showSuccess.item(0).onclick = function () { // смена окон
    modalMain.className = 'modal';
    modalSucces.className = 'modal modal_active';
}

modalMain.classList.add('modal_active'); // активируем окно