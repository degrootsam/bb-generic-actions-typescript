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

### 2. Add new functions

You can add new functions using the `bbs` CLI.

```sh
bbs functions new <name>
```

### 3. Build the Project

To compile the TypeScript files into JavaScript, run:

```sh
npm run build
```

The compiled files will be placed in the `functions` folder

### 4. Run Tests

To execute tests using Jest, run:

```sh
npm test
```

### 5. Publishing

To publish your project using the `bbs` CLI, use:

```sh
bbs functions publish
```

This command will deploy your actions to the appropriate environment.

### Notes

- This template is designed to be modular and easy to extend.
- Feel free to modify tsconfig.json or jest.config.js to suit your project’s needs.
- For more details, check out the bbs CLI documentation.

Happy coding! 🚀
