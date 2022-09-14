import axios, { AxiosPromise, AxiosResponse } from 'axios';
import { UserProps } from './User';

//http://localhost:3000/users
export class Sync {

  constructor(public rootUrl: string) {} 

  fetch(id: number): AxiosPromise {
     return axios.get(`${this.rootUrl}/${id}`);
 }


 save(data: UserProps): void {
   const { id } = data;
   if (id) {
     //put
     axios.put(`${this.rootUrl}/${id}`, data);
   } else {
     //post
     axios.post(this.rootUrl, data);
   }
 }
}