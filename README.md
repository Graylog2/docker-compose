# Graylog Docker Compose files

## Introduction

This is a set of [Docker Compose](https://docs.docker.com/compose/) files that allow you to quickly spin up a [Graylog](https://docs.graylog.org/en/4.1/index.html) instance for testing or demo purposes.


## Configure Graylog

All the [Graylog configurations](http://docs.graylog.org/en/4.0/pages/configuration/server.conf.html) can be set via environment variables. Just prefix the parameter name with `GRAYLOG_` and put it in upper case.

There is an environment file (`.env.example`) where you can store these environment variables. Rename this to `.env` so docker-compose will pick it up.

      cp .env.example .env


**Important:** Be sure to to set the `GRAYLOG_PASSWORD_SECRET` and `GRAYLOG_ROOT_PASSWORD_SHA2` environment variables in the .env file! Graylog won't start without these.

## Starting Graylog

After you've configured your password secret and password sha, run these commands to start the instance:

    docker-compose up

To start it daemonized, run:

    docker-compose up -d

It's as simple as that!
