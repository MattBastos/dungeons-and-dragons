
# Dungeons And Dragons

For this project, I applied the principles of the `SOLID` architecture and the principles of `POO` in a structure of role-playing games, better known as `RPG` games (_Role Playing Game_).


## Stacks and Tools

- Node
- TypeScript
- Docker
- VsCode
- Git & Github
- Linux - Ubuntu
## Running Locally

Clone the project:

```bash
  git clone git@github.com:MattBastos/dungeons-and-dragons.git
```

Enter the project directory:

```bash
  cd dungeons-and-dragons
```

## Using Docker

Run the node service with the command:

```bash
  docker-compose up -d
```

This service will initialize a container called trybers_and_dragons.

From here you can run the trybers_and_dragons container via CLI or open it in VS Code.

Use the command:

```bash
  docker exec -it trybers_and_dragons bash
```

It will give you access to the interactive terminal of the container created by compose, which is running in the background.

Install dependencies:

```bash
  npm install
```

If you don't want to use docker, just install the dependencies with **npm install**.

Start the Project:

```bash
  npm start
```
## Autores

- [@MattBastos](https://www.github.com/MattBastos)


## Referência

 - [Trybe](https://www.betrybe.com/)
