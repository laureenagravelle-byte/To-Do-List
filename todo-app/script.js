document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // If any element is missing (script loaded in head), bail out safely
    if (!addBtn || !taskInput || !taskList) return;

    addBtn.addEventListener('click', addTask);
    // allow Enter to add a task
    taskInput.addEventListener('keyup', (e) => { if (e.key === 'Enter') addTask(); });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const li = document.createElement('li');
        li.textContent = taskText;

        // Toggle complete
        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Delete button
        const delBtn = document.createElement('button');
        delBtn.type = 'button';
        delBtn.textContent = 'X';
        delBtn.style.marginLeft = '10px';
        delBtn.setAttribute('aria-label', 'Delete task');
        delBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent toggle
            li.remove();
        });

        li.appendChild(delBtn);
        taskList.appendChild(li);
        taskInput.value = '';
    }
});
Js 
const addBtn = document.getElementById('addBtn');
const taskinput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener("click", addtask);

function addtask() {
    const taskText = taskinput.value.trim();
    if (taskText === "") return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // Toggle complete
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.style.marginLeft = '10px';
    delBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent toggle
        li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskinput.value = '';
}
