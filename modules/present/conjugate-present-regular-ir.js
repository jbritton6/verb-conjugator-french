/**
 * Forms the present tense conjugation of regular-ir verbs in a given person.
 * @param   {String} verb   Infinitive form of the regular-ir verb to conjugate.
 * @param   {String} person Which person to conjugate the verb into.
 * @returns {String}        Conjugated verb.
 */
export function conjugatePresentRegularIr(verb, person) {
    let conjugatedVerb = '';

    switch(person) {
        case 'singular-1st':
            conjugatedVerb = verb.slice(0, -1) + 's';
            break;
        case 'singular-2nd':
            conjugatedVerb = verb.slice(0, -1) + 's';
            break;
        case 'singular-3rd':
            conjugatedVerb = verb.slice(0, -1) + 't';
            break;
        case 'plural-1st':
            conjugatedVerb = verb.slice(0, -1) + 'issons';
            break;
        case 'plural-2nd':
            conjugatedVerb = verb.slice(0, -1) + 'issez';
            break;
        case 'plural-3rd':
            conjugatedVerb = verb.slice(0, -1) + 'issent';
            break;
    }

    return conjugatedVerb;
}