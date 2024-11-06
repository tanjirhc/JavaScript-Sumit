const jsonString = '{"name":"John", "birth": "1986-12-14", "city":"New York"}';

console.log(jsonString);
// conver to valid js array
const myObj = JSON.parse(jsonString, function(key, value) {
  console.log(`${key} - ${value}`);
  console.log("--------");
});

console.log(new Date(myObj.birth));