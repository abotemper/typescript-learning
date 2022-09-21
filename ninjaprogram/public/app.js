"use strict";
const anchor = document.querySelector('a');
//如果没有叹号，只有下面这样才能访问到。href，不然就会报错
// if(anchor){
//   console.log(anchor.href);
// }
console.log(anchor.href);
// const form = document.querySelector('form')!;//htmlelement
// const form = document.querySelector('.new-item-form')!;//element
const form2 = document.querySelector('.new-item-form'); //HTMLFORMELEMENT
// console.log(form.children);
// inputs 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const detail = document.querySelector('#details');
const amount = document.querySelector('#amount');
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, detail.value, amount.valueAsNumber);
});
