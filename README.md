# city-gallery

Simple Strapi v4 + Next.js template

## How to run locally

Start database with `docker-compose`

```bash
docker-compose up postgres
```

Go to `/strapi` folder and run

```bash
yarn
yarn dev
```

Go to `/next` folder and run

```bash
yarn
yarn dev
```

Follow readme files in folders `/strapi` and `/next`.

### Quick run

Just for testing purposes to check if everything works together, you can run all services without installing it locally quickly through `docker-compose`:

```bash
docker-compose up
```

## Deployment

### Manual

You can use our `bratiska-cli`, which takes care of deploying the app.

1. First, install the utility:

   ```bash
   yarn global add bratislava/bratiska-cli
   ```

2. then go to folder of `/strapi` or `/next` and run just this command:
   ```bash
   bartiska-cli deploy
   ```

That`s all, everything should run automatically and if not you will be notified. You can also check [user guide of bratiska-cli](https://github.com/bratislava/bratiska-cli/blob/master/README.md).

### Pipelines

TODO

## Stay in touch

- Website - [https://inovacie.bratislava.sk/](https://inovacie.bratislava.sk/)
