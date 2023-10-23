function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskList = document.getElementById('taskList');

  var li = document.createElement('li');
  var checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  var span = document.createElement('span');
  span.innerText = taskInput.value;

  li.appendChild(checkbox);
  li.appendChild(span);
  taskList.appendChild(li);

  taskInput.value = '';
}

// Add event listener to taskInput
document.getElementById('taskInput').addEventListener('keypress', function(event) {
  // Check if the key pressed was 'Enter'
  if (event.keyCode === 13) {
    // Prevent the default action to stop the form from being submitted
    event.preventDefault();
    // Call the addTask function
    addTask();
  }
});
