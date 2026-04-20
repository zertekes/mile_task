# Mile Detox E2E Scaffold

This repository is a maintainable Detox structure focused on one critical journey:

1. Login as a subscribed user
2. Navigate to a product detail page
3. Add item to cart
4. Verify cart and checkout entry point

## Important constraint

A public App Store binary cannot be installed into iOS Simulator. To run this project, wire it to a buildable iOS app workspace and scheme.

## Repository structure

```text
.
├── .detoxrc.js
├── .env.example
├── e2e
│   ├── init.ts
│   ├── journeys
│   │   └── login-add-to-cart.e2e.ts
│   ├── pages
│   │   ├── AuthPage.ts
│   │   ├── CartPage.ts
│   │   ├── HomePage.ts
│   │   └── ProductPage.ts
│   └── support
│       ├── credentials.ts
│       └── selectors.ts
├── docs
│   └── coverage-strategy.md
├── jest.e2e.config.js
├── package.json
└── tsconfig.json
```

## Setup

1. Clone this repository.
2. Run `yarn`.
3. Ensure Xcode, Command Line Tools, and an iPhone simulator are installed.
4. Provide your iOS project under `ios/` with:
   - workspace: `ios/Mile.xcworkspace`
   - scheme: `Mile`
5. Add matching iOS accessibility identifiers for selectors listed in `e2e/support/selectors.ts`.
6. Copy `.env.example` to `.env` and adjust credentials if needed.

## Run

```bash
yarn e2e
```

Or run steps separately:

```bash
yarn e2e:build
yarn e2e:test
```

## Notes on maintainability

- Page-object model keeps selectors and flow readable.
- A single journey is intentionally small and deterministic.
- Coverage strategy for future scenarios is in `docs/coverage-strategy.md`.
