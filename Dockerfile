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

COPY . .

ENV PYTHON=/usr/bin/python3
ENV PORT=8080

RUN npm install
RUN npm run build

EXPOSE 8080

CMD ["node", "dist/app.js"]