/**
 * Forms the present tense conjugation of regular-ir verbs in a given person.
 * @param   {String} verb   Infinitive form of the regular-ir verb to conjugate.
 * @param   {String} person Which person to conjugate the verb into.
 * @returns {String}        Conjugated verb.
 */
export function presentRegularIr(verb, person) {
    let conjugatedVerb = '';

    switch(person) {
        case 'singular-1st':
            conjugatedVerb = verb.slice(0, -2) + 'is';
            break;
        case 'singular-2nd':
            conjugatedVerb = verb.slice(0, -2) + 'is';
            break;
        case 'singular-3rd':
            conjugatedVerb = verb.slice(0, -2) + 'it';
            break;
        case 'plural-1st':
            conjugatedVerb = verb.slice(0, -2) + 'issons';
            break;
        case 'plural-2nd':
            conjugatedVerb = verb.slice(0, -2) + 'issez';
            break;
        case 'plural-3rd':
            conjugatedVerb = verb.slice(0, -2) + 'issent';
            break;
    }

    return conjugatedVerb;
}