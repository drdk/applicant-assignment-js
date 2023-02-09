import answers from '../conditionals';

describe('conditionals', () => {
  it('should be able to conditionally split the code', () => {
    let num = 0;

    while (num % 3 === 0 || num % 5 === 0) {
      num = Math.floor(Math.random() * 10) + 1;
    }

    expect(answers.fizzBuzz()).toBe(false);
    expect(answers.fizzBuzz('foo')).toBe(false);
    expect(answers.fizzBuzz(2)).toEqual(2);
    expect(answers.fizzBuzz(101)).toEqual(101);

    expect(answers.fizzBuzz(3)).toEqual('fizz');
    expect(answers.fizzBuzz(6)).toEqual('fizz');
    expect(answers.fizzBuzz(num * 3)).toEqual('fizz');

    expect(answers.fizzBuzz(5)).toEqual('buzz');
    expect(answers.fizzBuzz(10)).toEqual('buzz');
    expect(answers.fizzBuzz(num * 5)).toEqual('buzz');

    expect(answers.fizzBuzz(15)).toEqual('fizzbuzz');
    expect(answers.fizzBuzz(num * 3 * 5)).toEqual('fizzbuzz');
  });
});
