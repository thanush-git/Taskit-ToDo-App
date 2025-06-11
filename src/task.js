// This class is the blueprint for creating new tasks
class Task {
    constructor (title, desc, priority, due, tags, project){
        this.title = title;
        this.desc = desc;   //task description 
        this.priority = priority;   
        this.due = due;     //due date
        this.tags = tags;   //tags for searching
        this.project = project;
        this.done = false;
    }
}


export { Task }
