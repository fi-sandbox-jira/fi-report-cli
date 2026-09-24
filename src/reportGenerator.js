'use strict';

// Not covered by tests - see github/CLAUDE.md, "Требования к содержимому
// репозиториев" (this repo's coverage is deliberately kept low; only the
// formatter is tested).
function buildIssueSummary(issues) {
  return issues.map((issue) => ({
    key: issue.key,
    status: issue.status,
    assignee: issue.assignee || 'unassigned',
  }));
}

module.exports = { buildIssueSummary };
