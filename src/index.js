document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = document.getElementById('new-task-description');
    const taskText = input.value;

    buildToDo(taskText);

    input.value = '';
  });
});

function buildToDo(taskText) {
  const taskList = document.getElementById('tasks');
  const li = document.createElement('li');
  li.textContent = taskText;
  taskList.appendChild(li);
}
