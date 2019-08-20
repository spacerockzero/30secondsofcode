const { expect } = require('chai')
const { f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12, f13 } = require('./functions')

describe('functions', () => {

  it('1. invoke all functions in an array of functions, return their results as an array', () => {
    const minMax = f1(Math.min, Math.max);
    expect(minMax(1, 2, 3, 4, 5)).to.eql([1, 5])
  })

  it('2. make a function that only takes up to one argument, ignoring the rest', () => {
    expect(['6', '8', '10'].map(f2(parseInt))).to.eql([6, 8, 10])
  })

  it('3. if the provided function is true for all elements in an array, return `true`, `false` if one or more return `false`', () => {
    expect(f3([4, 2, 3], x => x > 1)).to.eql(true)
    expect(f3([1, 2, 3])).to.eql(true)
  })

  it('4. Separate an array into smaller arrays of a specific size', () => {
    expect(f4([1, 2, 3, 4, 5], 2)).to.eql([[1, 2], [3, 4], [5]])
  })

  it('5. Remove values that are falsy from array', () => {
    expect(f5([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])).to.eql([1, 2, 3, 'a', 's', 34])
  })

  it('6. Count how many times a value occurs within an array', () => {
    expect(f6([1, 1, 2, 1, 2, 3], 1)).to.equal(3)
  });

  it('7. Return the different values between two arrays', () => {
    expect(f7([1, 2, 3], [1, 2, 4])).to.eql([3])
  });

  it('8. de-duplicate an array with repeating values', () => {
    expect(f8([1, 2, 2, 3, 4, 4, 5])).to.eql([1, 3, 5])
  });

  it('9. flattened array with a specified nested array depth', () => {
    expect(f9([1, [2], 3, 4])).to.eql([1, 2, 3, 4])
    expect(f9([1, [2, [3, [4, 5], 6], 7], 8], 2)).to.eql([1, 2, 3, [4, 5], 6, 7, 8])
  })

  it('10. Create an array of N length, full of the same specified value', () => {
    expect(f10(5, 2)).to.eql([2, 2, 2, 2, 2])
  });

  it('11. Check whether all functions in an array return `false`', () => {
    expect(f11([0, 1, 3, 0], x => x == 2)).to.equal(true)
    expect(f11([0, 0, 0])).to.equal(true)
  });

  it('12. return a random item from an array', () => {
    const arr = [3, 7, 9, 11]
    expect(arr.includes(f12(arr))).to.equal(true)
  })

  it('13. mix up the order of the items of an array, return a new copy.', () => {
    // small chance of random collision. hard to test randomizing functions
    const foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const bar = f13(foo)
    expect(bar).to.not.eql(foo)
    expect(foo).to.eql(foo)
  });
})
