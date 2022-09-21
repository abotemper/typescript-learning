import { Invoice2 } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
var anchor = document.querySelector('a');
//如果没有叹号，只有下面这样才能访问到。href，不然就会报错
// if(anchor){
//   console.log(anchor.href);
// }
console.log(anchor.href);
// const form = document.querySelector('form')!;//htmlelement
// const form = document.querySelector('.new-item-form')!;//element
var form2 = document.querySelector('.new-item-form'); //HTMLFORMELEMENT
// console.log(form.children);
// inputs 
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var detail = document.querySelector('#details');
var amount = document.querySelector('#amount');
form2.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice2(tofrom.value, detail.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, detail.value, amount.valueAsNumber);
    }
    console.log(doc);
});
//calsses
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    //private可以在class内部使用
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes ").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('tian', 'work on the tian website', 250);
var invTwo = new Invoice('bo', 'work on the tian website', 250);
var invThree = new Invoice('shuai', 'work on the tian website', 250);
var invoices = [];
invoices.push(invOne); //这个可以
invoices.push(invTwo);
invoices.push(invThree);
console.log(invoices);
// invOne.client = 'hou'; 只能读取，不能赋值
invOne.amount = 300;
//private不能在外面获取了
invoices.forEach(function (inv) {
    console.log(inv.client, inv.format());
});
// class Invoice2 {
//   //一个效果
//   constructor(
//     //这里如果把readonly private public 这种type关键字拿掉，那么在比如说 format中便不能获取
//     readonly client: string,
//     private details: string,
//     public amount: number,
//     // hello: number // 缺少type限制则
//   ){}
//   format() {
//     return `${this.client} owes ${this.amount} for ${this.details}`;
//   }
// }
var inv1 = new Invoice2('tian', 'work on the tian website', 250);
var inv2 = new Invoice2('bo', 'work on the tian website', 250);
var inv3 = new Invoice2('shuai', 'work on the tian website', 250);
var invoices2 = [];
invoices2.push(inv1); //这个可以
invoices2.push(inv2);
invoices2.push(inv3);
console.log(invoices2);
invoices2.forEach(function (inv) {
    console.log(inv.client, inv.format());
});
var me = {
    name: 'shaun',
    age: 30,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log('i spend', amount);
        return amount;
    }
};
//也可以这样，声明一个东西是interface，
var someone;
console.log(me);
//也可以这样,一个函数的参数是interface的，到时候往这个里传参，就用某种实现了这个interface的东西
var greetPerson = function (person) {
    console.log('hello', person.name);
};
greetPerson(me);
//这下面的东西hasformatter， 都必须有format（）方法
var docOne;
var docTwo;
docOne = new Invoice2('hehe', 'web', 300);
docTwo = new Payment('haha', 'plumbing', 200);
var docs = [];
docs.push(docOne);
docs.push(docTwo);
