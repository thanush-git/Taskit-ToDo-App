import { getObjectFromLocal } from "./getObjectFromLocal";

function displayTasks(dest) {
    let dispObj = getObjectFromLocal('projects');



    let tasksContainer = document.createElement("div");
    tasksContainer.id = "tasksContainer";

    Object.keys(dispObj).forEach((dispKey) => {
        let taskContainer = document.createElement("div");
        taskContainer.id = "taskContainer";

        if (!(dispKey === 'default')){
        let currTitle = document.createElement("h1");
        currTitle.textContent = dispKey;
        currTitle.id = "taskTitle";
        taskContainer.appendChild(currTitle);
        }

        let currValArr = dispObj[dispKey];

        currValArr.forEach((currObj) => {
            
            let currTaskContainer = document.createElement("div");
            currTaskContainer.className = "currTaskContainer";

            if (currObj.priority) {
                if (currObj.priority === '1') {
                    currTaskContainer.style.borderLeft = "5px solid red";
                } else if (currObj.priority === '2') {
                    currTaskContainer.style.borderLeft = "5px solid yellow";
                } else if (currObj.priority === '3') {
                    currTaskContainer.style.borderLeft = "5px solid green";
                }
            }

            Object.entries(currObj).forEach(([key, value]) => {
                if (key === 'title' || key === 'desc') {
                    let taskDeetsPara = document.createElement("p");
                    taskDeetsPara.textContent = `${value}`;
                    currTaskContainer.appendChild(taskDeetsPara);
                }
            });

            if (currObj.done === true){
                currTaskContainer.style.textDecoration = "line-through";
            }

            currTaskContainer.taskData = currObj;
            taskContainer.appendChild(currTaskContainer);
        });

        tasksContainer.appendChild(taskContainer);
    });

    dest.appendChild(tasksContainer);
}

export { displayTasks };
