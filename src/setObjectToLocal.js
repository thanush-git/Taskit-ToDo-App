function setObjectToLocal(objName, objValue) {
    localStorage.setItem(objName, JSON.stringify(objValue));
}

export {setObjectToLocal}