let taskInput = document.getElementById("taskInput");
let SubmitTask = document.getElementById("SubmitTask");

let saved = localStorage.getItem("tasks");
if (saved) {
  JSON.parse(saved).forEach((task) => {
    let li = document.createElement("li");
    li.textContent = task;
    document.querySelector("ul").appendChild(li);
  });
}

SubmitTask.addEventListener("click", function (event) {
  console.log(taskInput.value);

  let newelement = document.createElement("li");
  newelement.textContent = taskInput.value;
  document.querySelector("ul").appendChild(newelement);

  let deletebtn = document.createElement("button");
  deletebtn.textContent = "x";

  deletebtn.addEventListener("click", function (event) {
    newelement.remove();
  });

  newelement.appendChild(deletebtn);
  let tasks = [];
  document.querySelectorAll("li").forEach((item) => {
    tasks.push(item.textContent);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
});
