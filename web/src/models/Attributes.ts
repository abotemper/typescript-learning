import { UserProps } from './User'

export class Attributes<T> {
  constructor(private data: T) {}

  //这里意思是
  //首先返回值是一个对象里的值,这个是什么先不给出，在建立对象实例的时候标出
  //参数是一个对象
  //这个对象在建立实例时在<>中给出
  
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

}

const attrs = new Attributes<UserProps>({
  id: 5,
  age: 20,
  name: 'asdf'
});

const name = attrs.get('name');
const age = attrs.get('age');
const id = attrs.get('id');