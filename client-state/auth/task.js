const signIn = document.getElementById('signin__form');//элемент форма

function request(method, url) { // функция запроса
    const formData = new FormData(signIn); //создание объекта формдата
    const xhr = new XMLHttpRequest(); //создание запроса
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.addEventListener('readystatechange', () => { 
        if (xhr.readyState === xhr.DONE) {
            if (xhr.response.success) {
                if (!localStorage.id) {
                    localStorage.id = xhr.response.user_id;
                }
                login(); // создаем приветствие 
            } else {
                alert('Неверный логин/пароль');
                signIn.reset();
            }
        }
    });
}

function create(tag, className, classNameActive) { // функция отрисовки 
    const elem = document.createElement(tag);
    elem.classList.add(className);
    elem.classList.add(classNameActive);
    document.getElementById('signin').append(elem);
    return elem;
}

function login () { // функция приветствия
        signIn.classList.toggle('signin'); //скрываем форму
            
        const reg = create('div', 'welcome', 'welcome_active');
        reg.innerHTML = `Добро пожаловать, пользователь # ${localStorage.id}`;

        const btn = create('button', 'btn-out');
        btn.textContent = 'Выйти';
        btn.onclick = () => {
            localStorage.removeItem('id');
            location.reload();
        }
}        

signIn.addEventListener('submit', (e) => { //подписка на событие
    e.preventDefault();
    request('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
});

if (localStorage.id) { // Если в localStorage.id что-то есть то создаем приветствие
    login();
}
