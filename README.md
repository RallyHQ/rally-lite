# Rally Lite

Rally Lite is a mini version of the real Rally! We're going to use this project to go through a coding exercise to simulate what day to day feature development at Rally would look like

## Getting Started

### Required Software

Before getting started, you'll want to make sure you have the following software installed on your computer:

- Node >= 14
- Docker
  - We use docker to run Postgres for this app
  - You can follow Docker's installation guide [here](https://docs.docker.com/get-docker/)
  - Instead of installing docker, you can also point Rally Lite to a local postgres DB using the .env file
- An IDE or Text Editor. We'd strongly recommend VS Code for this exercise.

### Setting up

Once node and Docker have been installed, you can clone down this repo to open the folder in your IDE.

First, create an `.env` file in the root directory of the project. Then, if you're planning to use docker, copy the contents from the `.env.sample` into the `.env` file.

Next to set up the dev environement, you'll want to run the following commands from the root directory of the project:

```console
  yarn install
  yarn db:up        # kicks off postgres in a docker container
  yarn prisma:seed  # seeds the DB with initial data
  yarn dev          # kicks off the server on port 3000
```

After running `yarn dev`, you should be able to go to `http://localhost:3000` to see Rally Lite running.

That's all for now!