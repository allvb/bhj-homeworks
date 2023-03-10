const xhr = new XMLHttpRequest();

function response(i) {
    const newXhr = new XMLHttpRequest();
    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.responseType = 'json';
    xhr.send();
}

function responseResult(id, i) {//функци запроса статистики
    const newXhr = new XMLHttpRequest();//создаем новый запрос
    newXhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    newXhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    newXhr.responseType = 'json';
    newXhr.send(`vote=${id}&answer=${i}`);

    document.getElementById('poll__answers').remove();//удаляем кнопки

    const answerStat = document.createElement('div');
    answerStat.classList.add('poll__answers');
    answerStat.setAttribute('id', 'poll__answers');
    document.querySelector('.poll').append(answerStat);
    
    newXhr.addEventListener('readystatechange', function() {
        if(newXhr.readyState === newXhr.DONE) {    
            for (let item of newXhr.response.stat) {
                const answerString = document.createElement('div');
                answerString.classList.add('poll__answer__string');
                answerStat.append(answerString);

                const responceAnswer = document.createElement('div');
                responceAnswer.textContent = `${item.answer} -`;
                answerString.append(responceAnswer);

                const strong = document.createElement('strong');
                const responseVotes = document.createElement('div');
                answerString.append(strong);
                strong.append(responseVotes);
                responseVotes.textContent = item.votes;
            }
        }
    });
}

function addQuestion(r) {//функция отрисовки вопроса и кнопок ответа
    const question = document.createElement('div');
    question.classList.add('poll__title');
    question.setAttribute('id', 'poll__title');
    question.textContent = r.data.title;
    document.querySelector('.poll').append(question);

    const answer = document.createElement('div');
    answer.classList.add('poll__answers');
    answer.classList.add('poll__answers_active')
    answer.setAttribute('id', 'poll__answers');
    document.querySelector('.poll').append(answer);

    for (let key of Object.keys(r.data.answers)) {//для каждого ответа рисуем кнопку
        const button = document.createElement('button');
        button.classList.add('poll__answer');
        button.textContent = r.data.answers[key];
        answer.append(button);

        button.onclick = () => {//обработчик клика по кнопке
            alert('Спасибо ваш голос засчитан');
            responseResult(r.id, key);//передаем id вопроса и номер кнопки ответа
        }
    }
}

response(xhr);//выполняем запрос

xhr.addEventListener('readystatechange', function() { //подписка по изменению статуса
    try {
        if (xhr.status != 200) {
          alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        }
    } catch(err) {
        alert("Запрос не удался");
    }
    if(xhr.readyState === xhr.DONE) {
        addQuestion(xhr.response); //передаем объект ответа
    }
});
