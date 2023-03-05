let xhr = new XMLHttpRequest();

function addItem(code, value) { //функция создания блока с курсами валют
    const item = document.createElement('div');//создаем блок с классом item
    item.classList.add('item');
    document.getElementById('items').append(item);//добавляем его в блок с классом items

    const itemCode = document.createElement('div');//создаем блок с классом item__code
    itemCode.classList.add('item__code');
    itemCode.textContent = `${code}`;
    item.append(itemCode);//добавляем его в блок с классом item

    const itemValue = document.createElement('div');//создаем блок с классом item__value
    itemValue.classList.add('item__value');
    itemValue.textContent = `${value}`;
    item.append(itemValue);//добавляем его в блок с классом item

    const itemCurrency = document.createElement('div');//создаем блок с классом item__currency
    itemCurrency.classList.add('item__currency');
    itemCurrency.textContent = 'руб';
    item.append(itemCurrency);//добавляем его в блок с классом item
}

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';//тип ответа с сервера
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === xhr.DONE) {
        document.getElementById('loader').classList.remove('loader_active');//не показываем заставку
        const valutes = xhr.response.response.Valute;//объект из ответа сервера с валютами
        for (let code in valutes) {
            addItem(valutes[code].CharCode, valutes[code].Value);
        }
    }
}