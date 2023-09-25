import { conjugatePresentRegularEr } from './conjugate-present-regular-er.js';
import { conjugatePresentRegularRe } from './conjugate-present-regular-re.js';


/**
 * Forms the present tense conjugation of a verb in a given person.
 * @param   {String} verb   Infinitive form of the verb to conjugate.
 * @param   {String} person Which person to conjugate the verb into.
 * @returns {String}        Conjugated verb.
 */
export function conjugatePresent(verb, person) {
    const REGULAR_ER = [
        'parler',
        'aimer',
        'écouter',
    ];
    const REGULAR_RE = [
        'vendre',
    ];

    let conjugatedVerb = '';

    switch(true) {
        case REGULAR_ER.includes(verb):
            conjugatedVerb = conjugatePresentRegularEr(verb, person);
            break;
        case REGULAR_RE.includes(verb):
            conjugatedVerb = conjugatePresentRegularRe(verb, person);
            break;
    }

    return conjugatedVerb;
}