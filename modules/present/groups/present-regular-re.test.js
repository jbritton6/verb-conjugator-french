import { presentRegularRe } from './present-regular-re.js';


describe('Conjugating present tense regular re verbs', () => {
    test('1st person of vendre singular returns vends', () => {
        expect(presentRegularRe('vendre', 'singular-1st')).toBe('vends');
    });
    test('2nd person of vendre singular returns vends', () => {
        expect(presentRegularRe('vendre', 'singular-2nd')).toBe('vends');
    });
    test('3rd person of vendre singular returns vend', () => {
        expect(presentRegularRe('vendre', 'singular-3rd')).toBe('vend');
    });
    test('1st person of vendre plural returns vendons', () => {
        expect(presentRegularRe('vendre', 'plural-1st')).toBe('vendons');
    });
    test('2nd person of vendre plural returns vendez', () => {
        expect(presentRegularRe('vendre', 'plural-2nd')).toBe('vendez');
    });
    test('3rd person of vendre plural returns vendent', () => {
        expect(presentRegularRe('vendre', 'plural-3rd')).toBe('vendent');
    });


    test('1st person of attendre singular returns attends', () => {
        expect(presentRegularRe('attendre', 'singular-1st')).toBe('attends');
    });
    test('2nd person of attendre singular returns attends', () => {
        expect(presentRegularRe('attendre', 'singular-2nd')).toBe('attends');
    });
    test('3rd person of attendre singular returns attend', () => {
        expect(presentRegularRe('attendre', 'singular-3rd')).toBe('attend');
    });
    test('1st person of attendre plural returns attendons', () => {
        expect(presentRegularRe('attendre', 'plural-1st')).toBe('attendons');
    });
    test('2nd person of attendre plural returns attendez', () => {
        expect(presentRegularRe('attendre', 'plural-2nd')).toBe('attendez');
    });
    test('3rd person of attendre plural returns attendent', () => {
        expect(presentRegularRe('attendre', 'plural-3rd')).toBe('attendent');
    });


    test('1st person of rendre singular returns rends', () => {
        expect(presentRegularRe('rendre', 'singular-1st')).toBe('rends');
    });
    test('2nd person of rendre singular returns rends', () => {
        expect(presentRegularRe('rendre', 'singular-2nd')).toBe('rends');
    });
    test('3rd person of rendre singular returns rend', () => {
        expect(presentRegularRe('rendre', 'singular-3rd')).toBe('rend');
    });
    test('1st person of rendre plural returns rendons', () => {
        expect(presentRegularRe('rendre', 'plural-1st')).toBe('rendons');
    });
    test('2nd person of rendre plural returns rendez', () => {
        expect(presentRegularRe('rendre', 'plural-2nd')).toBe('rendez');
    });
    test('3rd person of rendre plural returns rendent', () => {
        expect(presentRegularRe('rendre', 'plural-3rd')).toBe('rendent');
    });
})