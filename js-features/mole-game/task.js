const dead = document.getElementById('dead'); // Элемент счётчика успеха
const lost = document.getElementById('lost'); // Элемент счётчика неудачи
let countSuccess = 0; // Счётчик успеха
let countLost = 0; // Счётчик неудач
const hole = []; 
for (let i = 0; i < 9; i++) {
    hole[i] = document.getElementById(`hole${i + 1}`);
    hole[i].onclick = function() {
        if (hole[i].className.includes('hole_has-mole')) {
            countSuccess++;
            if (countSuccess === 10) {
                alert('Вы победили');
                countSuccess = 0;
                countLost = 0;
                lost.textContent = '0';
            }
            dead.textContent = countSuccess.toString();
        } else {
            countLost++;
            if (countLost === 5) {
                alert('Вы проиграли');
                countSuccess = 0;
                countLost = 0;
                dead.textContent = '0';
            }
            lost.textContent = countLost.toString();
        }
    }
}