document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const taskInput = document.getElementById('new-task-description').value;
    buildToDo(taskInput);

    form.reset();
  });
});

function buildToDo(task) {
  const li = document.createElement('li');
  li.textContent = task;

  const taskList = document.getElementById('tasks');
  taskList.appendChild(li);
}
