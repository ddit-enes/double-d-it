.PHONY: start stop

DOCKER_COMPOSE_FILE = docker-compose.yml

start: ## Start all services
	@docker compose -f $(DOCKER_COMPOSE_FILE) up --build -d

stop: ## Stop all services
	@docker compose -f $(DOCKER_COMPOSE_FILE) down --remove-orphans