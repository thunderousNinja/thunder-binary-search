import binarySearch from '../src';

const SCORE = (item) => {
  if (item === 6) {
    return 0;
  } else if (item > 6) {
    return 1;
  } else {
    return -1;
  }
};

describe('binarySearch', () => {
  describe('found cases', () => {
    it('should find index on 1 array length', () => {
      let index = binarySearch([6], SCORE);
      expect(index).to.equal(0);
    });
    it('should find index on 2 array length', () => {
      let index = binarySearch([5, 6], SCORE);
      expect(index).to.equal(1);
    });
    it('should find index on 3 array length', () => {
      let index = binarySearch([5, 6, 8], SCORE);
      expect(index).to.equal(1);
    });
    it('should find index on even array length', () => {
      let index = binarySearch([1, 3, 4, 5, 6, 7], SCORE);
      expect(index).to.equal(4);
    });
    it('should find index on even array length', () => {
      let index = binarySearch([1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], SCORE);
      expect(index).to.equal(4);
    });
  });
  describe('not found cases', () => {
    it('should not find index on empty array', () => {
      let index = binarySearch([], SCORE);
      expect(index).to.equal(-1);
    });
    it('should not find index on 1 array length', () => {
      let index = binarySearch([3], SCORE);
      expect(index).to.equal(-1);
    });
    it('should not find index on 2 array length', () => {
      let index = binarySearch([3, 8], SCORE);
      expect(index).to.equal(-1);
    });
    it('should not find index on 3 array length', () => {
      let index = binarySearch([3, 8, 12323], SCORE);
      expect(index).to.equal(-1);
    });
  });

});
