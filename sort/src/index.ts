import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";

// const numberCollection = new NumberCollection ([10, 3, -5, 0, 100, 50, -50, 200]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(sorter.collection);

const characterCollection = new CharacterCollection('XaByZjKsDeF');
const sorter = new Sorter(characterCollection);
sorter.sort();
console.log(sorter.collection);