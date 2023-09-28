import { presentIrregularLikeAppeler } from './present-irregular-like-appeler.js';


describe('Conjugating present tense irregular ouvrir like verbs', () => {
    test('1st person of appeler singular returns appelle', () => {
        expect(presentIrregularLikeAppeler('appeler', 'singular-1st')).toBe('appelle');
    });
    test('2nd person of appeler singular returns appelles', () => {
        expect(presentIrregularLikeAppeler('appeler', 'singular-2nd')).toBe('appelles');
    });
    test('3rd person of appeler singular returns appelle', () => {
        expect(presentIrregularLikeAppeler('appeler', 'singular-3rd')).toBe('appelle');
    });
    test('1st person of appeler plural returns appelons', () => {
        expect(presentIrregularLikeAppeler('appeler', 'plural-1st')).toBe('appelons');
    });
    test('2nd person of appeler plural returns appelez', () => {
        expect(presentIrregularLikeAppeler('appeler', 'plural-2nd')).toBe('appelez');
    });
    test('3rd person of appeler plural returns appellent', () => {
        expect(presentIrregularLikeAppeler('appeler', 'plural-3rd')).toBe('appellent');
    });
})