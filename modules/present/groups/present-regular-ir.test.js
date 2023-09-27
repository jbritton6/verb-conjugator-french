import { presentRegularIr } from './present-regular-ir.js';


describe('Conjugating present tense regular ir verbs', () => {
    test('1st person of finir singular returns finis', () => {
        expect(presentRegularIr('finir', 'singular-1st')).toBe('finis');
    });
    test('2nd person of finir singular returns finis', () => {
        expect(presentRegularIr('finir', 'singular-2nd')).toBe('finis');
    });
    test('3rd person of finir singular returns finit', () => {
        expect(presentRegularIr('finir', 'singular-3rd')).toBe('finit');
    });
    test('1st person of finir plural returns finissons', () => {
        expect(presentRegularIr('finir', 'plural-1st')).toBe('finissons');
    });
    test('2nd person of finir plural returns finissez', () => {
        expect(presentRegularIr('finir', 'plural-2nd')).toBe('finissez');
    });
    test('3rd person of finir plural returns finissent', () => {
        expect(presentRegularIr('finir', 'plural-3rd')).toBe('finissent');
    });


    test('1st person of abolir singular returns abolis', () => {
        expect(presentRegularIr('abolir', 'singular-1st')).toBe('abolis');
    });
    test('2nd person of abolir singular returns abolis', () => {
        expect(presentRegularIr('abolir', 'singular-2nd')).toBe('abolis');
    });
    test('3rd person of abolir singular returns abolit', () => {
        expect(presentRegularIr('abolir', 'singular-3rd')).toBe('abolit');
    });
    test('1st person of abolir plural returns abolissons', () => {
        expect(presentRegularIr('abolir', 'plural-1st')).toBe('abolissons');
    });
    test('2nd person of abolir plural returns abolissez', () => {
        expect(presentRegularIr('abolir', 'plural-2nd')).toBe('abolissez');
    });
    test('3rd person of abolir plural returns abolissent', () => {
        expect(presentRegularIr('abolir', 'plural-3rd')).toBe('abolissent');
    });


    test('1st person of agir singular returns agis', () => {
        expect(presentRegularIr('agir', 'singular-1st')).toBe('agis');
    });
    test('2nd person of agir singular returns agis', () => {
        expect(presentRegularIr('agir', 'singular-2nd')).toBe('agis');
    });
    test('3rd person of agir singular returns agit', () => {
        expect(presentRegularIr('agir', 'singular-3rd')).toBe('agit');
    });
    test('1st person of agir plural returns agissons', () => {
        expect(presentRegularIr('agir', 'plural-1st')).toBe('agissons');
    });
    test('2nd person of agir plural returns agissez', () => {
        expect(presentRegularIr('agir', 'plural-2nd')).toBe('agissez');
    });
    test('3rd person of agir plural returns agissent', () => {
        expect(presentRegularIr('agir', 'plural-3rd')).toBe('agissent');
    });
})