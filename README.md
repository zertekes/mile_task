# Mile Detox E2E Scaffold

This repository is a maintainable Detox structure focused on one critical journey:

1. Login as a subscribed user
2. Navigate to a product detail page
3. Add item to cart
4. Verify cart and checkout entry point

## Current runtime setup

This workspace is currently configured to run a prebuilt simulator app binary via [.detoxrc.js](.detoxrc.js):

- app binary: /Users/zoltanertekes/Desktop/Workspace/Mile_App/Mile.app
- simulator: iPhone 17 Pro

If you want to run against a different app or simulator, update [.detoxrc.js](.detoxrc.js).

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
2. Install dependencies:
   - `yarn` or `npm install`
3. Ensure Xcode, Command Line Tools, and an iPhone simulator are installed.
4. Ensure [.env.example](.env.example) contains these required keys:
   - `E2E_EMAIL`
   - `E2E_PASSWORD`
5. Copy [.env.example](.env.example) to `.env`.
6. Add valid credentials in `.env`:
   - `E2E_EMAIL=...`
   - `E2E_PASSWORD=...`
7. If your app requires `testID`-based selectors for product/cart steps, keep selectors in [e2e/support/selectors.ts](e2e/support/selectors.ts) aligned with the app.

Note: the default values in [.env.example](.env.example) are placeholders and can be rejected by the backend.

## Run

```bash
yarn e2e
```

or

```bash
npm run e2e
```

Or run steps separately:

```bash
yarn e2e:build
yarn e2e:test
```

or

```bash
npm run e2e:build
npm run e2e:test
```

## Troubleshooting login

- If login does not proceed to password step, verify `E2E_EMAIL` and `E2E_PASSWORD` in `.env`.
- The app may show: `Login attempt failed. Please recheck your email and try again.` when credentials are invalid.

## Notes on maintainability

- Page-object model keeps selectors and flow readable.
- A single journey is intentionally small and deterministic.
- Coverage strategy for future scenarios is in `docs/coverage-strategy.md`.
