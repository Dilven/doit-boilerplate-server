## About

Boilerplate Nextjs with custom server (express.js)

## Installation

```bash
npm i
```

## Development

```bash
npm run dev
```

or with docker

````bash

```bash
npm run dev:docker
````

````

## Static analysis code

to check:

```bash
npm run static:check
````

to fix:

```bash
npm run static:fix
```

### Static Generation and Server-side Rendering

https://nextjs.org/docs/basic-features/pages#server-side-rendering

### API Routes

`host/api`

### Packages

- HTTP requests (Client) - `ky`
- HTTP requests (Server)- `ky-universal`
- Validation - `zod`
- Forms - `react-hook-form`
- Styles - `styled-components
- Static analysis code - `eslint`, `prettier`
- Asynchronous state management -`@tanstack/react-query`

### Features

- SSR
- Fast Refresh
- ESLint
- TypeScript
- Theme
- Express api endpoints
- Module path aliases
