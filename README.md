# Graylog Docker Compose files

## Introduction

This is a set of [Docker Compose](https://docs.docker.com/compose/) files that allow you to quickly spin up a [Graylog](https://docs.graylog.org/) instance for testing or demo purposes.

## Prerequisites
- [Docker](https://docs.docker.com/engine/install/)
- [Docker-Compose](https://docs.docker.com/compose/install/)

## Configure Graylog

All the [Graylog configurations](https://docs.graylog.org/docs/server-conf) can be set via environment variables. Just prefix the parameter name with `GRAYLOG_` and put it in upper case.

There is an environment file (`.env.example`) where you can store these environment variables. Rename this to `.env` so docker-compose will pick it up.

      cp .env.example .env


**Important:** Be sure to to set the `GRAYLOG_PASSWORD_SECRET` and `GRAYLOG_ROOT_PASSWORD_SHA2` environment variables in the .env file! Graylog won't start without these.

## Starting Graylog

After you've configured `GRAYLOG_PASSWORD_SECRET` and `GRAYLOG_ROOT_PASSWORD_SHA2`, run these commands to start the instance:

    docker-compose up

To start it daemonized, run:

    docker-compose up -d

It's as simple as that!

## License

Graylog itself is licensed under the Server Side Public License (SSPL), see [license information](https://www.mongodb.com/licensing/server-side-public-license).

This Docker image is licensed under the Apache 2.0 license, see [LICENSE](LICENSE).
