#!/usr/bin/env node
'use strict';

// Not covered by tests - CLI entry point, see src/reportGenerator.js.
const { buildIssueSummary } = require('./reportGenerator');
const { formatTable } = require('./formatter');

function main(issues) {
  const rows = buildIssueSummary(issues);
  return formatTable(rows, ['key', 'status', 'assignee']);
}

if (require.main === module) {
  const sample = [
    { key: 'SAMPLE-1', status: 'Done', assignee: 'alice' },
    { key: 'SAMPLE-2', status: 'In Progress' },
  ];
  // eslint-disable-next-line no-console
  console.log(main(sample));
}

module.exports = { main };
