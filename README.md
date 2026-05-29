# SauceDemo Playwright Automation Framework

Automation testing framework developed using Playwright and TypeScript to demonstrate UI and API testing practices.

## Features

- End-to-end UI automation for SauceDemo
- API testing using Playwright Request API
- Page Object Model (POM) architecture
- Test data management with JSON fixtures
- Automated test execution through GitHub Actions

## Test Coverage

### UI Tests

- Valid Login
- Invalid Login
- Add Item to Cart

### API Tests

- GET Users
- POST Resource Creation

## Technology Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions

## Project Structure

```text
pages/
├── LoginPage.ts
├── ProductsPage.ts

tests/
├── login.spec.ts
├── cart.spec.ts
└── api/
    ├── users.api.spec.ts
    └── posts.api.spec.ts

fixtures/
└── users.json

.github/workflows/
└── playwright.yml
```

## Running Tests

```bash
npm install
npx playwright test
```

## Continuous Integration

Tests are executed automatically through GitHub Actions on every push to the repository.
