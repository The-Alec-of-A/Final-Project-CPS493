document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const inProgressTasks = document.getElementById('in-progress-tasks');
    const completedTasks = document.getElementById('completed-tasks');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('task-title').value;
        const desc = document.getElementById('task-desc').value;
        const dueDate = document.getElementById('task-due-date').value;
        const priority = document.getElementById('task-priority').value;

        const taskItem = createTaskItem(title, desc, dueDate, priority);
        taskList.appendChild(taskItem);
        taskForm.reset();
    });

    function createTaskItem(title, desc, dueDate, priority) {
        const taskItem = document.createElement('div');
        taskItem.className = 'box';

        const taskContent = document.createElement('div');
        taskContent.className = 'content';
        taskContent.innerHTML = `<strong>${title}</strong> - ${desc} <br> Due: ${dueDate} <br> Priority: ${priority}`;

        const taskActions = document.createElement('div');
        taskActions.className = 'buttons';
        const inProgressButton = document.createElement('button');
        inProgressButton.className = 'button is-warning';
        inProgressButton.textContent = 'In Progress';
        inProgressButton.addEventListener('click', () => {
            inProgressTasks.appendChild(taskItem);
        });

        const completeButton = document.createElement('button');
        completeButton.className = 'button is-success';
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            completedTasks.appendChild(taskItem);
        });

        taskActions.appendChild(inProgressButton);
        taskActions.appendChild(completeButton);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(taskActions);

        return taskItem;
    }
});
