
import { Eventing } from './Eventing';

export interface UserProps {
  id?: number;
  //这样的意思是可能有也可能没有，没有没啥关系，这样可以改一个东西
  name?: string;
  age?: number;
}



export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }



  

}