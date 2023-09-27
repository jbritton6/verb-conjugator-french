import { presentIrregularLikeOuvrir } from './present-irregular-like-ouvrir.js';


describe('Conjugating present tense irregular ouvrir like verbs', () => {
    test('1st person of ouvrir singular returns ouvre', () => {
        expect(presentIrregularLikeOuvrir('ouvrir', 'singular-1st')).toBe('ouvre');
    });
    test('2nd person of ouvrir singular returns ouvres', () => {
        expect(presentIrregularLikeOuvrir('ouvrir', 'singular-2nd')).toBe('ouvres');
    });
    test('3rd person of ouvrir singular returns ouvre', () => {
        expect(presentIrregularLikeOuvrir('ouvrir', 'singular-3rd')).toBe('ouvre');
    });
    test('1st person of ouvrir plural returns ouvrons', () => {
        expect(presentIrregularLikeOuvrir('ouvrir', 'plural-1st')).toBe('ouvrons');
    });
    test('2nd person of ouvrir plural returns ouvrez', () => {
        expect(presentIrregularLikeOuvrir('ouvrir', 'plural-2nd')).toBe('ouvrez');
    });
    test('3rd person of ouvrir plural returns ouvrent', () => {
        expect(presentIrregularLikeOuvrir('ouvrir', 'plural-3rd')).toBe('ouvrent');
    });


    test('1st person of couvrir singular returns couvre', () => {
        expect(presentIrregularLikeOuvrir('couvrir', 'singular-1st')).toBe('couvre');
    });
    test('2nd person of couvrir singular returns couvres', () => {
        expect(presentIrregularLikeOuvrir('couvrir', 'singular-2nd')).toBe('couvres');
    });
    test('3rd person of couvrir singular returns couvre', () => {
        expect(presentIrregularLikeOuvrir('couvrir', 'singular-3rd')).toBe('couvre');
    });
    test('1st person of couvrir plural returns couvrons', () => {
        expect(presentIrregularLikeOuvrir('couvrir', 'plural-1st')).toBe('couvrons');
    });
    test('2nd person of couvrir plural returns couvrez', () => {
        expect(presentIrregularLikeOuvrir('couvrir', 'plural-2nd')).toBe('couvrez');
    });
    test('3rd person of couvrir plural returns couvrent', () => {
        expect(presentIrregularLikeOuvrir('couvrir', 'plural-3rd')).toBe('couvrent');
    });


    test('1st person of offrir singular returns offre', () => {
        expect(presentIrregularLikeOuvrir('offrir', 'singular-1st')).toBe('offre');
    });
    test('2nd person of offrir singular returns offres', () => {
        expect(presentIrregularLikeOuvrir('offrir', 'singular-2nd')).toBe('offres');
    });
    test('3rd person of offrir singular returns offre', () => {
        expect(presentIrregularLikeOuvrir('offrir', 'singular-3rd')).toBe('offre');
    });
    test('1st person of offrir plural returns offrons', () => {
        expect(presentIrregularLikeOuvrir('offrir', 'plural-1st')).toBe('offrons');
    });
    test('2nd person of offrir plural returns offrez', () => {
        expect(presentIrregularLikeOuvrir('offrir', 'plural-2nd')).toBe('offrez');
    });
    test('3rd person of offrir plural returns offrent', () => {
        expect(presentIrregularLikeOuvrir('offrir', 'plural-3rd')).toBe('offrent');
    });
})