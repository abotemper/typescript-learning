import { Invoice2 } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

const anchor = document.querySelector('a')!;
//如果没有叹号，只有下面这样才能访问到。href，不然就会报错
// if(anchor){
//   console.log(anchor.href);
// }
console.log(anchor.href);

// const form = document.querySelector('form')!;//htmlelement
// const form = document.querySelector('.new-item-form')!;//element
const form2 = document.querySelector('.new-item-form') as HTMLFormElement;//HTMLFORMELEMENT
// console.log(form.children);

// inputs 
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const detail = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form2.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if(type.value === 'invoice') {
    doc = new Invoice2(tofrom.value, detail.value, amount.valueAsNumber);
  }else {
    doc = new Payment(tofrom.value, detail.value, amount.valueAsNumber);
  }
  console.log(doc);
})

//calsses
class Invoice {
  //readonly可以在内外读取但不能改变
  readonly client: string;
  private details: string;
  public amount: number;

  constructor(c: string, d: string, a: number){
    this.client = c;
    this.details = d;
    this.amount = a;
  }
//private可以在class内部使用
  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice('tian', 'work on the tian website', 250);
const invTwo = new Invoice('bo', 'work on the tian website', 250);
const invThree = new Invoice('shuai', 'work on the tian website', 250);

let invoices: Invoice[] = [];
invoices.push(invOne);//这个可以
invoices.push(invTwo);
invoices.push(invThree);

console.log(invoices);

// invOne.client = 'hou'; 只能读取，不能赋值
invOne.amount = 300;

//private不能在外面获取了
invoices.forEach(inv => {
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
const inv1 = new Invoice2('tian', 'work on the tian website', 250);
const inv2 = new Invoice2('bo', 'work on the tian website', 250);
const inv3 = new Invoice2('shuai', 'work on the tian website', 250);

let invoices2: Invoice2[] = [];
invoices2.push(inv1);//这个可以
invoices2.push(inv2);
invoices2.push(inv3);

console.log(invoices2);

invoices2.forEach(inv => {
  console.log(inv.client, inv.format());
});

//interfaces
//接口不定义具体的类，也就是不初始化一个类里的property的value，具体方法的实现
//具体的实现在具体使用interface中的东西中实现
//只是对类进行声明，标明他们是什么类型，如果是函数，可以标明参数的类型，以及返回值的类型
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'shaun',
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
     console.log('i spend', amount);
     return amount
  }
};
//也可以这样，声明一个东西是interface，
let someone : IsPerson;
console.log(me)

//也可以这样,一个函数的参数是interface的，到时候往这个里传参，就用某种实现了这个interface的东西
const greetPerson = (person: IsPerson) => {
  console.log('hello', person.name);
}
greetPerson(me)

//这下面的东西hasformatter， 都必须有format（）方法
let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice2('hehe', 'web', 300);
docTwo = new Payment('haha', 'plumbing', 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);