import { getObjectFromLocal } from "./getObjectFromLocal";

function displayTasks(dest) {
    let dispObj = getObjectFromLocal('projects');

    let tasksContainer = document.createElement("div");
    tasksContainer.id = "tasksContainer";

    Object.keys(dispObj).forEach((dispKey) => {
        let taskContainer = document.createElement("div");
        taskContainer.id = "taskContainer";

        let currTitle = document.createElement("h1");
        currTitle.textContent = dispKey;
        currTitle.id = "taskTitle";
        taskContainer.appendChild(currTitle);

        let currValArr = dispObj[dispKey];

        currValArr.forEach((currObj) => {
            let currTaskContainer = document.createElement("div");
            currTaskContainer.className = "currTaskContainer";

            Object.entries(currObj).forEach(([key, value]) => {
                if (key === 'title' || key === 'desc'){
                let taskDeetsPara = document.createElement("p");
                taskDeetsPara.textContent = `${value}`; // or `${key}: ${value}` if you want to include the key
                currTaskContainer.appendChild(taskDeetsPara);
                }
            });


            taskContainer.appendChild(currTaskContainer);
        });

        tasksContainer.appendChild(taskContainer);
    });

    dest.appendChild(tasksContainer);
}

export { displayTasks };
