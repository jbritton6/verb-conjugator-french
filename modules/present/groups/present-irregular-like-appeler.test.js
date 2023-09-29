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


    test('1st person of épeler singular returns épelle', () => {
        expect(presentIrregularLikeAppeler('épeler', 'singular-1st')).toBe('épelle');
    });
    test('2nd person of épeler singular returns épelles', () => {
        expect(presentIrregularLikeAppeler('épeler', 'singular-2nd')).toBe('épelles');
    });
    test('3rd person of épeler singular returns épelle', () => {
        expect(presentIrregularLikeAppeler('épeler', 'singular-3rd')).toBe('épelle');
    });
    test('1st person of épeler plural returns épelons', () => {
        expect(presentIrregularLikeAppeler('épeler', 'plural-1st')).toBe('épelons');
    });
    test('2nd person of épeler plural returns épelez', () => {
        expect(presentIrregularLikeAppeler('épeler', 'plural-2nd')).toBe('épelez');
    });
    test('3rd person of épeler plural returns épellent', () => {
        expect(presentIrregularLikeAppeler('épeler', 'plural-3rd')).toBe('épellent');
    });


    test('1st person of hoqueter singular returns hoquette', () => {
        expect(presentIrregularLikeAppeler('hoqueter', 'singular-1st')).toBe('hoquette');
    });
    test('2nd person of hoqueter singular returns hoquettes', () => {
        expect(presentIrregularLikeAppeler('hoqueter', 'singular-2nd')).toBe('hoquettes');
    });
    test('3rd person of hoqueter singular returns hoquette', () => {
        expect(presentIrregularLikeAppeler('hoqueter', 'singular-3rd')).toBe('hoquette');
    });
    test('1st person of hoqueter plural returns hoquetons', () => {
        expect(presentIrregularLikeAppeler('hoqueter', 'plural-1st')).toBe('hoquetons');
    });
    test('2nd person of hoqueter plural returns hoquetez', () => {
        expect(presentIrregularLikeAppeler('hoqueter', 'plural-2nd')).toBe('hoquetez');
    });
    test('3rd person of hoqueter plural returns hoquettent', () => {
        expect(presentIrregularLikeAppeler('hoqueter', 'plural-3rd')).toBe('hoquettent');
    });
})