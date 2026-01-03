const form = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskDescription = document.getElementById('new-task-description').value;

  const li = document.createElement('li');
  li.textContent = taskDescription;

  taskList.appendChild(li);
  form.reset();
});
