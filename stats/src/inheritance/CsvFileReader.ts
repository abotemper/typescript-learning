import fs from 'fs';

export abstract class CsvFileReader<TypeOfData> {
  data: TypeOfData[] = [];
  
  constructor(public filename: string) {}

  read(): void {
    this.data = fs.readFileSync(this.filename, {
      encoding: 'utf-8'
    })
      .split('\n')
      .map(
        (row: string): string[] => {
        return row.split(',');
      })
        .map(this.mapRow);
  }
//在抽象类中先声明一个方法，并暂至一个类型，到子类中声明具体类型并实现方法。
//这样具体把数据每一行改成什么类型只需要在子类中改动
//或者有不同行类目的东西，我们可以再建立一个子类，继承后另外实现
  abstract mapRow(row: string[]): TypeOfData;
}