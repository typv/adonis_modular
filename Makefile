ps:
	docker-compose ps
build:
	docker-compose up -d --build
up:
	docker-compose up -d
down:
	docker-compose down
stop:
	docker-compose stop
node:
	docker-compose exec node sh
db:
	docker-compose exec db sh
install:
	docker-compose exec node yarn install
dev:
	docker-compose exec node yarn dev
prod:
	docker-compose exec node yarn start
buildNest:
	docker-compose exec node yarn build
setup:
	make build
	make install
buildAdonis:
	docker-compose exec node yarn build
migrate:
	docker-compose exec node node ace migration:run

