interface UserProps {
  //这样的意思是可能有也可能没有，没有没啥关系，这样可以改一个东西
  name?: string;
  age?: number;
}

type Callback = () => {};

export class User {
  events: { [key: string]: Callback[] } = {};


  constructor(private data: UserProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback) {}
}