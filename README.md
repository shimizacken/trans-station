# 📻 Trans-Station

**Trans-Station** is a simple **TypeScript**-based radio web application that lets users stream online radio stations with ease.  
It’s built with a focus on clean architecture, modular design, and maintainability, and leverages the **[Neutron](https://github.com/shimizacken/neutron)** signal library for efficient event handling.

🎯 **Live Demo:** [https://transtationradio.netlify.app](https://transtationradio.netlify.app)

---

<p align="center">
  <img width="150" src="https://github.com/user-attachments/assets/eb083bdf-f6a8-4570-b518-823a2ad07386" />
</p>

---


## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Storybook
npm run storybook
```

## 📂 Project Structure
- `components/` – UI components for playback, station listing, etc.
- `views/` – Stateless presentational components
- `containers/` – Components managing logic and state
- `hooks/` – Custom hooks for player controls and station management
- `utils/` – Helper functions
- 
## ✨ Features
- 🎵 Stream online radio stations using **hls.js**
- ⚡ Event-driven architecture powered by **Neutron**
- 🧩 Component-driven development with **Storybook**
- 🛠 Tested with **Jest**
- 📦 Bundled with **Parcel**
- 📜 Written entirely in **TypeScript**


## Naming conventions

| type                | filename                      | suffix  | examples              |
| ------------------- | ----------------------------- | ------- | --------------------- |
| component           | PascalCase                    | \*.tsx  | MyComponent.[page|viewModel|view].tsx       |
| component folder    | PascalCase                     | -       | MyComponent           |
| vanilla JS          | camelCase                     | \*.ts   | userStoreValidator.ts |
| component test file | PascalCase and dot             | \*.ts   | MyButton.test.js      |
| component's scss    | PascalCase                    | \*.scss | MyControls.module.scss       |
| partial scss        | low dash prefix and camelCase | \*.scss | \_variables.scss      |
| image               | dash-separated                | \*.png  | logo-icon.png         |
| svg                 | dash-separated                | \*.svg  | logo-icon.svg         |

---

## Folder structure

Flat folder structure:

```
├── src
│   ├──api
│   ├──containers
│   │   └── AppMenu.container.tsx
│   ├──hooks
│   ├──pages
│   │   └── Dashboard.page.tsx
│   ├──components
│   │   └── button
│   │   ├──── Button.module.scss.tsx
│   │   ├──── Button.stories.tsx
│   │   ├──── Button.view.tsx
│   │   └── index.ts
│   ├──utils
│   ├──services
│   └── ...
└── ...
```

## Naming conventions

| Type                | Filename                      | Suffix  | Example              |
| ------------------- | ----------------------------- | ------- | --------------------- |
| Page                | PascalCase                    | \*.page.tsx  | Dashboard.page.tsx       |
| Container           | PascalCase                    | \*.container.tsx  | DatatypeCard.container.tsx       |
| View                | PascalCase                    | \*.view.tsx  | DatatypeCard.view.tsx      
| Story               | PascalCase                    | \*.stories.tsx | Button.stories.tsx |
| Component folder    | case-kebab                    | -       | code-viewer           |
| Vanilla ts          | camelCase                     | \*.ts   | userStoreValidator.ts |
| Util                | camelCase                     | \*.utils.ts   | entities.utils.ts |
| Api                 | camelCase                     | \*.api.ts   | entities.api.ts |
| Service             | camelCase                     | \*.service.ts   | entities.service.ts |
| Unit test           | Same as the file it tests     | \*.test.ts | entities.test.ts |
| E2E test            | camelCase                     | \*.cy.ts | dashboard.cy.ts |
| Types               | camelCase                     | \*.types.ts   | pipes.types.ts |
| Json                | camelCase                     | \*.json | packageSettings.json  |
| Component's css/scss    | PascalCase                    | \*.css, \*.module.scss | Button.module.scss       |
| Partial scss        | low dash prefix and camelCase | \*.scss | \_variables.scss      |
| Image               | low_dash_separated                | \*.png  | logo_icon.png         |
| SVG                 | dash-separated                | \*.svg  | logo-icon.svg         |


## Utils

Utils functions should be used as generic reusable tools. As such, it should be simple to use them across apps and packages, without the need to have any dependencies that they might required.

### Best practices for writing util functions
- Should be pure functions
- Testable without the need to mock 
- Small and concise
- Should do one thing
- All dependencies are passed as args
- Pass the minimum required args

## 🛠 Tech Stack
- **Frontend:** TypeScript, HTML, CSS
- **Media Streaming:** hls.js
- **State & Signals:** Neutron
- **Tooling:** Parcel, Storybook, Jest
