# Frontend

The React + TypeScript frontend for the Job Application Tracker. It contains all UI screens, including login, the dashboard and application management.

## Tech stack

- **React** with **TypeScript** (strict mode)
- **Vite** for the dev server and builds
- **Tailwind CSS** for layout and spacing
- **Ant Design** for UI components
- **ESLint** for linting, with **eslint-config-prettier** to avoid conflicts with Prettier
- **Prettier** for code formatting

## Getting started

### Prerequisites

- Node.js (LTS version)
- npm (included with Node.js)

### Setup

1. Clone the repository and open the `frontend` folder in a terminal.
2. Install dependencies with npm's clean install command, which installs the exact versions recorded in `package-lock.json`.
3. Start the dev server using the `dev` script, then open the local URL shown in the terminal.

### Available scripts

| Script    | What it does                                                     |
| --------- | ---------------------------------------------------------------- |
| `dev`     | Starts the local dev server with hot module replacement          |
| `build`   | Type-checks the project and builds it for production into `dist` |
| `preview` | Serves the production build locally for testing                  |
| `lint`    | Runs ESLint across the project                                   |

## Code style

- Formatting is handled by Prettier, configured in `.prettierrc.json`. Format on save is enabled through the shared workspace settings.
- ESLint handles code-quality checks. Style rules that would conflict with Prettier are switched off by `eslint-config-prettier`.

## Styling approach

Ant Design provides the UI components (forms, tables, buttons, modals), and Tailwind handles layout and spacing around them. Brand colors are set through Ant Design's theme configuration rather than by overriding its styles.

## Folder structure

_To be documented once the `src` structure is decided (Phase 1, step 6)._
