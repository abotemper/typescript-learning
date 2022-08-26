//interface 首字母最好大写 ，规范一些, 内部用分号;隔开
//所谓interface 其实是创建了一个type
interface Vehicle {
   name: string;
   year: number;
   broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true
};

const wrongOne = {
  name: 'civic',
  year: 2000,
  broken: 1
};

const wrongTwo = {
  name: 'civic',
  year: 2000,
  bro: true
};

//太长了，真的不好使，每次都要重复打这些东西， 所以需要interface 增加代码复用性
const printVehicle = (vehicle: { name: string; year: number; broken:boolean }): void => {
   console.log(`Name: ${vehicle.name}`);
   console.log(`Year: ${vehicle.year}`);
   console.log(`Broken?: ${vehicle.broken}`);
};

//这多好看 多短哦
const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken?: ${vehicle.broken}`);
};

printVehicle(oldCivic);
printVehicle2(oldCivic);

// printVehicle(wrongOne);
// printVehicle2(wrongOne);这两个就是错的， 因为类型不符合

// printVehicle(wrongTwo);
// printVehicle2(wrongTwo);这俩也是错的。因为把broken 改成了 bro