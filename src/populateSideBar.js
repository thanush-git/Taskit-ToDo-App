import { getKeys } from "./getKeys"

function populateSidebar() {
  let sidebarApp = document.querySelector("#sidebarApp");
  let keyArr = getKeys("projects");

  keyArr.forEach((projectKey) => {
    if (!(projectKey==='default')){
    let currBtn = `<button class = 'btn' id="${projectKey}">${projectKey}</button>`;
    sidebarApp.innerHTML += (currBtn);
    }
  })
}

export { populateSidebar }