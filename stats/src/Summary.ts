//此文件负责定义两种接口，并定义一个类，这个类负责将最后结果打印出来

import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTarget/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winAnalysisWithHtmlReport(team: string) {
    return new Summary(    
      new WinsAnalysis(team),
      new HtmlReport()
    );

  }

  constructor (
    public analyzer: Analyzer, 
    public outputTarget: OutputTarget){}

    buildAndPrintReport(matches: MatchData[]): void {
      const output = this.analyzer.run(matches);
      this.outputTarget.print(output);
    }

}


