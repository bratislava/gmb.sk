# build
FROM node:16.10.0 AS build

RUN apt-get update && apt-get install git

WORKDIR /root/app
COPY package*.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . ./

RUN yarn build

# development
FROM node:16.10.0 AS dev

RUN apt-get update && apt-get install -y git \
    vim \
    libvips-dev

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /home/node/app
COPY package*.json ./

RUN yarn install
COPY . ./

RUN yarn build

EXPOSE 1337
CMD ["yarn", "develop"]


# production
FROM node:16.10.0-alpine AS prod

USER node

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
ARG NODE_ENV=production

COPY --chown=node:node --from=build /root/app/package*.json ./
COPY --chown=node:node --from=build /root/app/yarn.lock ./
COPY --chown=node:node --from=build /root/app/node_modules ./node_modules
# doing RUN npm prune --production, but in yarn
RUN yarn install --production --ignore-scripts --prefer-offline

COPY --chown=node:node --from=build /root/app/dist ./dist

EXPOSE 1337
CMD ["yarn", "start"]

