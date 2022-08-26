//interface 首字母最好大写 ，规范一些, 内部用分号;隔开
//所谓interface 其实是创建了一个type
//有点像object 但又不是，因为 ,;
//后面要输入函数的地方，如果是这个interface type的话，关键字key必须与interface一致，后面的东西必须符合interface中定义的类型才行
interface Vehicle {
   name: string;
   year: number;
   broken: boolean;
   
   //how to add a function
   summary(): string;//前面是函数名， 后面是函数返回类型，函数参数也必须一致
}

interface Vehicle2 {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,

  summary(): string {
    return `Name: ${this.name}`;
  }
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


const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  //他也有一个summary 方法
  summary(): string {
    return `My drink has ${this.sugar} orams of sugar`;
  }
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
  console.log(vehicle.summary());
};

//只要传入的东西有interface中的东西就行
const printVehicle3= (vehicle: Vehicle2): void => {
  //只用了一个也行
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
// printVehicle2(oldCivic);
printVehicle3(oldCivic);
// printVehicle(wrongOne);
// printVehicle2(wrongOne);这两个就是错的， 因为类型不符合

// printVehicle(wrongTwo);
// printVehicle2(wrongTwo);这俩也是错的。因为把broken 改成了 bro


printVehicle3(drink);//因为 drink 也有 summary ， 所以也能用这个函数， 这里面就抽象的很灵性。
