import { Task } from './task.js'

//An object to store projects
let projects = {
    default : []
}   



function createTask(title, desc, priority, due, tags, project='default'){
    let newTask = new Task(title, desc, priority, due, tags, project)
    addTask(newTask)
}

//Deafult Projects contains tasks without a Project, i.e not stored under any project

function addTask(task){
    if (task.project === 'default') projects.default.push(task)  
    else (projects[task.project] ??= []).push(task);    //Nullish Coalesing Assignment: If array does not exists then it creates it

}

export { createTask, projects } 