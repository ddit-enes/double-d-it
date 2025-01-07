.PHONY: start stop start-prod stop-prod start-dev stop-dev

DOCKER_COMPOSE = docker-compose.yml

start: ## Start all services
	@docker compose -f $(DOCKER_COMPOSE) up --build -d

stop: ## Stop all services
	@docker compose -f $(DOCKER_COMPOSE) down

start-prod: ## Start prod services
	@docker compose -f $(DOCKER_COMPOSE) up --build -d frontend-prod

stop-prod: ## Stop prod services
	@docker compose -f $(DOCKER_COMPOSE) down frontend-prod

start-dev: ## Start dev services
	@docker compose -f $(DOCKER_COMPOSE) up --build -d frontend-dev

stop-dev: ## Stop dev services
	@docker compose -f $(DOCKER_COMPOSE) down frontend-dev
