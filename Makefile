.PHONY: help dev build clean install test stop detect-container-runtime

# Container runtime detection
CONTAINER_RUNTIME := $(shell command -v podman >/dev/null 2>&1 && echo "podman" || echo "docker")
COMPOSE_CMD := $(CONTAINER_RUNTIME)-compose

# Default target
help:
	@echo "Available commands:"
	@echo "  dev           - Start development server in container"
	@echo "  build         - Build production version (static files for GitHub Pages)"
	@echo "  install       - Install dependencies in container"
	@echo "  clean         - Clean build files and node_modules"
	@echo "  test          - Run tests in container"
	@echo "  stop          - Stop all containers"
	@echo ""
	@echo "Detected container runtime: $(CONTAINER_RUNTIME)"

# Development (container only)
dev:
	$(COMPOSE_CMD) up app

# Build for GitHub Pages (static files)
build:
	$(COMPOSE_CMD) run --rm app npm run build
	@echo "Static files built in ./dist directory"
	@echo "Ready for GitHub Pages deployment"

# Install dependencies in container
install:
	$(COMPOSE_CMD) run --rm app npm install

# Clean
clean:
	rm -rf node_modules dist .svelte-kit
	$(COMPOSE_CMD) down --volumes --remove-orphans

# Test in container
test:
	$(COMPOSE_CMD) run --rm app npm test

# Stop all containers
stop:
	$(COMPOSE_CMD) down

# Show detected container runtime
detect-container-runtime:
	@echo "Detected container runtime: $(CONTAINER_RUNTIME)"
