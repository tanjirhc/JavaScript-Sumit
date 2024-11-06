const jsonString = '{"name":"John", "birth": "1986-12-14", "city":"New York"}';

console.log(jsonString);
// conver to valid js array
const myObj = JSON.parse(jsonString);

console.log(new Date(myObj.birth));