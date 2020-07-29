import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([70, -3, 6, 1]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
