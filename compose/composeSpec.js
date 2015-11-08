import chai from 'chai';
import { wordCount, wordCount2 } from './compose';

const expect = chai.expect;

describe('Compose', () => {
  const str = 'Im playing with composition and its fun.';

  describe('wordCount()', () => {
    it('return the number of words', () => {
      expect(wordCount(str)).to.equal(7);
    });
  });

  describe('wordCount2()', () => {
    it('return the number of words', () => {
      expect(wordCount2(str)).to.equal(7);
    });
  });
});
