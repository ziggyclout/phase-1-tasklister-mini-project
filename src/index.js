// Select form and task list
const form = document.getElementById('create-task-form');
const taskList = document.getElementById('tasks');

// Add submit event listener
form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get input value
  const task = document.getElementById('new-task-description').value;

  // Build and add task
  buildToDo(task);

  // Clear input
  form.reset();
});

// Function to create and append task
function buildToDo(task) {
  const li = document.createElement('li');
  li.textContent = task;
  taskList.appendChild(li);
}
