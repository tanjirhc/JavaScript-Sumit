const jsonString = '{"name":"John", "age":30, "city":"New York"}';

console.log(jsonString);
// conver to valid js object
const myObj = JSON.parse(jsonString);

console.log(myObj);