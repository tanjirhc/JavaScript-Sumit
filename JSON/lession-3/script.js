const jsonString = '["Ford", "BMW", "Audi", "Fiat"]';;

console.log(jsonString);
// conver to valid js array
const myObj = JSON.parse(jsonString);

console.log(myObj);