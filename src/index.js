// src/index.js

// Select the form and task list immediately
const form = document.querySelector('#create-task-form');
const taskList = document.querySelector('#tasks');

// Add submit event listener
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload

  // Get input value
  const input = document.querySelector('#new-task-description');
  const taskText = input.value.trim();

  // Only add non-empty tasks
  if (taskText !== "") {
    const li = document.createElement('li'); // Create a new list item
    li.textContent = taskText;               // Set its text
    taskList.appendChild(li);                // Append to task list

    input.value = ''; // Clear input field
  }
});
