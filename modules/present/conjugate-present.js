import { conjugatePresentRegularEr } from './conjugate-present-regular-er.js';
import { conjugatePresentRegularRe } from './conjugate-present-regular-re.js';
import { conjugatePresentRegularIr } from './conjugate-present-regular-ir.js';
import { conjugatePresentIrregularLikeOuvrir } from './conjugate-present-irregular-like-ouvrir.js';


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
    const REGULAR_IR = [
        'finir',
    ];
    const IRREGULAR_LIKE_OUVRIR = [
        'ouvrir',
        'découvrir',
        'offrir',
        'souffrir',
    ];

    let conjugatedVerb = '';

    switch(true) {
        case REGULAR_ER.includes(verb):
            conjugatedVerb = conjugatePresentRegularEr(verb, person);
            break;
        case REGULAR_RE.includes(verb):
            conjugatedVerb = conjugatePresentRegularRe(verb, person);
            break;
        case REGULAR_IR.includes(verb):
            conjugatedVerb = conjugatePresentRegularIr(verb, person);
            break;
        case IRREGULAR_LIKE_OUVRIR.includes(verb):
            conjugatedVerb = conjugatePresentIrregularLikeOuvrir(verb, person);
    }

    return conjugatedVerb;
}