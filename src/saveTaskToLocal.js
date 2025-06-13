import { getObjectFromLocal } from "./getObjectFromLocal"

function saveTaskToLocal(taskObj) {
  let localObj = getObjectFromLocal("projects");
  let projectName = taskObj.project;
  console.log(localObj);
  if (localObj[projectName]){
    console.log("Project Exists, Pushing...")
    localObj[projectName].push(taskObj)  //pushes task in respective project array
    localStorage.setItem("projects", JSON.stringify(localObj));  //Pushes updated Local Object
    console.log("Saved successfully");
  }

  else {
    console.log("Project does not exist")
  }
}

export { saveTaskToLocal }