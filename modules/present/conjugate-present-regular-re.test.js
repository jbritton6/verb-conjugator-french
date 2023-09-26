import { conjugatePresentRegularEr } from './conjugate-present-regular-er.js'

describe('Regular re verbs 1st person', () => {
    test('conjugating parler in the 1st person returns parle', () => {
        expect(conjugatePresentRegularEr('parler', 'singular-1st')).toBe('parle');
    });
})