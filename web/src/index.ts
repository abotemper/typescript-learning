import { User } from './models/User';

const user = new User({ name: 'new record', age: 0 });

user.save();

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