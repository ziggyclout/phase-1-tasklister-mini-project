// src/index.js

// Function to attach the form submit handler
const attachFormListener = () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    const input = document.getElementById('new-task-description');
    const taskText = input.value.trim();

    if (taskText !== '') {
      const li = document.createElement('li');
      li.textContent = taskText;

      // Optional: remove task on click
      li.addEventListener('click', () => {
        taskList.removeChild(li);
      });

      taskList.appendChild(li);
      form.reset();
    }
  });
};

// Attach listener immediately if DOM is ready, otherwise wait for DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', attachFormListener);
} else {
  attachFormListener();
}
