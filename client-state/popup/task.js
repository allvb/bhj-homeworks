const modalClose = document.querySelector('.modal__close');

function modalActive () {
    document.querySelector('.modal').classList.toggle('modal_active');
}

modalClose.addEventListener('click', () => {
    modalActive();
    document.cookie = "modal=closed";
});

const pairs = document.cookie.split('; ');

if (!pairs.some(elem => elem === 'modal=closed')) { //если не содержит куки 'modal=closed'
    modalActive();
}
