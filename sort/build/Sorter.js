"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            //if collection is an array of numbers
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
                //only going to work if collectio nis a string
                //if collection is a string, do this logic instead:
                //logic to compare and swap characters in a string
                //number, string, boolean, symbol 这些管用对于下面
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
exports.Sorter = Sorter;
