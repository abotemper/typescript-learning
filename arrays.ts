const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const emptyArray: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake:string[][] = [
  ['f150'],
  ['corolla'],
  ['camaro']
];

//help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
// carMakers.push(100); wrong, because we push a number

//help with 'map'

carMakers.map((car: string): string => {
  return car.toUpperCase();
});