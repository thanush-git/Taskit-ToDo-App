import { initializeTaskForm } from "./addTaskForm.js";
import { initializeProjectForm } from "./addProjects.js";
import { populateSidebar } from "./populateSideBar.js";
import { initialiseProject } from "./initialiseProjectObj.js";
import { displayTasks } from "./displayTasks.js";
import "./styles.css"

const addTaskBtn = document.querySelector("#btnAddTask");
addTaskBtn.addEventListener("click", () => {
    initializeTaskForm()
})

document.querySelector("#addProjectBtn").addEventListener("click", () => {
    initializeProjectForm();
})

initialiseProject()
populateSidebar()

let app = document.querySelector("#app")
displayTasks(app)