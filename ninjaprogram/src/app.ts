import { Invoice2 } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
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

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);
form2.addEventListener('submit', (e: Event) => {
  e.preventDefault();

//这是个tuple
  let values : [string, string, number] ;
  values = [tofrom.value, detail.value, amount.valueAsNumber]

  let doc: HasFormatter;
  if(type.value === 'invoice') {
    doc = new Invoice2(...values);
  }else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, 'end');
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

//generics泛型，指的是在定义函数，接口，类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let doc1 = addUID({ name: 'tianbo', age: 40 });

console.log(doc1);
// console.log(doc1.name);这样会报错，因为在addUID中，最初的时候他不知道这个对象里有什么property

//在我们有了泛型之后，他会在我们实际传参时， 再认出或者定义我们传进去的究竟是什么
const addUID2 = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}

let doc2 = addUID2({ name: 'tianbo', age: 40 });
console.log(doc2.name)//这就没事了
// let doc3 = addUID2('asd')//但是这时我们传入一个字符串都行所以，不太严谨

const addUID3 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}
// let doc3 = addUID3('asd')//这时就会报错

//还可以更具体一些
const addUID4 = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return {...obj, uid};
}
// let doc3 = addUID4({ age: 40 })这也会报错，因为我们更具体了需要什么样的参数，需要里面有name


//with interfaces
interface Resource {
  uid: number;
  resourceName: string;
  data: object;
}

const doc5 : Resource = {
  uid: 1,
  resourceName: 'person',
  data: { name: 'haha' },
  // data: 'asd', 这一行会报错， 因为我们接口里已经定死了必须是对象
}

interface Resource2 <T> {
  uid: number;
  resourceName: string;
  data: T;
}
//在建立一个变量使用接口时，再进行定义要使用什么类型
const doc6 : Resource2<string> = {
  uid: 1,
  resourceName: 'person',
  data: 'asd'
}

interface Resource3 <T> {
  uid: number;
  resourceName: string;
  data: T;
}

const doc7 : Resource3<object> = {
  uid: 1,
  resourceName: 'person',
  data: {name: 'hh'}
}

const doc8: Resource3 <string[]> = {
  uid: 2,
  resourceName: 'pp',
  data: ['a', 'b']
}

console.log(doc8);


//enums, 下面book是0，person是4，就是枚举使下面的东西产生编号
enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Resource4 <T> {
  uid: number;
  resourceName: number;
  data: T;
}
const doc9 : Resource4<object> = {
  uid: 10,
  resourceName: 4,
  data: {name: 'tianbo'}

}

const doc10 : Resource4<object> = {
  uid: 10,
  resourceName: 2,
  data: { name: 'hou' }
}

interface Resource5 <T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}
const doc11: Resource5<object> = {
  uid: 10,
  resourceName: ResourceType.PERSON,
  data: { name: 'hourong' }
}
const doc12: Resource5<object> = {
  uid: 13,
  resourceName: ResourceType.BOOK,
  data: { name: 'hourong' }
}
console.log(doc11, doc12);

//tuples
let arr = ['ryu', 25, true];
//下面每个位置都已经定死了， tup每个位置不能乱换成别的数据类型
let tup: [string, number, boolean] = ['ryu', 25, true];

let student: [string, number];
student = ['ss', 321321321];