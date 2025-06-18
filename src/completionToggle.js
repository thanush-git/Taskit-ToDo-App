import { getObjectFromLocal } from "./getObjectFromLocal";
import { setObjectToLocal } from "./setObjectToLocal";
import { workflow } from "./workflow.js";

function toggleCompletion() {
    let modObj = getObjectFromLocal('projects');
    let tasks = document.querySelectorAll(".currTaskContainer");
    tasks.forEach((task) => {
        task.addEventListener("click", () => {
            let projectName = task.taskData.project;

            let index = modObj[projectName].findIndex(
                (item) =>
                    item.title === task.taskData.title &&
                    item.desc === task.taskData.desc
            );
            modObj[projectName][index].done = !modObj[projectName][index].done;
            console.log("Toggle Successful");

            setObjectToLocal("projects",modObj);
            console.log("Mod Success");

            workflow();
        });
    });

   
}


export { toggleCompletion }