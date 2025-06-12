import { createTask } from "./createTasks.js";
import { projects } from "./createTasks.js";
import { addToLocalArray } from "./saveToLocal.js";

let InputForm = `
<div id="addTask" class="modal">
  <div class="modal-content">
    <form id="addTaskForm">
      <input class="headings" id="titleInput" type="text" placeholder="Title" required />
      <textarea id="descInput" class="headings" placeholder="Description"></textarea>
      <div class="addtionalInputs">
        <select name="" id="priority">
          <option value="" disabled selected>Priority</option>
          <option value="3">Low</option>
          <option value="2">Medium</option>
          <option value="1">High</option>
        </select>
        <input type="date" id="dueDate" />
        <input type="text" id="tagsInput" placeholder="Tags separated by space" />
      </div>
      <div class="lastInput">
        <div>
          <label for="projectInput">Project: </label>
          <select name="" id="projectInput">
            <option value="default">None</option>
            <option> populate available projects </option>
          </select>
        </div>
        <div class="actionBtns">
          <button id="addBtnInput" type="submit">Add</button>
          <button type="button" id="cancel">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</div>
`;

function renderTaskForm() {
  const app = document.querySelector("#app");
  app.innerHTML = InputForm;
}

function setupCancelHandler() {
  const modal = document.querySelector("#addTask");
  const cancelBtn = document.querySelector("#cancel");

  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function setupWindowClickClose() {
  const modal = document.querySelector("#addTask");
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
}

function extractFormData() {
  const title = document.querySelector("#titleInput").value;
  const desc = document.querySelector("#descInput").value;
  const priority = document.querySelector("#priority").value;
  const dueDate = document.querySelector("#dueDate").value;
  const tags = document.querySelector("#tagsInput").value;
  const project = document.querySelector("#projectInput").value;
  return [title, desc, priority, dueDate, tags, project];
}

function setupFormSubmitHandler() {
  const form = document.querySelector("#addTaskForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const [title, desc, priority, dueDate, tags, project] = extractFormData();
    createTask(title, desc, priority, dueDate, tags, project);
    document.querySelector("#addTask").style.display = "none";

  });
}

function initializeTaskForm() {
  renderTaskForm();
  setupCancelHandler();
  setupWindowClickClose();
  setupFormSubmitHandler();
}

export { initializeTaskForm, renderTaskForm, setupCancelHandler, setupWindowClickClose };
