const rotator = document.querySelector('.rotator');
const rotatorCase = rotator.querySelectorAll('.rotator__case');
let caseItem = rotator.querySelector('.rotator__case.rotator__case_active');

setInterval(() => {
    caseItem.classList.remove('rotator__case_active');
    if (caseItem === rotator.lastElementChild) {//если достигаем последнего
                                                //переходим на первый
        caseItem = rotator.firstElementChild;
    } else {
        caseItem = caseItem.nextElementSibling;//иначе переходим на следующий
    }
    caseItem.classList.add('rotator__case_active');
    caseItem.style.color = caseItem.dataset.color;

}, caseItem.dataset.speed);