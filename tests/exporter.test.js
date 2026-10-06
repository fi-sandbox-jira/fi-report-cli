const { toCsv } = require('../src/exporter');

describe('exporter.toCsv', () => {
  test('writes a header and one line per row', () => {
    const csv = toCsv(
      [
        { key: 'A-1', status: 'Done' },
        { key: 'A-2', status: 'In Progress' },
      ],
      ['key', 'status']
    );
    expect(csv).toBe('key,status\nA-1,Done\nA-2,In Progress');
  });

  test('keeps the column order from the columns argument', () => {
    expect(toCsv([{ a: 1, b: 2 }], ['b', 'a'])).toBe('b,a\n2,1');
  });

  test('returns only the header for an empty row list', () => {
    expect(toCsv([], ['key'])).toBe('key\n');
  });
});
