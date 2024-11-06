const jsonString = '{"name":"John", "birth": "1986-12-14", "city":"New York"}';

console.log(jsonString);
// conver to valid js array
const myObj = JSON.parse(jsonString, function(key, value) {
  if(key === 'birth') {
    return new Date(value);
  } 
  return value;
});

console.log(new Date(myObj.birth));