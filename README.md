# Vancouver Investment Fund - Official Website

A modern, responsive website for the Vancouver Investment Fund built with Svelte and Vite.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Multilingual Support**: English and Ukrainian languages with automatic browser detection
- **Theme Switching**: Light/dark mode with system preference detection
- **Responsive Design**: Mobile-first approach, works on all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Docker Support**: Easy development and deployment with Docker/Podman
- **CI/CD Pipeline**: Automated deployment to GitHub Pages
- **Component Architecture**: Reusable components for scalability

## 🛠 Tech Stack

- **Frontend**: Svelte 5 + Vite
- **Styling**: CSS Custom Properties for theming
- **Icons**: Lucide Svelte
- **Routing**: Svelte SPA Router (ready for multi-page expansion)
- **Deployment**: GitHub Pages via GitHub Actions
- **Development**: Docker/Podman support

## 🏃‍♂️ Quick Start

### Using Make (Recommended)

```bash
# Install dependencies in container
make install

# Start development server with hot reload (automatic rebuild on file changes)
make dev

# Build for production (static files for GitHub Pages)
make build

# Clean build files and containers
make clean

# Stop all containers
make stop
```

The `make dev` command will:
- Automatically detect Docker or Podman
- Start the development server in a container
- Watch for file changes and rebuild automatically
- Enable hot module replacement (HMR) for instant updates

### Manual Commands (in container)

```bash
# Install dependencies
make install

# Start development server
make dev

# Build for production  
make build
```

### Docker Development

```bash
# Development with Docker
docker-compose up app

# Production with Docker
docker-compose --profile production up app-prod
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.svelte   # Navigation with theme/language switchers
│   ├── Footer.svelte   # Footer component
│   └── Home.svelte     # Main page content
├── stores.js           # Global state management
├── translations.js     # Multi-language support
├── app.css            # Global styles and CSS variables
├── App.svelte         # Root component
└── main.js            # Application entry point
```

## 🌍 Internationalization

The website supports multiple languages with automatic browser detection:
- English (en) - Default
- Ukrainian (uk)

Language preferences are stored in localStorage and persist across sessions.

## 🎨 Theming

The application supports light and dark themes with:
- Automatic system preference detection
- Manual theme switching
- Persistent user preferences
- CSS custom properties for consistent theming

## 🚀 Deployment

### GitHub Pages (Automatic)

Push to the `main` branch to trigger automatic deployment to GitHub Pages via GitHub Actions.

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy the dist/ folder to your hosting provider
```

## 🐳 Container Development

The project automatically detects and uses Docker or Podman:

### Development with Hot Reload
```bash
# Automatically detects container runtime (Docker/Podman)
make dev

# Or manually specify:
docker-compose up app
# OR
podman-compose up app
```

### Features:
- **Automatic file watching**: Changes to source files trigger instant rebuilds
- **Hot Module Replacement (HMR)**: See changes without page refresh
- **Volume mounting**: Source code changes are reflected immediately
- **Container runtime detection**: Works with both Docker and Podman

### Container Configuration:
- **Port**: 5173 (accessible at http://localhost:5173)
- **Polling**: Enabled for file watching in containers
- **HMR**: Configured for container networking
- **Volume mounts**: Source code and node_modules are properly mounted

## 📝 Available Scripts

- `make dev` - Start development server
- `make build` - Build for production
- `make prod` - Start production server
- `make dev-docker` - Start development with Docker
- `make prod-docker` - Start production with Docker
- `make clean` - Clean build files and dependencies
- `make help` - Show all available commands

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📞 Contact

Vancouver Investment Fund
- Address: 01033, Ukraine, Kyiv, 48, 50A Zhylianska St., Office 13
- Phone: +38 050 465 46 18
- Manager: Oleksandr Viktorovych Svynar

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
