document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // prevent page reload

    const input = document.getElementById('new-task-description');
    const taskText = input.value.trim();

    if (taskText !== '') {
      // Create new list item
      const li = document.createElement('li');
      li.textContent = taskText;

      // Optional: remove task on click
      li.addEventListener('click', () => {
        li.remove();
      });

      // Add the new task to the list
      taskList.appendChild(li);

      // Reset the form input
      form.reset();
    }
  });
});
