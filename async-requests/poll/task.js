function response(method, url, header, id, i) { // функция создания запроса
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';
    xhr.setRequestHeader('Content-type', header);
    let voteAnswer = `vote=${id}&answer=${i}`;
    xhr.send(voteAnswer);
    return xhr;
}

function drawing(tag, className, text) { //функция отрисовки элемента
    const element = document.createElement(tag);
    element.classList.add(className);
    element.setAttribute('id', className);
    element.textContent = text;
    // document.querySelector('.poll').append(element);
    return element;
}

function responseResult(id, i) {//функци запроса статистики

    xhr = response('POST', 'https://students.netoservices.ru/nestjs-backend/poll', 'application/x-www-form-urlencoded', id, i);

    document.getElementById('poll__answers').remove();//удаляем кнопки

    const answerStat = drawing('div', 'poll_answers'); //добавляем блок для статистки отвтов
    document.querySelector('.poll').append(answerStat);
    
    xhr.addEventListener('readystatechange', function() { 
        if(xhr.readyState === xhr.DONE) {    
            for (let item of xhr.response.stat) {
                const answerString = drawing('div', 'poll__answer__string');
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

function addQuestion(r) {//функция отрисовки вопроса и кнопок 
    document.querySelector('.poll').append(drawing('div', 'poll__title', r.data.title)); //пишем вопрос
    const answer = drawing('div', 'poll__answers'); // создаём блок кнопок
    document.querySelector('.poll').append(answer);

    for (let key of Object.keys(r.data.answers)) {//для каждого ответа рисуем кнопку
        
        const button = drawing('button', 'poll__answer', r.data.answers[key]);
        // document.createElement('button');
        // button.classList.add('poll__answer');
        // button.textContent = r.data.answers[key];
        answer.append(button);

        button.onclick = () => {//обработчик клика по кнопке
            alert('Спасибо ваш голос засчитан');
            responseResult(r.id, key);//передаем id вопроса и номер кнопки ответа
        }
    }
}

let xhr = response('GET', 'https://students.netoservices.ru/nestjs-backend/poll', '');//выполняем запрос

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
