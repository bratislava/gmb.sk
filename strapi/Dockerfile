FROM node:16-alpine AS base

FROM base AS build-base
RUN apk update \
 && apk add --no-cache build-base \
                       gcc \
                       autoconf \
                       automake \
                       zlib-dev \
                       libpng-dev \
                       vips-dev
WORKDIR /build
COPY ./package.json ./yarn.lock ./
# Uncomment if you need any to apply any patches
COPY patches ./patches

FROM build-base AS install-prod
ENV YARN_CACHE_FOLDER=/build/.cache/yarn
RUN --mount=type=cache,target=/build/.cache/yarn \
    yarn config set network-timeout 600000 -g \
 && yarn install --production

FROM install-prod AS build
WORKDIR /build/app
COPY ./ .
RUN --mount=type=cache,target=/build/.cache/yarn \
    yarn install --development \
 && yarn build

FROM base AS app-base
RUN apk add --no-cache vips-dev \
                       tini
RUN mkdir -p /home/node/app \
 && chown node:node /home/node/app
USER node
WORKDIR /home/node/app
# Adds strapi cli to the PATH
ENV PATH=/home/node/app/node_modules/.bin:$PATH
ENV NODE_ENV=production
EXPOSE 1337
ARG GIT_COMMIT="undefined"
ENV GIT_COMMIT=$GIT_COMMIT
LABEL org.opencontainers.image.revision="${GIT_COMMIT}" \
      org.opencontainers.image.source="https://github.com/bratislava/gmb.sk" \
      org.opencontainers.image.licenses="EUPL-1.2"
ENTRYPOINT [ "/sbin/tini", "--" ]

FROM app-base AS dev
ENV NODE_ENV=development
COPY --chown=node:node --from=build /build/node_modules ./node_modules
CMD [ "yarn", "develop" ]

FROM app-base AS prod
COPY --chown=node:node --from=build /build/app/favicon.ico /build/package.json /build/yarn.lock /build/app/tsconfig.json ./
COPY --chown=node:node --from=install-prod /build/node_modules ./node_modules
COPY --chown=node:node --from=build /build/app/config ./config
COPY --chown=node:node --from=build /build/app/public ./public
COPY --chown=node:node --from=build /build/app/dist ./dist
COPY --chown=node:node --from=build /build/app/src/plugins/preview-button-i18n/ ./src/plugins/preview-button-i18n/
CMD [ "strapi", "start" ]
