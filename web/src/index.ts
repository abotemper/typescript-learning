import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });
//下面这个什么意思，意思就是在user中我建立了一个eventing的实例，
//并在user类中用了get 构建了 on（）方法，所以在这里建立user实例之后，我可以直接像调用property一样
//调用eventing中的on方法，建立一个on实例
//或者直接用 user.on('change', () => {});来使用这个on
const on = user.on;

// user.save();

// import { User } from './models/User';

// const user = new User({ name: 'myname', age: 20});

// // user.set({ name: 'newname', age: 90});

// // console.log(user.get('name'));
// // console.log(user.get('age'));
// user.on('change', () => {
//     console.log('change 1')
// });
// user.on('change', () => {
//     console.log('change2')
// });
// user.on('save', () => {
//     console.log('save was triggered')
// });

// user.trigger('change');