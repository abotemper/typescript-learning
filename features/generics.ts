class ArrayOfNumbers {
  constructor(public collection: number[]){}

get(index: number): number {
  return this.collection[index];
}
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arr =  new ArrayOfAnything<string>(['a', 'b', 'c']);


// example of generics with functions

function printString(arr: string[]): void {
   for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
   }
}

function printNumber(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }

}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
  }
}

printAnything<string>(['a', 'b', 'c']);

// generic constraints

class Car {
  print() {
    console.group('im a car');
  }
}

class House {
  print() {
    console.log('im a house');
  }
}

 interface Printable {
  print(): void;
 }

 //这个接口进一步限制了T的范围
function printHouseOrCars<T extends Printable>(arr: T[]):void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

//报错是因为这个数组里没有print这个方法，也就是不在interface范围之内
printHouseOrCars([1, 2, 3, 4]);

//因为house里有print， 所以可以
printHouseOrCars<House>([new House(), new House()]);
printHouseOrCars<Car>([new Car(), new Car()]);