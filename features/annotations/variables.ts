// const apples: number = 5;

// let bobo: number = 2;

// apples = 2;//error

// bobo = 4;

// bobo = "asdasd";//error

let apples: number = 5;
let apples2 = 5;//no error, because typescript figure it out by itself

let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects

let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {

}
//this is an instance(car), Car is a class
let car: Car = new Car();

//Object literal
let point: { x: number; y: number } = {
  x: 10, // x: "asdasdasd" will be an error
  y: 20 // a: 20 wille be an error
};





//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//when to use annotations
//1# function that returns the 'any' type
const json = '{"x": 10, "y": 20}';//json 解析的时候可能性太多了，所以这就是any，必须标志每个东西都是什么
const coordinates = JSON.parse(json);
console.log(coordinates); //{x: 10, y:20}
coordinates.asdasdasdasdasd; // no warning, its any

const coordinates2: {x: number; y: number} = JSON.parse(json);
console.log(coordinates2);
// coordinates2.asdasd; //here we see the error

//2) when we declare a variable on one line
//and initalizate it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean; // let foundWord = false

for (let i = 0; i < words.length; i++){
  if (words[i] === 'green'){
    foundWord = true;
  }
}
//3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;//给两种预值

for (let  i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}