This is a new project I am creating to learn typescript.

## Test Tags

Tests are tagged to allow selective execution independent of the folder structure.

| Tag          | Purpose                                   | Example command                          |
|--------------|-------------------------------------------|-------------------------------------------|
| `@smoke`     | Fast, critical-path subset                | `npx playwright test --grep "@smoke"`     |
| `@regression`| Full suite — runs nightly                 | `npx playwright test --grep "@regression"`|
| `@api`       | API-specific tests across features.       | `npx playwright test --grep "@api"`       |
| `@ui`        | UI-specific tests across features.        | `npx playwright test --grep "@ui"`        |
| `@negative`  | Error/edge-case and resilience tests      | `npx playwright test --grep "@negative"`  |

**Convention:** all tags are lowercase, prefixed with `@`, and applied via the `tag` option (not embedded in test titles). New tags should be added to this table before use.