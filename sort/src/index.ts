import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumberCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";
const numberCollection = new NumberCollection ([10, 3, -5, 0, 100, 50, -50, 200]);
numberCollection.sort();
console.log(numberCollection.data);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(sorter.collection);

const characterCollection = new CharacterCollection('XaByZjKsDeF');
characterCollection.sort();
console.log(characterCollection.data);
// const sorter = new Sorter(characterCollection);
// sorter.sort();
// console.log(sorter.collection);

const linkedList = new LinkedList();
linkedList.add(600)
linkedList.add(500)
linkedList.add(400)
linkedList.add(300)
linkedList.add(200)
linkedList.add(100)

linkedList.sort();
linkedList.print();
// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();