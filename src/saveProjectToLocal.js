function addProjectToLocal(projectName) {
  const projects = JSON.parse(localStorage.getItem("projects")) || {};
  if (!projects[projectName]) {
    projects[projectName] = [];
    localStorage.setItem("projects", JSON.stringify(projects));
  }
}

export { addProjectToLocal };
