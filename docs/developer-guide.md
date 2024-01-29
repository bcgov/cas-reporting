# Developer Guidelines

## Testing

### Unit Tests with Jest

```bash
cd client && yarn test
```

If you want to see `console.log` or more detail, add the `--verbose` flag.

If you want to see more HTML output, add `DEBUG_PRINT_LIMIT=1000000` (or any large number).

If you want to access the testing playground, add `screen.logTestingPlaygroundURL()` to your test (although if the URL is too long, the playground will be blank).

Front-end unit tests include snapshots. Work that changes the DOM will result in a diff from the last accepted snapshot and cause related tests to fail. You can update the snapshots and review / accept the diff with `yarn test -u`.
