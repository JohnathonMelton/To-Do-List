const taskInput = document.getElementById('task');
const addButton = document.getElementById('add');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-task">Done</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';

        const completeButton = taskItem.querySelector('.complete-task');
        const taskSpan = taskItem.querySelector('span');

        completeButton.addEventListener('click', () => {
            taskSpan.classList.toggle('completed');
        });
    }
});
