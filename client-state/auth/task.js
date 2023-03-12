const signIn = document.getElementById('signin__form');//элемент форма

signIn.addEventListener('submit', (e) => { //подписка на событие
    e.preventDefault();
    const formData = new FormData(signIn); //создание объекта формдата
    const xhr = new XMLHttpRequest(); //создание запроса
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => { 
        if (xhr.readyState === xhr.DONE) {
            if (xhr.response.success) { //при удачном входе
                let id = !localStorage.id ? xhr.response.user_id : localStorage.id; //присвоение id
                signIn.classList.toggle('signin'); //скрываем форму

                const reg = document.createElement('div'); //добавляем приветствие
                reg.classList.add('welcome');
                reg.classList.add('welcome_active');
                reg.innerHTML = 
                    `Добро пожаловать, пользователь # ${id}`
                document.getElementById('signin').append(reg);

                const btn = document.createElement('button'); //создаем кнопку выхода
                btn.classList.add('btn-out');
                btn.textContent = 'Выйти';
                btn.onclick = () => {
                    location.reload();
                }
                document.getElementById('signin').append(btn);
             } else { //если неверный пароль/логин
                alert('Неверный логин/пароль');
                signIn.reset();
            }
        }
    });
});

