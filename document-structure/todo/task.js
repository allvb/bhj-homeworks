const form = document.getElementById('tasks__form'); //форма
const tasksList = document.getElementById('tasks__list'); //контейнер с задачами

function addTask () { //функция создания и добавления новой задачи
    const task = document.createElement('div');
    task.classList.add('task')
    task.innerHTML = `
        <div class="task__title">
            ${form.querySelector('.tasks__input').value}
        </div>
        <a href="#" class="task__remove">&times;</a>`
    tasksList.appendChild(task);
    task.querySelector('.task__remove').addEventListener('click', () => {
        task.remove();
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (form.querySelector('.tasks__input').value) {
        addTask();
    }
    form.reset();
});