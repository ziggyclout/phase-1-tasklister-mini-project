document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#create-task-form');
  const taskList = document.querySelector('#tasks');
  const formInput = document.querySelector('#new-task-description');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // stop page refresh

    const task = formInput.value.trim();
    if (task !== "") {
      const li = document.createElement('li');
      li.textContent = task;

      // append directly to the ul
      taskList.appendChild(li);

      formInput.value = ''; // clear input
    }
  });
});
