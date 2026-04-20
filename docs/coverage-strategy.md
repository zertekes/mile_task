# Coverage strategy

## Scope in this repository

- Happy-path login for a subscribed user
- Product selection from home feed
- Add to cart action
- Cart visibility and checkout entry-point visibility

## Why this scope first

- It validates account access, catalog discoverability, purchase intent, and cart state continuity.
- It is compact enough for deterministic CI execution while still covering core business risk.

## Next scenarios to add

1. Invalid credentials and error messaging
2. Subscription-lapsed user behavior
3. Out-of-stock handling on product detail
4. Add/remove quantity persistence after app relaunch
5. Deep-link path directly to product detail

## Stability practices

- Prefer accessibility identifiers over text selectors.
- Use page objects to isolate selector and navigation changes.
- Keep one assertion per state transition where practical.
- Run single-worker E2E for simulator consistency.
