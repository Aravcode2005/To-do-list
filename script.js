let taskInput = document.getElementById("taskInput");
let SubmitTask = document.getElementById("SubmitTask");

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
});
