function addToLocalArray(key, value) {
  const arr = JSON.parse(localStorage.getItem(key)) || [];
  arr.push(value);
  localStorage.setItem(key, JSON.stringify(arr));
}

export { addToLocalArray }