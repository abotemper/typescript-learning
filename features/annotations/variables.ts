// const apples: number = 5;

// let bobo: number = 2;

// apples = 2;//error

// bobo = 4;

// bobo = "asdasd";//error

let apples: number = 5;
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
