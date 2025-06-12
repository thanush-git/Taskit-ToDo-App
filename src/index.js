import { initializeTaskForm } from "./addTaskForm.js";
import { addToLocalArray } from "./saveToLocal.js"
import { initializeProjectForm } from "./addProjects.js"
import "./styles.css"

const addTaskBtn = document.querySelector("#btnAddTask");
addTaskBtn.addEventListener("click", () => {
    initializeTaskForm()
})

document.querySelector("#addProjectBtn").addEventListener("click", () => {
    initializeProjectForm();
})

