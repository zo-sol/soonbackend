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
ENV PORT=8080

RUN npm install --include=dev

COPY . .

RUN npm run build

EXPOSE 8080

# start.sh 스크립트 생성
RUN echo '#!/bin/sh' > /start.sh && \
    echo 'cd /app' >> /start.sh && \
    echo 'exec node dist/app.js' >> /start.sh && \
    chmod +x /start.sh

# 스크립트를 ENTRYPOINT로 실행
ENTRYPOINT ["/start.sh"]