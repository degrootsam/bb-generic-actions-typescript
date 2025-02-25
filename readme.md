# Generic Actions TypeScript Template

This project was generated using the [bbs CLI](https://github.com). It serves as a starting point for building generic actions in TypeScript.

## 📦 Dependencies

This template includes the following key dependencies:

- **TypeScript** – Static typing for JavaScript.
- **Jest** – Testing framework.
- **esbuild** – Fast JavaScript bundler.
- **Babel** – JavaScript compiler with TypeScript support.

Check `package.json` for the full list of dependencies.

## 🚀 Getting Started

### 1. Install Dependencies

First, install the necessary dependencies:

```sh
npm install
```

### 2. Build the Project

To compile the TypeScript files into JavaScript, run:

```sh
npm run build
```

The compiled files will be placed in the `functions` folder

### 3. Run Tests

To execute tests using Jest, run:

```sh
npm test
```

### 4. Publishing

To publish your project using the bbs CLI, use:

```sh
bbs functions publish
```

This command will deploy your actions to the appropriate environment.

### Notes

- This template is designed to be modular and easy to extend.
- Feel free to modify tsconfig.json or jest.config.js to suit your project’s needs.
- For more details, check out the bbs CLI documentation.

Happy coding! 🚀
