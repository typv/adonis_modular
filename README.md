# Adonis modular

# Getting Started

## Server Requirements

- Node.js 20.12.1
- PostgreSQL 14

## Installing preparation

1. Default Application $BASEPATH : `/home/app.user/adonis_modular`

2. Copy the .env file from .env.example under $BASEPATH, fill your config in .env file instead of example config

# II. Build with Docker

## 1. Prerequisite

### 1.1 Add environment variables
In the root folder, find the .env file and change the following values

```bash
  APP_ENVIRONMENT=local
  APP_PORT=3334
  
  DB_CONNECTION=postgres
  DB_HOST=172.21.0.3
  DB_PORT=5432
  DB_USERNAME=postgres
  DB_PASSWORD=[your_password]
  DB_DATABASE=[your_database]
```

### 1.2 Load all sub-modules

```
git submodule update --init --recursive
```

## 2. Setup docker

```bash
  make setup
```

```bash
  make dev
```

## 3. Other

migration:
```
make migrate
```
