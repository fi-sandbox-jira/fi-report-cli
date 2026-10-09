const { formatTable } = require('../src/formatter');

describe('formatter with missing values', () => {
  test('renders a missing field as an empty padded cell', () => {
    const lines = formatTable([{ key: 'A-1' }], ['key', 'status']).split('\n');
    expect(lines[0]).toBe('key | status');
    expect(lines[2]).toBe(`A-1 | ${' '.repeat('status'.length)}`);
  });

  test('treats null like a missing field when sizing columns', () => {
    const lines = formatTable([{ key: null }], ['key']).split('\n');
    expect(lines[0]).toBe('key');
    expect(lines[2]).toBe('   ');
  });
});
