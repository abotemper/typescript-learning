var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { Invoice2 } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
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
//list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form2.addEventListener('submit', function (e) {
    e.preventDefault();
    //这是个tuple
    var values;
    values = [tofrom.value, detail.value, amount.valueAsNumber];
    var doc;
    if (type.value === 'invoice') {
        doc = new (Invoice2.bind.apply(Invoice2, __spreadArray([void 0], values, false)))();
    }
    else {
        doc = new (Payment.bind.apply(Payment, __spreadArray([void 0], values, false)))();
    }
    list.render(doc, type.value, 'end');
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
//generics泛型，指的是在定义函数，接口，类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var doc1 = addUID({ name: 'tianbo', age: 40 });
console.log(doc1);
// console.log(doc1.name);这样会报错，因为在addUID中，最初的时候他不知道这个对象里有什么property
//在我们有了泛型之后，他会在我们实际传参时， 再认出或者定义我们传进去的究竟是什么
var addUID2 = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var doc2 = addUID2({ name: 'tianbo', age: 40 });
console.log(doc2.name); //这就没事了
// let doc3 = addUID2('asd')//但是这时我们传入一个字符串都行所以，不太严谨
var addUID3 = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
// let doc3 = addUID3('asd')//这时就会报错
//还可以更具体一些
var addUID4 = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var doc5 = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'haha' },
    // data: 'asd', 这一行会报错， 因为我们接口里已经定死了必须是对象
};
//在建立一个变量使用接口时，再进行定义要使用什么类型
var doc6 = {
    uid: 1,
    resourceName: 'person',
    data: 'asd'
};
var doc7 = {
    uid: 1,
    resourceName: 'person',
    data: { name: 'hh' }
};
var doc8 = {
    uid: 2,
    resourceName: 'pp',
    data: ['a', 'b']
};
console.log(doc8);
//enums, 下面book是0，person是4，就是枚举使下面的东西产生编号
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var doc9 = {
    uid: 10,
    resourceName: 4,
    data: { name: 'tianbo' }
};
var doc10 = {
    uid: 10,
    resourceName: 2,
    data: { name: 'hou' }
};
var doc11 = {
    uid: 10,
    resourceName: ResourceType.PERSON,
    data: { name: 'hourong' }
};
var doc12 = {
    uid: 13,
    resourceName: ResourceType.BOOK,
    data: { name: 'hourong' }
};
console.log(doc11, doc12);
//tuples
var arr = ['ryu', 25, true];
//下面每个位置都已经定死了， tup每个位置不能乱换成别的数据类型
var tup = ['ryu', 25, true];
var student;
student = ['ss', 321321321];
