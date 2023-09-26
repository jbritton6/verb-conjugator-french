import { presentRegularEr } from './present-regular-er.js'

describe('Conjugating regular re verbs', () => {
    test('conjugating parler in the 1st person returns parle', () => {
        expect(presentRegularEr('parler', 'singular-1st')).toBe('parle');
    });
})