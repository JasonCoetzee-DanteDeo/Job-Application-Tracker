# Frontend

The React + TypeScript frontend for the Job Application Tracker. It contains all UI screens, including login, the dashboard and application management.

## Tech stack

- **React** with **TypeScript** (strict mode)
- **React Router** in data mode for URLs and navigation
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

Source files live under `src`.

| Path                         | What it holds                                                              |
| ---------------------------- | -------------------------------------------------------------------------- |
| `src/main.tsx`               | Mounts the app and renders the router inside the Ant Design providers     |
| `src/router.tsx`             | The data-mode route list                                                   |
| `src/layouts/RootLayout.tsx` | The shared navigation and the slot where the matched page renders         |
| `src/pages`                  | One component per screen                                                   |
| `src/types/models.ts`        | Shared types for applications, companies, notes, and documents            |
| `src/mocks/mockData.ts`      | Sample records for those types                                             |
| `src/constants/currencies.ts` | The currency codes a salary can use                                       |
| `src/index.css`              | Tailwind layers and global styles                                          |

## Routing

React Router runs in data mode. Routes are objects passed to `createBrowserRouter` in `src/router.tsx`. `main.tsx` renders that router with `RouterProvider`. The router is created once, outside of a component.

Child paths are added onto `/`. A path segment that starts with `:` is a parameter. `applications/new` is a fixed path, so it is not treated as an application id. `*` matches any URL the other routes do not.

| URL                                  | Page                 | File                                |
| ------------------------------------ | -------------------- | ----------------------------------- |
| `/`                                  | Dashboard            | `src/pages/Dashboard.tsx`           |
| `/login`                             | Login                | `src/pages/LoginPage.tsx`           |
| `/sign-up`                           | Sign-up              | `src/pages/SignUpPage.tsx`          |
| `/applications`                      | Applications list    | `src/pages/ApplicationsList.tsx`    |
| `/applications/new`                  | Add application      | `src/pages/AddApplication.tsx`      |
| `/applications/:applicationId`       | Application detail   | `src/pages/ApplicationDetail.tsx`   |
| `/applications/:applicationId/edit`  | Edit application     | `src/pages/EditApplication.tsx`     |
| Any other URL                        | Not found            | `src/pages/NotFound.tsx`            |

The detail and edit pages read `applicationId` from the URL with `useParams`. A link uses a real id, for example `/applications/application-1`, not the `:applicationId` placeholder.

## Layout

Every route is a child of `/`, whose component is `RootLayout`. The layout renders a `nav` of `Link`s and an `Outlet`. The outlet is where the matched page appears, so the navigation stays in place while the page changes.

Tailwind classes on the `nav` and each `Link` set the bar colour, padding, and hover state. Those classes space the links. They do not restyle an Ant Design component.

## Styling approach

This project uses **Ant Design** and **Tailwind CSS** together, with a clear split between them.

### Responsibilities

| Concern             | Tool                    | Examples                                            |
| ------------------- | ----------------------- | --------------------------------------------------- |
| UI components       | Ant Design              | Buttons, forms, inputs, tables, modals, tags, menus |
| Brand look and feel | Ant Design theme tokens | Primary color, border radius, font family           |
| Page layout         | Tailwind                | Flexbox and grid, page structure, alignment         |
| Spacing             | Tailwind                | Margins and padding around and between components   |
| Responsiveness      | Tailwind                | Breakpoint-based layout changes                     |
| Custom elements     | Tailwind                | Anything not built from an Ant Design component     |

### Rules

- **Use Ant Design components first.** If Ant Design provides a component, use it rather than building one from scratch.
- **Don't restyle Ant Design components with Tailwind.** Change their appearance through theme tokens instead, so all states (hover, focus, disabled, active) stay consistent.
- **Tailwind may position Ant Design components**, for example adding margins or placing them in a flex or grid layout, but not change how they look.
- **Brand colors and visual settings live in the Ant Design theme configuration**, not in individual component styles.

### How the two coexist

Tailwind's base styles (preflight) can override Ant Design's component styles. To prevent this, the project uses CSS cascade layers, declared in `index.css` in this order:

1. `theme` – Tailwind's theme variables
2. `base` – Tailwind's preflight reset
3. `antd` – Ant Design's component styles
4. `components` – reserved for custom component styles
5. `utilities` – Tailwind's utility classes

Later layers take priority. Ant Design therefore overrides Tailwind's reset, while Tailwind's utility classes can still override Ant Design when applied directly.

Ant Design generates its styles at runtime, so the app is wrapped in a `StyleProvider` (from `@ant-design/cssinjs`) with layering enabled in `main.tsx`. This outputs Ant Design's styles into the `antd` layer. `@ant-design/cssinjs` must stay on the same major version that Ant Design depends on.

### Brand colors

For time being, the primary colour is set to #6b2b3a.
