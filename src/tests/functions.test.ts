import answers from '../functions';

describe('functions', () => {
  it('should be able to return a function from a function', () => {
    expect(typeof answers.functionFunction('Hello')).toEqual('function');
    expect(answers.functionFunction('Hello')('world')).toEqual('Hello, world');
    expect(answers.functionFunction('World')('hello?')).toEqual(
      'World, hello?'
    );
  });

  it('should be able to make closures', () => {
    const arr = [Math.random(), Math.random(), Math.random(), Math.random()];
    const square = function (x: number) {
      return x * x;
    };
    const funcs = answers.makeClosures(arr, square);

    expect(Array.isArray(funcs)).toBe(true);
    expect(funcs).toHaveLength(arr.length);

    for (let i = 0; i < arr.length; i++) {
      expect(funcs[i]()).toEqual(square(arr[i]));
    }
  });

  it('should be able to use arguments', () => {
    const a = Math.random();
    const b = Math.random();
    const c = Math.random();
    const d = Math.random();

    expect(answers.useArguments(a)).toEqual(a);
    expect(answers.useArguments(a, b)).toEqual(a + b);
    expect(answers.useArguments(a, b, c)).toEqual(a + b + c);
    expect(answers.useArguments(a, b, c, d)).toEqual(a + b + c + d);
  });
});
