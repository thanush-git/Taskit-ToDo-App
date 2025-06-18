import { getObjectFromLocal } from "./getObjectFromLocal"

let projects = {
        default: [
            {
                title: "Create project roadmap",
                desc: "Define milestones and deadlines for Q3 objectives.",
                priority: "1",
                due: "2025-06-20",
                tags: "planning,strategy",
                project: "default",
                done: false
            }
        ],
        Work: [
            {
                title: "Update client documentation",
                desc: "Revise API usage guide and include new endpoints.",
                priority: "2",
                due: "2025-06-18",
                tags: "documentation,client",
                project: "Work",
                done: false
            }
        ]
    };

function initialiseProject(taskObj) {
  if (getObjectFromLocal("projects")){
    console.log("Projects Object already exists, not intialising") //To not overwrite project, if it exists
  }

  else {
    localStorage.setItem("projects", JSON.stringify(projects));  //Pushes updated Local Object
    console.log("Initialised successfully");
  }
}

export { initialiseProject }