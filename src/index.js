document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const task =
      event.target.elements['new-task-description'].value;

    buildToDo(task);
    form.reset();
  });
});

function buildToDo(task) {
  const li = document.createElement('li');
  li.textContent = task;


  const taskList = document.getElementById('tasks');
  taskList.appendChild(li);
}
