// const character = 'wuqingabo';

// console.log(character);

// const inputs = document.querySelectorAll('inputs')

// console.log(inputs);

// inputs.forEach(input => {
//   console.log(input);
// });

//它们目前自动锁定了各自的type， 给它们赋值一些不是本身type的时候就会报错
let character = 'mario';
let age = 30;
let isBlackBelt = false;

const circ = (diameter: number) => {
  return diameter * Math.PI
}
//如果不限制变量的type我们甚至可以给这个函数中输入一个不合适的参数，比如一个字符串
console.log(circ(32))

//在转换成js之前，他就已经完成了各种类型检查

//array
let names = ['aa', 'bb', 'cc'];
names.push('toad');
names.push(3);//typescript自动识别上面的数组是string形式的，所以这里会报错

let mixed = ['kk', 4, 'hehe', 66];
mixed.push('hh');
mixed.push(33);//初始化的时候有字符串也有数字，所以背后识别了，这俩type都可以插入

//objects
let ninja = {
  name: 'mm',
  belt: 'b',
  age: 33
};
ninja.age = 20;
ninja.name = 'ss';
ninjia.age = 'ww';//这里会报错，因为对象里已经规定好了。

ninjia.skill = ['ss', 'ssd'];//这也不行，因为前面已经规定好了。

ninja = {
  name: 'asd',
  asd: 'gdfg',

}//这也不行，因为前面也已经规定好了，总之不能重写

// explicit types
let character2: string;
let age2: number;
let isLog: boolean;

age2 = 'string';//这不行，因为规定好了
age2 = 222;


//array
let arr1: string[];//这样只能在arr1中输入string
//注意这里如果不进行初始化赋值，不能对其进行push等操作，所以最好在后面=【】这样可以直接使用array的方法
let arr2: string[] = [];//这样好

//union types
let HunHe: (string | number)[] = [];
HunHe.push('string');
HunHe.push(22);
HunHe.push(true);//这样就报错了


//object
let ninja1: object;
ninja1 = { name: 'sss', age: 30}
ninja1 = []//这是可以的，因为没有进行初始化
let ninja2 : {
  name: string,
  age: number,
  b: string
}
let ninja2 = [];//这就不行了

//anytype
let num : any = 25;
num = true;//any 这种type，意思就是可以随便改变了
num = 'sadasd';

let mixed2: any[] = [];
mixed2.push(2);
mixed2.push(true);
mixed2.push('asd');

let mixedObject: {name: any, age: any};
mixedObject = { name: 20, age: 'asd' };

//要管理文件时，使用tsc --init 会出现一个tsconfig文件
//在里面可以对 rootdir和outdir进行编辑，之后直接tsc就智能将ts编译成js到我们想要的文件夹中
//但是如果在rootdir之外有了ts文件，而且我们只希望编译src中的ts，那么就要在config中最下面，加一个逗号
//再加一个“include”：【src】，这样使用tsc就只会编译src中的ts
//tsc -w可以一直监测ts中的变化，

let greet: Function;

greet = () => {
  console.log('hello');
}

const add = (a: number, b: number) => {
  console.log(a + b);
}

add(5, 6);

const add2 = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
}
add2(5, 6);
add2(5, 6, 'hehe');

const minus = (a: number, b: number): number => {
  return a + b;
}

let result = minus(10, 7);
result = 'asd'//这就不行了