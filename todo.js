document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return; // Don't add empty tasks

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn">×</button>
        `;
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';

        // Add event listener to mark task as completed
        li.querySelector('span').addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Add event listener to remove task
        li.querySelector('.remove-btn').addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }

    // Add task on button click
    addTaskBtn.addEventListener('click', addTask);

    // Add task on Enter key press
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
