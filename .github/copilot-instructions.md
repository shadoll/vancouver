# Copilot Instructions

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

This is a Svelte project with the following specifications:

## Tech Stack
- Svelte with Vite (no webpack)
- Docker/Podman for local development
- GitHub Actions for CI/CD and GitHub Pages deployment
- SPA Router for routing
- Lucide Svelte for icons

## Architecture
- Component-based architecture with reusable components
- Global styles and component-specific styles
- Multilanguage support with browser detection
- Theme switching (light/dark mode) with system detection
- Responsive design for mobile and desktop
- Local storage for user preferences
- Smooth animations and scroll effects

## Key Components
- Header (with language switcher and theme switcher)
- Footer
- LanguageSwitcher
- ThemeSwitcher
- Main content components

## Styling Guidelines
- Use CSS custom properties for theming
- Mobile-first responsive design
- Smooth transitions and animations
- Modern, clean design aesthetic

## State Management
- Use Svelte stores for global state
- Store user preferences (theme, language) in localStorage
- Detect browser language and system theme as defaults
