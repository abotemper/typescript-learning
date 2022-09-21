import { HasFormatter } from "../Interfaces/HasFormatter.js";


//当一个类与interface联系在一起的时候
//事实上可以由类 implements 这个 interface，它必须有 interface中的要求
export class Payment implements HasFormatter {
  //一个效果
  constructor(
    //这里如果把readonly private public 这种type关键字拿掉，那么在比如说 format中便不能获取
    readonly recipint: string,
    private details: string,
    public amount: number,
    // hello: number // 缺少type限制则
  ){}
//由于interface的原因，如果没有这个format那么就会报错
  format() {
    return `${this.recipint} owes ${this.amount} for ${this.details}`;
  }
}
