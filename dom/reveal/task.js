const divReveals = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
    for (let div of divReveals) { 
        if (div.getBoundingClientRect().top > window.innerHeight ||
            div.getBoundingClientRect().bottom > 0) {
            div.classList.add('reveal_active')
        } else {
            div.classList.remove('reveal_active');
        }
    }
});
