import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

//create an instance of matchereader and pass in something satisfying
//the 'datareader' interface
const csvFileReader = new CsvFileReader('football.csv');

const matcheReader = new MatchReader(csvFileReader);
matcheReader.load()

const summary = Summary.winAnalysisWithHtmlReport('Man United');

summary.buildAndPrintReport(matcheReader.matches);

//matcheReader.matches

// const reader = new MatchReader('football.csv');
// reader.read();
// const dateOfFirstMatch = reader.data[0][0]

// console.log(dateOfFirstMatch)

// enum = enumeration
//给别的程序员看，这里面的东西联系紧密，很敏感， 很有逻辑性，不能乱删
//一般有一些约定俗成的东西，比如赤橙黄绿青蓝紫，白天黑天，这些可以枚举的东西。
//然后内容比较少的，比如1860到现在都有哪些年，可以枚举但是太多了。



// const homeWin = 'H';
// const awayWin = 'A';
// const draw = 'D';



