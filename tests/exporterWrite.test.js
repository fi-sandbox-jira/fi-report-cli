const fs = require('fs');
const { writeCsv } = require('../src/exporter');

describe('exporter.writeCsv', () => {
  afterEach(() => jest.restoreAllMocks());

  test('writes the CSV text to the given path as utf8', () => {
    const spy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {});
    writeCsv('out.csv', [{ key: 'A-1' }], ['key']);
    expect(spy).toHaveBeenCalledWith('out.csv', 'key\nA-1', 'utf8');
  });
});
