import { addProjectToLocal } from "./saveProjectToLocal"

let InputFormProject = `
<div id="addProject" class="modal">
  <div class="modal-content">
    <form id="addProjectForm">
      <input class="headings" id="ProjectInput" type="text" placeholder="Project name" required />
      <div class="actionBtns">
        <button id="addBtnInput" type="submit">Add</button>
        <button type="button" id="cancel">Cancel</button>
      </div>
    </form>
  </div>
</div>
`;

function renderProjectForm() {
  const sidebarApp = document.querySelector("#sidebarApp");
  sidebarApp.innerHTML = InputFormProject; // append instead of overwrite
  document.querySelector("#addProject").style.display = "block"; // show modal after rendering
}

function setupCancelHandler() {
  const modal = document.querySelector("#addProject");
  const cancelBtn = document.querySelector("#cancel");

  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
}

function setupWindowClickClose() {
  const modal = document.querySelector("#addProject");
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

function extractFormData() {
  const projectName = document.querySelector("#ProjectInput").value;
  return projectName.trim();
}

function setupFormSubmitHandler() {
  const form = document.querySelector("#addProjectForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const projectName = extractFormData();
    addProjectToLocal(projectName)
    document.querySelector("#addProject").style.display = "none";
  });
}

function initializeProjectForm() {
  renderProjectForm();
  setupCancelHandler();
  setupWindowClickClose();
  setupFormSubmitHandler();
}

export {initializeProjectForm };
