const form = document.getElementById('form');
const progress = document.getElementById('progress');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
        progress.value = 0.25 * xhr.readyState;
    });

    xhr.open('POST', '/form/');
    const formData = new FormData(form);
    xhr.send(formData);
});

