const checkBox = Array.from(document.querySelectorAll('.interest__check'));//массив флагов

for (const check of checkBox) {
    check.onchange = () => {
        const interest = check.closest('.interest');//находим родителя с классом interest
        const interestsChid = interest.querySelectorAll('.interests > .interest');//выбираем его только дочерние элементы с классом interest
        for (const child of interestsChid) {
            const input = child.querySelector('.interest__check');//у каждого дочернего элемента с классом interest находим его флаг
            input.checked = interest.querySelector('.interest__check').checked;//проставляем свойсто "отмечено" как у родительского флага
        }
    }
}
