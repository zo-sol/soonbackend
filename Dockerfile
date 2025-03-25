FROM node:20-alpine

WORKDIR /app

RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    cairo-dev \
    pango-dev \
    build-base \
    pkgconfig

COPY package*.json ./

ENV PYTHON=/usr/bin/python3

RUN npm install --include=dev

RUN npm install -g ts-node


COPY . .

RUN npm run build
RUN npm run start