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

  console.log(
    type.value,
    tofrom.value,
    detail.value,
    amount.valueAsNumber
  );
})