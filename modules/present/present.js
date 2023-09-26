import { presentRegularEr } from './present-regular-er.js';
import { presentRegularRe } from './present-regular-re.js';
import { presentRegularIr } from './present-regular-ir.js';
import { presentIrregularLikeOuvrir } from './present-irregular-like-ouvrir.js';


/**
 * Forms the present tense conjugation of a verb in a given person.
 * @param   {String} verb   Infinitive form of the verb to conjugate.
 * @param   {String} person Which person to conjugate the verb into.
 * @returns {String}        Conjugated verb.
 */
export function present(verb, person) {
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
            conjugatedVerb = presentRegularEr(verb, person);
            break;
        case REGULAR_RE.includes(verb):
            conjugatedVerb = presentRegularRe(verb, person);
            break;
        case REGULAR_IR.includes(verb):
            conjugatedVerb = presentRegularIr(verb, person);
            break;
        case IRREGULAR_LIKE_OUVRIR.includes(verb):
            conjugatedVerb = presentIrregularLikeOuvrir(verb, person);
    }

    return conjugatedVerb;
}