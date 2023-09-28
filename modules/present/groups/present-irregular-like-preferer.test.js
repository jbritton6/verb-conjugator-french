import { presentIrregularLikePreferer } from './present-irregular-like-preferer.js';


describe('Conjugating present tense irregular préférer like verbs', () => {
    test('1st person of préférer singular returns préfère', () => {
        expect(presentIrregularLikePreferer('préférer', 'singular-1st')).toBe('préfère');
    });
    test('2nd person of préférer singular returns préfères', () => {
        expect(presentIrregularLikePreferer('préférer', 'singular-2nd')).toBe('préfères');
    });
    test('3rd person of préférer singular returns préfère', () => {
        expect(presentIrregularLikePreferer('préférer', 'singular-3rd')).toBe('préfère');
    });
    test('1st person of préférer plural returns préférons', () => {
        expect(presentIrregularLikePreferer('préférer', 'plural-1st')).toBe('préférons');
    });
    test('2nd person of préférer plural returns préférez', () => {
        expect(presentIrregularLikePreferer('préférer', 'plural-2nd')).toBe('préférez');
    });
    test('3rd person of préférer plural returns préfèrent', () => {
        expect(presentIrregularLikePreferer('préférer', 'plural-3rd')).toBe('préfèrent');
    });


    test('1st person of régler singular returns règle', () => {
        expect(presentIrregularLikePreferer('régler', 'singular-1st')).toBe('règle');
    });
    test('2nd person of régler singular returns règles', () => {
        expect(presentIrregularLikePreferer('régler', 'singular-2nd')).toBe('règles');
    });
    test('3rd person of régler singular returns règle', () => {
        expect(presentIrregularLikePreferer('régler', 'singular-3rd')).toBe('règle');
    });
    test('1st person of régler plural returns réglons', () => {
        expect(presentIrregularLikePreferer('régler', 'plural-1st')).toBe('réglons');
    });
    test('2nd person of régler plural returns réglez', () => {
        expect(presentIrregularLikePreferer('régler', 'plural-2nd')).toBe('réglez');
    });
    test('3rd person of régler plural returns règlent', () => {
        expect(presentIrregularLikePreferer('régler', 'plural-3rd')).toBe('règlent');
    });


    test('1st person of considérer singular returns considère', () => {
        expect(presentIrregularLikePreferer('considérer', 'singular-1st')).toBe('considère');
    });
    test('2nd person of considérer singular returns considères', () => {
        expect(presentIrregularLikePreferer('considérer', 'singular-2nd')).toBe('considères');
    });
    test('3rd person of considérer singular returns considère', () => {
        expect(presentIrregularLikePreferer('considérer', 'singular-3rd')).toBe('considère');
    });
    test('1st person of considérer plural returns considérons', () => {
        expect(presentIrregularLikePreferer('considérer', 'plural-1st')).toBe('considérons');
    });
    test('2nd person of considérer plural returns considérez', () => {
        expect(presentIrregularLikePreferer('considérer', 'plural-2nd')).toBe('considérez');
    });
    test('3rd person of considérer plural returns considèrent', () => {
        expect(presentIrregularLikePreferer('considérer', 'plural-3rd')).toBe('considèrent');
    });
})