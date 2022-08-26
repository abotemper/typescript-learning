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


//flexible types
const importantDates: (Date | string)[] = [new Date(), '2000-10-10'];

importantDates.push('2020-8-28');
importantDates.push(new Date());
// importantDates.push(100); it will call a error, because it push a number into array


//tuples like python