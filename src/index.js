document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // stop the form from reloading the page

    const taskInput = document.querySelector('#new-task-description');
    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;
      taskList.appendChild(li);
      taskInput.value = ''; // clear input
    }
  });
});
