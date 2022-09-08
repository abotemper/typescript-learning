"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatcheResult_1 = require("../MatcheResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === 'Man United' && match[5] === MatcheResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === 'Man United' && match[5] === MatcheResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return `team ${this.team} won ${wins} times`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
