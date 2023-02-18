const divReveals = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
    for (let div of divReveals) { 
        
        if (div.getBoundingClientRect().top > 0 &&
            div.getBoundingClientRect().bottom < window.innerHeight) {
            div.classList.add('reveal_active')
        } else {
            div.classList.remove('reveal_active');
        }
    }
});

