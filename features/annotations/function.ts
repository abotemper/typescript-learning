const add = (a: number, b: number): number => {
     return a + b;
     //return a - b; will also work
};

const add2 = (a: number, b: number) => {
  return a + b;
};//works too,  but we prefer above one

// const subtract = (a: number, b:number): number => {
//   a - b;// must have a return
// };

function divide(a: number, b:number): number {
  return a / b;
};

const multiply = function(a:number, b:number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
  //return null or return undefined can work too

};

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwError2 = (message: string): string => {
    if(! message) {
      throw new Error(message);
    }
    return message;
};

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};
const logWeather = ({date, weather}: { date: Date, weather: string}): void => {
  console.log(date);
  console.log(weather);
};
logWeather(todayWeather);