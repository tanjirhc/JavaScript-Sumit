function setSessionStorage(name, value) {
sessionStorage.setItem(name, value);
}

function getSessionStorage(key) {
  alert(`${name} : ${sessionStorage.getItem(name)}`);
}

function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
}

function getSessionKeyLength() {
  alert(`sessionStorage has ${sessionStorage.length} keys`);
}

function clearSessionStorage() {
  sessionStorage.clear();
}