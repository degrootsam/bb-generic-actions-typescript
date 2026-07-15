# Generic Actions TypeScript Template

This project serves as a starting point for building generic actions in TypeScript.

## Dependencies

This template includes the following key dependencies:

- **TypeScript** – Static TypeScript for JavaScript.
- **bun** – Fast Compilation and Testing.

Check `package.json` for the full list of dependencies.

## Getting Started

### 1. Install Dependencies

First, install the necessary dependencies:

```sh
bun install
```

### 2. Test your code

Create your tests in `__tests__` and test them:

```sh
bun test
```

### 3. Configure publishing

Create a `config.json` in the project root with your `applicationId` and `host`:

```json
{
  "applicationId": "your-application-id",
  "host": "your-host"
}
```

See: https://github.com/bettyblocks/cli/wiki/Functions:Advanced

### 4. Build & publish your code

To only build your functions into `./functions`:

```sh
npm run build
```

To build and publish in one step:

```sh
npm run publish
```

This command checks that `config.json` exists, builds your functions, and publishes them to the application it defines. The `./functions` directory is deleted after a successful publish.

## Utilizing the power of TypeScript

## Notes

- The `./functions` directory is included in the .gitignore. It also gets deleted after a successful publish.
- This template is designed to be modular and easy to extend.
- Feel free to modify tsconfig.json to suit your project's needs.
- For more details, check out the bbs CLI documentation.
