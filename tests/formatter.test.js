const { formatTable, padRight } = require('../src/formatter');

describe('formatter', () => {
  test('pads values to the given width', () => {
    expect(padRight('a', 3)).toBe('a  ');
    expect(padRight('abcd', 3)).toBe('abcd');
  });

  test('formats a table with header and rows', () => {
    const table = formatTable([{ key: 'A-1', status: 'Done' }], ['key', 'status']);
    expect(table).toContain('key');
    expect(table).toContain('A-1');
    expect(table.split('\n')).toHaveLength(3);
  });
});
