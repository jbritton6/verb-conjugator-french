import { presentIrregularLikeAcheter } from './present-irregular-like-acheter.js';


describe('Conjugating present tense irregular acheter like verbs', () => {
    test('1st person of acheter singular returns achète', () => {
        expect(presentIrregularLikeAcheter('acheter', 'singular-1st')).toBe('achète');
    });
    test('2nd person of acheter singular returns achètes', () => {
        expect(presentIrregularLikeAcheter('acheter', 'singular-2nd')).toBe('achètes');
    });
    test('3rd person of acheter singular returns achète', () => {
        expect(presentIrregularLikeAcheter('acheter', 'singular-3rd')).toBe('achète');
    });
    test('1st person of acheter plural returns achetons', () => {
        expect(presentIrregularLikeAcheter('acheter', 'plural-1st')).toBe('achetons');
    });
    test('2nd person of acheter plural returns achetez', () => {
        expect(presentIrregularLikeAcheter('acheter', 'plural-2nd')).toBe('achetez');
    });
    test('3rd person of acheter plural returns achètent', () => {
        expect(presentIrregularLikeAcheter('acheter', 'plural-3rd')).toBe('achètent');
    });


    test('1st person of peser singular returns pèse', () => {
        expect(presentIrregularLikeAcheter('peser', 'singular-1st')).toBe('pèse');
    });
    test('2nd person of peser singular returns pèses', () => {
        expect(presentIrregularLikeAcheter('peser', 'singular-2nd')).toBe('pèses');
    });
    test('3rd person of peser singular returns pèse', () => {
        expect(presentIrregularLikeAcheter('peser', 'singular-3rd')).toBe('pèse');
    });
    test('1st person of peser plural returns pesons', () => {
        expect(presentIrregularLikeAcheter('peser', 'plural-1st')).toBe('pesons');
    });
    test('2nd person of peser plural returns pesez', () => {
        expect(presentIrregularLikeAcheter('peser', 'plural-2nd')).toBe('pesez');
    });
    test('3rd person of peser plural returns pèsent', () => {
        expect(presentIrregularLikeAcheter('peser', 'plural-3rd')).toBe('pèsent');
    });


    test('1st person of emmener singular returns emmène', () => {
        expect(presentIrregularLikeAcheter('emmener', 'singular-1st')).toBe('emmène');
    });
    test('2nd person of emmener singular returns emmènes', () => {
        expect(presentIrregularLikeAcheter('emmener', 'singular-2nd')).toBe('emmènes');
    });
    test('3rd person of emmener singular returns emmène', () => {
        expect(presentIrregularLikeAcheter('emmener', 'singular-3rd')).toBe('emmène');
    });
    test('1st person of emmener plural returns emmenons', () => {
        expect(presentIrregularLikeAcheter('emmener', 'plural-1st')).toBe('emmenons');
    });
    test('2nd person of emmener plural returns emmenez', () => {
        expect(presentIrregularLikeAcheter('emmener', 'plural-2nd')).toBe('emmenez');
    });
    test('3rd person of emmener plural returns emmènent', () => {
        expect(presentIrregularLikeAcheter('emmener', 'plural-3rd')).toBe('emmènent');
    });
})