# Problem Solving with TypeScript

A TypeScript-based project designed to enhance problem-solving skills, ranging from basic to advanced levels. This project automatically scans the source directory for all `TypeScript` files, dynamically imports them, and logs the results of any `export default` to the terminal when the application is run.

## Features

- **Dynamic File Scanning**: Recursively scans the `src` directory (or `dist` after build) to find all `.ts` files (excluding `main.ts`).
- **Automatic Execution**: Executes and logs the `export default` values from all valid files.
- **Error Handling**: Catches and displays errors for invalid or faulty module imports.
- **Streamlined Development**: Automatically rebuilds and runs with `nodemon` for efficient development cycles.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [TypeScript](https://www.typescriptlang.org/) (v5.0 or later)
- `pnpm` package manager
- If you prefer `npm` or `yarn`, delete `pnpm-lock.yaml` file and use `npm` or `yarn` commands.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nazmul-nhb/problem-solving-with-ts.git
   cd problem-solving-with-ts
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

### Usage

#### Development Mode

Run the project in development mode with automatic rebuilding:

```bash
pnpm dev
```

#### Production Mode

1. Build the project:

   ```bash
   pnpm build
   ```

2. Start the project:

   ```bash
   pnpm start
   ```

### Example Problem File

Create a `.ts` file in the `src` or any *subdirectories* in `src` directory. For example:

```typescript
const sum = (a: number, b: number): number => a + b;

export default sum(3, 4); // This will log 7 to the console
```

When you run the application, the result of this file (`7`) will be displayed in the terminal.

For more info, explore the [src](src) folder in this project.

### Error Handling

If any file fails to execute, the error message will be logged to the terminal, helping you debug easily.

### Scripts

- `pnpm run build`: Cleans the `dist` folder and compiles `TypeScript` files to JavaScript.
- `pnpm run dev`: Runs the project in development mode using `nodemon` with `ts-node` for hot reloading.
- `pnpm start`: Runs the compiled `JavaScript` files from the `dist` directory.

## Author

- **Nazmul Hassan**  
  - [GitHub](https://github.com/nazmul-nhb)
  - [Email](mailto:nazmulnhb@gmail.com)

---

## Problems Solved So Far

- [Questions from Ravi Bhai](src/ravi_bhai/questions.md)

- [Questions from Shamim](src/shamim/questions.md)
