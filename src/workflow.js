
import { populateSidebar } from "./populateSideBar.js";
import { initialiseProject } from "./initialiseProjectObj.js";
import { displayTasks } from "./displayTasks.js";
import { toggleCompletion } from "./completionToggle.js";

function workflow() {
    initialiseProject();

    let sidebarApp = document.querySelector("#sidebarApp");
    sidebarApp.innerHTML = ""; 

    populateSidebar(); 

    let app = document.querySelector("#taskContent");
    app.innerHTML = ""; 

    displayTasks(app);
    toggleCompletion();
}



export { workflow }