import { conjugatePresent } from './modules/present/conjugate-present.js';
import data from './verbs.json' assert { type : 'json' };

let verbs = data.verbs;

for (let verb of verbs) {
    let conjugatedVerb = conjugatePresent(verb, 'singular-1st');
    console.log(conjugatedVerb);
}