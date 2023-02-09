import answers from '../recursion';

describe('recursion', function () {
  const fileData = {
    dir: 'app',
    files: [
      'index.html',
      {
        dir: 'js',
        files: [
          'main.js',
          'app.js',
          'misc.js',
          {
            dir: 'vendor',
            files: ['jquery.js', 'underscore.js'],
          },
        ],
      },
      {
        dir: 'css',
        files: ['reset.css', 'main.css'],
      },
    ],
  };

  it('should be able to return a list of files from the data', function () {
    const result = answers.listFiles(fileData);

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(8);
    expect(result.indexOf('index.html')).toBeGreaterThan(-1);
    expect(result.indexOf('main.js')).toBeGreaterThan(-1);
    expect(result.indexOf('underscore.js')).toBeGreaterThan(-1);
    expect(result.indexOf('reset.css')).toBeGreaterThan(-1);

  });

  it('should be able to return a list of files in a subdir', function () {
    const result = answers.listFiles(fileData, 'js');

    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(5);
    expect(result.indexOf('main.js')).toBeGreaterThan(-1);
    expect(result.indexOf('underscore.js')).toBeGreaterThan(-1);
  });
});
