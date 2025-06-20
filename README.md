# Vancouver Investment Fund - Official Website

A modern, responsive website for the Vancouver Investment Fund built with Svelte and Vite.

## 🌐 Live Site

Visit the official website at: **[https://vancouverinvest.com.ua](https://vancouverinvest.com.ua)**

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations and scroll effects
- **Multilingual Support**: English and Ukrainian languages with automatic browser detection
- **Theme Switching**: Light/dark/system mode with automatic detection and persistent preferences
- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Fast Performance**: Built with Vite for optimal loading speeds and asset optimization
- **Custom Domain**: Deployed at vancouverinvest.com.ua with SSL certificate
- **Docker Support**: Easy development and deployment with Docker/Podman
- **CI/CD Pipeline**: Automated deployment to GitHub Pages with custom domain
- **Component Architecture**: Reusable components for scalability and maintainability

## 🛠 Tech Stack

- **Frontend**: Svelte 5 + Vite
- **Styling**: CSS Custom Properties for theming with light/dark/system modes
- **Icons**: Lucide Svelte for consistent iconography
- **Routing**: Svelte SPA Router (ready for multi-page expansion)
- **Deployment**: GitHub Pages with custom domain (vancouverinvest.com.ua)
- **Development**: Docker/Podman support with hot reload
- **Assets**: Optimized background images and SVG graphics

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
├── stores.js           # Global state management (theme, language)
├── translations.js     # Multi-language support (EN/UK)
├── app.css            # Global styles and CSS custom properties
├── App.svelte         # Root component
└── main.js            # Application entry point

public/
├── CNAME              # Custom domain configuration
├── hero-background.svg # Hero section background (light theme)
├── hero-background-dark.svg # Hero section background (dark theme)
├── energy-background.jpg # Investment area background
├── retail-background.jpg # Investment area background
├── office-background.jpg # Investment area background
└── favicon.svg        # Site favicon
```

## 🌍 Internationalization

The website supports multiple languages with automatic browser detection:
- English (en) - Default
- Ukrainian (uk)

Language preferences are stored in localStorage and persist across sessions.

## 🎨 Theming

The application supports comprehensive theming with:
- **System Detection**: Automatically detects user's system preference (light/dark)
- **Manual Override**: Users can manually select light, dark, or system mode
- **Persistent Preferences**: Theme choice is stored in localStorage
- **CSS Custom Properties**: Consistent theming across all components
- **Smooth Transitions**: Animated theme switching for better UX
- **Responsive Design**: Optimized colors and contrasts for both themes

## 🚀 Deployment

### Custom Domain Setup

The site is deployed at **[vancouverinvest.com.ua](https://vancouverinvest.com.ua)** with automatic SSL certificate.

### GitHub Pages Configuration

The deployment is fully automated via GitHub Actions:

1. **Domain Configuration:**
   - Custom domain: `vancouverinvest.com.ua`
   - CNAME file automatically deployed
   - SSL certificate provided by GitHub Pages

2. **Automatic Deployment:**
   - Triggered on every push to `main` branch
   - Builds static assets with Vite
   - Optimizes images and assets for production
   - Deploys to GitHub Pages with custom domain

3. **Build Process:**
   - Installs dependencies with `npm ci`
   - Builds production bundle with `npm run build`
   - Uploads build artifacts to GitHub Pages
   - Serves content from custom domain

### Development & Production URLs

- **Production**: [https://vancouverinvest.com.ua](https://vancouverinvest.com.ua)
- **Development**: http://localhost:5173 (when running locally)

### GitHub Pages (Automatic)

Push to the `main` branch to trigger automatic deployment with the following process:
1. GitHub Actions builds the project
2. Static files are generated in `dist/` directory
3. Assets are optimized and processed by Vite
4. Site is deployed to custom domain with SSL
5. CNAME file ensures proper domain routing

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

- `make dev` - Start development server with hot reload
- `make build` - Build for production with optimized assets
- `make prod` - Start production server preview
- `make dev-docker` - Start development with Docker
- `make prod-docker` - Start production with Docker
- `make install` - Install dependencies in container
- `make clean` - Clean build files and containers
- `make stop` - Stop all running containers
- `make help` - Show all available commands

## 📄 License

This project is proprietary and confidential.
