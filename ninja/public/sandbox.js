"use strict";
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
const circ = (diameter) => {
    return diameter * Math.PI;
};
//如果不限制变量的type我们甚至可以给这个函数中输入一个不合适的参数，比如一个字符串
console.log(circ(32));
//在转换成js之前，他就已经完成了各种类型检查
//array
let names = ['aa', 'bb', 'cc'];
names.push('toad');
names.push(3); //typescript自动识别上面的数组是string形式的，所以这里会报错
let mixed = ['kk', 4, 'hehe', 66];
mixed.push('hh');
mixed.push(33); //初始化的时候有字符串也有数字，所以背后识别了，这俩type都可以插入
//objects
let ninja = {
    name: 'mm',
    belt: 'b',
    age: 33
};
ninja.age = 20;
ninja.name = 'ss';
ninjia.age = 'ww'; //这里会报错，因为对象里已经规定好了。
ninjia.skill = ['ss', 'ssd']; //这也不行，因为前面已经规定好了。
ninja = {
    name: 'asd',
    asd: 'gdfg',
}; //这也不行，因为前面也已经规定好了，总之不能重写
// explicit types
let character2;
let age2;
let isLog;
age2 = 'string'; //这不行，因为规定好了
age2 = 222;
//array
let arr1; //这样只能在arr1中输入string
//注意这里如果不进行初始化赋值，不能对其进行push等操作，所以最好在后面=【】这样可以直接使用array的方法
let arr2 = []; //这样好
//union types
let HunHe = [];
HunHe.push('string');
HunHe.push(22);
HunHe.push(true); //这样就报错了
//object
let ninja1;
ninja1 = { name: 'sss', age: 30 };
ninja1 = []; //这是可以的，因为没有进行初始化
let ninja2;
let ninja2 = []; //这就不行了
//anytype
let num = 25;
num = true; //any 这种type，意思就是可以随便改变了
num = 'sadasd';
let mixed2 = [];
mixed2.push(2);
mixed2.push(true);
mixed2.push('asd');
let mixedObject;
mixedObject = { name: 20, age: 'asd' };
