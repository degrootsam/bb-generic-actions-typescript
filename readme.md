# Generic Actions TypeScript Template

This project serves as a starting point for building generic actions in TypeScript.

## 📦 Dependencies

This template includes the following key dependencies:

- **TypeScript** – Static TypeScript for JavaScript.
- **Jest** – Testing framework.
- **esbuild** – Fast JavaScript bundler.

Check `package.json` for the full list of dependencies.

## 🚀 Getting Started

### 1. Install Dependencies

First, install the necessary dependencies:

```sh
npm install
```

### 2. Test your code

Create your tests in `__tests__` and test them:

```sh
npm test
```

### 3. Build your code

After all tests have passed, build your code

```sh
npm run build
```

> This will build all `.ts` files and copy the `.json` files to `./functions`.

### 4. Publish your code

```sh
bb functions publish
```

This command will deploy your actions to the appropriate environment.

## Utilizing the power of TypeScript

## Notes

- The `./functions` directory is included in the .gitignore.
- This template is designed to be modular and easy to extend.
- Feel free to modify tsconfig.json or jest.config.js to suit your project’s needs.
- For more details, check out the bbs CLI documentation.

Happy coding! 🚀
