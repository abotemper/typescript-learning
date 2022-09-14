
import { Eventing } from './Eventing';
import { Sync } from './Sync';

export interface UserProps {
  id?: number;
  //这样的意思是可能有也可能没有，没有没啥关系，这样可以改一个东西
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost/3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);

  constructor(private data: UserProps) {}

  get(propName: string): (number | string) {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }



  

}