import { getObjectFromLocal } from "./getObjectFromLocal"

function getKeys(objName) {
    let keysArr = [];

    let obj = getObjectFromLocal(objName);
    if (obj) {
        Object.keys(obj).forEach((key) => {
            keysArr.push(key);
        })
        return keysArr;
    }
    else {
        console.log("No Object Found");
    }
}

export { getKeys }