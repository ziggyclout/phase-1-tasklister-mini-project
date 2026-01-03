function initializeTaskForm() {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const input = document.getElementById('new-task-description');
    const li = document.createElement('li');
    li.textContent = input.value;

    taskList.appendChild(li);
    form.reset();
  });
}

// Works in BOTH jsdom and browser
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeTaskForm);
} else {
  initializeTaskForm();
}
