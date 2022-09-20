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