const jsonString = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';

console.log(jsonString);
const myObj = JSON.parse(jsonString);

console.log(myObj);