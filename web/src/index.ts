import { User } from './models/User';

const user = new User({ name: 'myname', age: 20});

// user.set({ name: 'newname', age: 90});

// console.log(user.get('name'));
// console.log(user.get('age'));
user.on('change', () => {});
user.on('change', () => {});
user.on('change', () => {
    console.log(user);
});