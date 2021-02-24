document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");

  form.addEventListener("submit", addTask);
});

function addTask(e) {
  e.preventDefault();
  let newTask = e.target.newTaskDescription.value;
  let listItem = document.createElement("li");
  listItem.innerText = newTask;
  console.log(listItem);
  let task = document.getElementById("tasks");
  task.append(listItem);
}
