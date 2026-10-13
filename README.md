# 🔎 vitedex

Practice project built to learn how to consume a REST API from a modern React front-end, using TypeScript, Vite and shadcn/ui.

It fetches the 151 first-generation Pokémon from the [PokéAPI](https://pokeapi.co/) and displays them in a searchable grid of cards.

<!-- TODO: add a screenshot or GIF, e.g. ![vitedex screenshot](docs/screenshot.png) -->

---

## 📌 About the Project

vitedex is a personal practice project. Its main goal is to get hands-on experience with **consuming a REST API** in a single-page application: requesting data over HTTP, typing the responses and rendering them in a component-based interface.

It also served as a way to practice:

- Building a React application with **TypeScript**
- Setting up a project with **Vite** and a modern tooling stack (ESLint, Prettier)
- Composing an interface with **shadcn/ui** components and **Tailwind CSS**

---

## ✨ Features

- Loads the list of the **151 first-generation Pokémon** from the PokéAPI (`/api/v2/pokemon?limit=151&offset=0`)
- **Real-time search** by name, case-insensitive
- **Responsive card grid** that goes from 1 to 4 columns depending on the screen size
- One card component per Pokémon, which receives the Pokémon's API URL from the list
- Loading state while the list is being fetched, and a message when no Pokémon matches the search
- Light and dark theme styles

---

## 🛠️ Technologies Used

| Technology            | Usage                                        |
|-----------------------|----------------------------------------------|
| **React 19**          | UI library                                   |
| **TypeScript**        | Static typing                                |
| **Vite**              | Dev server and build tool                    |
| **Tailwind CSS 4**    | Styling                                      |
| **shadcn/ui + Radix** | Accessible, composable UI components         |
| **Lucide React**      | Icons                                        |
| **ESLint + Prettier** | Linting and code formatting                  |
| **PokéAPI**           | REST API used as the data source             |

---

## 📂 Project Structure

```
vitedex/
├── public/                # Static assets
├── src/                   # Application source code
├── components.json        # shadcn/ui configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML entry point
├── package.json           # Dependencies and scripts
├── tsconfig*.json         # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md              # This file
```

---

## 🚀 How to Run the Application

### Prerequisites

- **Node.js** (current LTS version) → [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

Check that they are installed:
```bash
node --version
npm --version
```

---

### Step 1 — Clone the repository

```bash
git clone https://github.com/KaiohZz/vitedex.git
cd vitedex
```

---

### Step 2 — Install the dependencies

```bash
npm install
```

---

### Step 3 — Start the development server

```bash
npm run dev
```

Then open the address printed in the terminal (Vite's default is `http://localhost:5173`).

---

### Available scripts

| Command             | Description                              |
|---------------------|------------------------------------------|
| `npm run dev`       | Starts the development server            |
| `npm run build`     | Type-checks and builds for production    |
| `npm run preview`   | Serves the production build locally      |
| `npm run lint`      | Runs ESLint                              |
| `npm run typecheck` | Runs the TypeScript compiler without emitting files |
| `npm run format`    | Formats `.ts` and `.tsx` files with Prettier |

---

## 📝 Notes

This is a learning project, so the focus is on practicing the fundamentals of working with a REST API in a React + TypeScript application rather than on a production-ready product.
