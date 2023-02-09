import answers from '../arrays';

describe('arrays', () => {
  let a: Array<number>;

  beforeEach(() => {
    a = [1, 2, 3, 4];
  });

  it('should be able to add the values of an array', () => {
    expect(answers.sum(a)).toEqual(10);
  });

  it('should be able to remove a value from an array', () => {
    a.push(2); // Make sure the value appears more than one time
    const result = answers.remove(a, 2);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
    expect(result.join(' ')).toEqual('1 3 4');
  });

  it('should be able to remove a value from an array, returning the original array', () => {
    a.splice(1, 0, 2);
    a.push(2);
    a.push(2);

    const result = answers.removeWithoutCopy(a, 2);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
    expect(result.join(' ')).toEqual('1 3 4');

    // make sure that you return the same array instance
    expect(result).toEqual(a);
  });

  it('should be able to add an item anywhere in an array', () => {
    const result = answers.insert(a, 'z', 2);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(5);
    expect(result.join(' ')).toEqual('1 2 z 3 4');
  });

  it('should be able to count the occurences of an item in an array', () => {
    const result = answers.count([1, 2, 4, 4, 3, 4, 3], 4);

    expect(result).toEqual(3);
  });

  it('should be able to find duplicates in an array', () => {
    const result = answers.duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(3);
    expect(result.sort().join(' ')).toEqual('1 3 4');
  });

  it('should be able to find all occurrences of an item in an array', () => {
    const result = answers.findAllOccurrences('abcdefabc'.split(''), 'a');

    expect(Array.isArray(result)).toBe(true);
    expect(result.sort().join(' ')).toEqual('0 6');
  });
});
