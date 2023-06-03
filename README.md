# EnergyPilot Backend
Backend API for EnergyPilot mobile app. Includes 🔦 [eslint](https://eslint.org) for linting/code formatting, 🔛 [nodemon](https://github.com/remy/nodemon) for automatic server restarting, and ✅ [Jest](https://jestjs.io) for testing.

It is also 🐳 [dockerized](https://www.docker.com/) with with the API and a 🐬 [MySQL](https://www.mysql.com/) database.

![test workflow](https://github.com/imanolpg/energy_pilot_backend/actions/workflows/coverage.yml/badge.svg)
![GitHub top language](https://img.shields.io/github/languages/top/imanolpg/energy_pilot_backend)

![GitHub last commit](https://img.shields.io/github/last-commit/imanolpg/energy_pilot_backend)
![GitHub issues](https://img.shields.io/github/issues/imanolpg/energy_pilot_backend)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/imanolpg/energy_pilot_backend)

## Getting Started

### Install dependencies

```
npm install
```

### Environment variables
Env variables are loaded with [nconf](https://github.com/indexzero/nconf) with a cascade aproach.
Variables are loaded in the following order `Command-line arguments` ➡️ `Environment variables` ➡️ `Argument variables` ➡️ `path/to/config.json`.
Aditionally there is a section for default values if one variable is not present.
If one variable has been loaded previously and it appears in any next stage it will be overwritten with the last values.

In development, a `.env`🤫 file has been included in the project directory with the following variables set.

```
DB_HOST
DB_USER
DB_PASSWORD
DB_SCHEMA
DB_PORT
DB_ROOT_PASSWORD

JWT_SECRET_TOKEN

PUBLIC_SALT

SSL_KEY
SSL_CERT
```

### Running in development
The project will be automatically compiled ans served whenever a file is modified.
There is no need to manually build and start the server
```
npm run dev
```
Runs on `localhost:8000`

### Running in production

```
npm run build && npm run start
```
Runs on `localhost:8000`

### Running tests

```
npm test
```

## Docker 🐳

This repository contains a dockerized version of the API, orchestrated with Docker Compose.

### Prerequisites
Before running the application with Docker Compose, you must have the following tools installed on your machine:

* [Docker](https://docs.docker.com/get-docker/)
* [Docker Compose](https://docs.docker.com/compose/install/)

### Getting Started
To run the application with Docker Compose, simply run the following command in the root directory of the project:

```
docker-compose build --no-cache 
docker-compose up
```
This will build the application image and start the container.
You can then access the application by navigating to `https://localhost:8000`.
Ports `8000` and `3307` are exposed

### Configuration
The application can be configured by modifying the `docker-compose.yml` file in the root directory of the project.

### Dependencies and Volumes
This app requires a MySQL database and a [MySQL](https://hub.docker.com/_/mysql) image has been included from [Docker Hub](https://hub.docker.com/).
Port `3307` has been exposed and acces to the MySQL server is allowed.
The credentials can be configured in a `.env` file as explained before.

To make stored data in MySQL persistant, a volume has been created `dbdata:/var/lib/mysql`
