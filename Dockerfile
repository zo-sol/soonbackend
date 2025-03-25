# Node.js 기반 이미지 사용
FROM node:20-alpine

# 작업 디렉토리 설정
WORKDIR /app

# canvas 패키지를 위한 빌드 의존성 설치
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

# 모든 의존성 설치 (개발 의존성 포함)
RUN npm install --include=dev

# ts-node 설치
RUN npm install -g ts-node

# 소스 코드와 환경 변수 파일 복사
COPY . .

# 포트 설정
EXPOSE 8080

# TypeScript 파일 직접 실행
CMD ["ts-node", "src/app.ts"]