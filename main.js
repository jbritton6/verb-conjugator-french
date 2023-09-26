import { present } from './modules/present/present.js';
import data from './verbs.json' assert { type : 'json' };

let verbs = data.verbs;

for (let verb of verbs) {
    let conjugatedVerb = present(verb, 'singular-1st');
    console.log(conjugatedVerb);
}