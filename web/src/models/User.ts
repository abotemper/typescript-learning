import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
  //这样的意思是可能有也可能没有，没有没啥关系，这样可以改一个东西
  name?: string;
  age?: number;
}

//这是一个类型， 是一个没有返回值的函数
type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};


  constructor(private data: UserProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers; 
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if(!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    })
  }






  
  fetch(): void {
     axios.get(`http://localhost:3000/users/${this.get('id')}`)
        .then((response: AxiosResponse): void => {
            this.set(response.data);
        });
  }
}