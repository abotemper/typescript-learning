const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40
};

type Drink = [string, boolean, number];//先把顺序定下来，后面不用总是输入一堆


// 我们不想改变数组中的顺序,所以要定好
const pepsi: [string, boolean, number] = ['brown', true, 40];
// pepsi[0] = 40 will be wrong , because we 定下来了 数据类型的顺序

const sprite: Drink = ['clear', true, 0];
const coca: Drink = ['brown', true, 0];
const tea: Drink = ['brown', false, 0];

//tuple 不是那么常见
const carSpecs:[number, number] = [400, 33];

//还是object 这样的规定更好，更一目了然
const carStats = {
    horsepower: 400,
    weight: 33
};
