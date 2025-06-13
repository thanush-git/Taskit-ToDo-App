function getObjectFromLocal(objName) {
    const obj = JSON.parse(localStorage.getItem(objName));
    return obj;
}
export { getObjectFromLocal }