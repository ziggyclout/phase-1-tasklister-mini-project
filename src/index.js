document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload

    const input = document.querySelector('#new-task-description');
    const taskText = input.value;

    if (taskText.trim() !== "") {
      const li = document.createElement('li'); // create a new list item
      li.textContent = taskText;               // set its text
      taskList.appendChild(li);                // append it to the task list

      input.value = ''; // clear the input field
    }
  });
});
