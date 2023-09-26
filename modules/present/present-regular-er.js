/**
 * Forms the present tense conjugation of regular-er verbs in a given person.
 * @param   {String} verb   Infinitive form of the regular-er verb to conjugate.
 * @param   {String} person Which person to conjugate the verb into.
 * @returns {String}        Conjugated verb.
 */
export function presentRegularEr(verb, person) {
    let conjugatedVerb = '';

    switch(person) {
        case 'singular-1st':
            conjugatedVerb = verb.slice(0, -2) + 'e';
            break;
        case 'singular-2nd':
            conjugatedVerb = verb.slice(0, -2) + 'es';
            break;
        case 'singular-3rd':
            conjugatedVerb = verb.slice(0, -2) + 'e';
            break;
        case 'plural-1st':
            conjugatedVerb = verb.slice(0, -2) + 'ons';
            break;
        case 'plural-2nd':
            conjugatedVerb = verb.slice(0, -2) + 'ez';
            break;
        case 'plural-3rd':
            conjugatedVerb = verb.slice(0, -2) + 'ent';
            break;
    }

    return conjugatedVerb;
}