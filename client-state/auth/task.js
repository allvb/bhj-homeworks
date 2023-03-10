const signIn = document.getElementById('signin__form');

signIn.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signIn);
    // const login = document.getElementsByName('login')[0].value;
    // const password = document.getElementsByName('password')[0].value;
    // formData.append(login, login);
    // formData.append(password, password);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            console.log(xhr.response);
        }
    });
});

