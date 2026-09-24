'use strict';

// Not covered by tests - see github/CLAUDE.md, "Требования к содержимому
// репозиториев" (this repo's coverage is deliberately kept around 30%; only
// the formatter is tested).
const fs = require('fs');

function toCsv(rows, columns) {
  const header = columns.join(',');
  const body = rows.map((row) => columns.map((col) => row[col] ?? '').join(',')).join('\n');
  return [header, body].join('\n');
}

function writeCsv(path, rows, columns) {
  fs.writeFileSync(path, toCsv(rows, columns), 'utf8');
}

module.exports = { toCsv, writeCsv };
