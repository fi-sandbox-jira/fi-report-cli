'use strict';

function padRight(value, width) {
  const str = String(value);
  return str.length >= width ? str : str + ' '.repeat(width - str.length);
}

function formatTable(rows, columns) {
  const widths = columns.map((col) =>
    Math.max(col.length, ...rows.map((row) => String(row[col] ?? '').length))
  );
  const header = columns.map((col, i) => padRight(col, widths[i])).join(' | ');
  const separator = widths.map((w) => '-'.repeat(w)).join('-|-');
  const body = rows.map((row) =>
    columns.map((col, i) => padRight(row[col] ?? '', widths[i])).join(' | ')
  );
  return [header, separator, ...body].join('\n');
}

module.exports = { formatTable, padRight };
