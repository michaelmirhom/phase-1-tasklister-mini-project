document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
form.addEventListener("submit", handleFormSubmit);
  
})
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form's default behavior

  const taskDescription = document.getElementById("new-task-description").value;
  const taskList = document.getElementById("tasks");

  if (taskDescription.trim() === "") {
    alert("Please enter a task description.");
    return;
  }
  const newTask = document.createElement("li");
  newTask.innerText = taskDescription;

  taskList.appendChild(newTask);
  form.reset(); // Reset the form input field
}
function handleFormSubmit(event) {
  event.preventDefault();

  const taskDescription = document.getElementById("new-task-description").value;
  const taskList = document.getElementById("tasks");

  if (taskDescription.trim() === "") {
    alert("Please enter a task description.");
    return;
  }

  const newTask = document.createElement("li");
  newTask.innerText = taskDescription;

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", () => {
    newTask.remove();
  });

  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
  form.reset();
}









