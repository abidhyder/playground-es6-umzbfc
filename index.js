// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

1; //Arrow Functions in ES6
let zeroParamArrowFunc = () => 5.0;
console.log('Zero Param Function : ' + zeroParamArrowFunc());
//output: 5.0

let twoParamArrowFunc = (a, b) => a + b;
console.log('Two Param Function is ' + twoParamArrowFunc(2, 6));
//output: 8

let twoParamArrowFuncWithReturn = (a, b) => {
  let sum = a + b;
  return sum;
};
console.log(
  'Function that uses return statement ' + twoParamArrowFuncWithReturn(10, 6)
  //output: 16
);

let thisKeywordWithoutArrowFunc = {
  number: 123,
  process: function () {
    return this.number;
  },
};

console.log(
  'This keyword without arrow ' + thisKeywordWithoutArrowFunc.process()
  //output: 123
);

const thisKeywordInArrowFunc = {
  number: 46,
  process: function () {
    const processArrow = () => {
      console.log(this.number);
      let ret = this.number;
      return ret;
    };
    return processArrow();
  },
};
console.log('This keyword with arrow ' + thisKeywordInArrowFunc.process());
//output: 46

2; // Rest and Spread Operators (applicable to objects, arrays and functions)

let { param1, ...rest } = {
  param1: 'First Param',
  param2: 'second param',
  param3: 'third param',
};
console.log(
  'Rest Operator captures the remaining paraameters ' + JSON.stringify(rest)
  //output: {"param2":"second param","param3":"third param"}
);

let objectTOSpread = {
  param1: 'First Param',
  param2: 'second param',
  param3: 'third param',
};

let clone = { ...objectTOSpread };
console.log(
  'Spread Operator spreads object and effectively creates clone ' +
    JSON.stringify(clone)
  //output: {"param1":"First Param","param2":"second param","param3":"third param"}
);

let arrayToSpread = [10, 20, 30];

let spreadObj = { ...arrayToSpread };
console.log(spreadObj); //output:  {0: 10, 1:20, 2:30}

let spreadArray = [...arrayToSpread];
console.log(spreadArray); //output: [10,20,30]

console.log(...arrayToSpread); //output: 10 20 30
console.log(Math.max(...arrayToSpread)); //output: 30

3; //Template Literals (using backticks)
let tempLiteralsVariable = '100';
console.log(`Template literals demo using backticks ${tempLiteralsVariable}`);

4; //Destructuring objects
let nameVar = 'abid';
let objectToDestructure = { ['name']: nameVar, nameVar };
objectToDestructure['age'] = 40;
console.log(objectToDestructure);

//destructure using defaults
let { name = 'Default', age = 20 } = objectToDestructure;
//destructure using custom naming (either using '=' or ':')
let { name1 = name, age1 = age } = objectToDestructure;
let { name: name2, age: age2 } = objectToDestructure;
//both syntax gives same result
console.log(`Name1 is :${name1} and Age1 is : ${age1}`);
console.log(`Name2 is :${name2} and Age2 is : ${age2}`);

5; //Destructing Arrays
let arrayToDetructure = [55, 60, 90];
let [first, second, third] = arrayToDetructure;
console.log(`First : ${first}, Second: ${second}, Third: ${third}`);

6; //Advanced Destructuring
for (let [a, b] of [[20, 30]]) {
  console.log(`values are ${a} and ${b}`);
}
