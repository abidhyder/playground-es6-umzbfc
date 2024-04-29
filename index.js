// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

//Arrow Functions
let getPrice = () => 5.00
console.log('Price is '+ getPrice());

let getPriceWithParam = (a,b) => a+b;
console.log('Price wit param is '+ 
getPriceWithParam(2,6))



let nameVar ='abid';

let person = {
  ['name']:nameVar,
  nameVar
};
person['age']=40;

const { name = 'No Name', age = 20 } = person;
const { name1 = name, age1 = age } = person;

console.log(person)
console.log(name1)
console.log(age1)