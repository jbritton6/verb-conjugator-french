import { presentRegularEr } from './present-regular-er.js';


describe('Conjugating present tense regular re verbs', () => {
    test('1st person of parler singular returns parle', () => {
        expect(presentRegularEr('parler', 'singular-1st')).toBe('parle');
    });
    test('2nd person of parler singular returns parles', () => {
        expect(presentRegularEr('parler', 'singular-2nd')).toBe('parles');
    });
    test('3rd person of parler singular returns parle', () => {
        expect(presentRegularEr('parler', 'singular-3rd')).toBe('parle');
    });
    test('1st person of parler plural returns parlons', () => {
        expect(presentRegularEr('parler', 'plural-1st')).toBe('parlons');
    });
    test('2nd person of parler plural returns parlez', () => {
        expect(presentRegularEr('parler', 'plural-2nd')).toBe('parlez');
    });
    test('3rd person of parler plural returns parlent', () => {
        expect(presentRegularEr('parler', 'plural-3rd')).toBe('parlent');
    });

    
    test('1st person of abîmer singular returns abîme', () => {
        expect(presentRegularEr('abîmer', 'singular-1st')).toBe('abîme');
    });
    test('2nd person of abîmer singular returns abîmes', () => {
        expect(presentRegularEr('abîmer', 'singular-2nd')).toBe('abîmes');
    });
    test('3rd person of abîmer singular returns abîme', () => {
        expect(presentRegularEr('abîmer', 'singular-3rd')).toBe('abîme');
    });
    test('1st person of abîmer plural returns abîmons', () => {
        expect(presentRegularEr('abîmer', 'plural-1st')).toBe('abîmons');
    });
    test('2nd person of abîmer plural returns abîmez', () => {
        expect(presentRegularEr('abîmer', 'plural-2nd')).toBe('abîmez');
    });
    test('3rd person of abîmer plural returns abîment', () => {
        expect(presentRegularEr('abîmer', 'plural-3rd')).toBe('abîment');
    });

    
    test('1st person of danser singular returns danse', () => {
        expect(presentRegularEr('danser', 'singular-1st')).toBe('danse');
    });
    test('2nd person of danser singular returns danses', () => {
        expect(presentRegularEr('danser', 'singular-2nd')).toBe('danses');
    });
    test('3rd person of danser singular returns danse', () => {
        expect(presentRegularEr('danser', 'singular-3rd')).toBe('danse');
    });
    test('1st person of danser plural returns dansons', () => {
        expect(presentRegularEr('danser', 'plural-1st')).toBe('dansons');
    });
    test('2nd person of danser plural returns dansez', () => {
        expect(presentRegularEr('danser', 'plural-2nd')).toBe('dansez');
    });
    test('3rd person of danser plural returns dansent', () => {
        expect(presentRegularEr('danser', 'plural-3rd')).toBe('dansent');
    });
})