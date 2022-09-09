//此文件负责将二维数组个名目的类型进行确定

import { dateStringToDate } from './utills';

//确定了类型中有一个枚举类型
import { MatchResult } from "./MatcheResult";
import { MatchData } from './MatchData'; 
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));

  }


  matches: MatchData[] = [];
  constructor(public reader: DataReader){}

  load() : void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6]
      ];
    }) 
  }

}