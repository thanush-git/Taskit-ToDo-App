import { saveTaskToLocal } from './saveTaskToLocal.js'
import { Task } from './task.js'

function createTask(title, desc, priority, due, tags, project='default'){
    let newTask = new Task(title, desc, priority, due, tags, project)
    saveTaskToLocal(newTask)   //This returns an Object of task
}

//Deafult Projects contains tasks without a Project, i.e not stored under any project

export { createTask } 