/**
 * Forms the present tense conjugation of irregular verbs that are like
 * the verb 'acheter' (change in the accent) in a given person.
 * @param   {String} verb   Infinitive form of the irregular verb to conjugate.
 * @param   {String} person Which person to conjugate the verb into.
 * @returns {String}        Conjugated verb.
 */
export function presentIrregularLikeAcheter(verb, person) {
    let conjugatedVerb = '';
    let ePos = verb.indexOf('e', 1);

    switch(person) {
        case 'singular-1st':
            conjugatedVerb = verb.slice(0, ePos)
                + 'è' + verb.slice(ePos + 1, -2) + 'e';
            break;
        case 'singular-2nd':
            conjugatedVerb = verb.slice(0, ePos)
                + 'è' + verb.slice(ePos + 1, -2) + 'es';
            break;
        case 'singular-3rd':
            conjugatedVerb = verb.slice(0, ePos)
                + 'è' + verb.slice(ePos + 1, -2) + 'e';
            break;
        case 'plural-1st':
            conjugatedVerb = verb.slice(0, -2) + 'ons';
            break;
        case 'plural-2nd':
            conjugatedVerb = verb.slice(0, -2) + 'ez';
            break;
        case 'plural-3rd':
            conjugatedVerb = verb.slice(0, ePos)
                + 'è' + verb.slice(ePos + 1, -2) + 'ent';
            break;
    }

    return conjugatedVerb;
}