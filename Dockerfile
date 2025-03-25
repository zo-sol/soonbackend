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

# package.json과 package-lock.json 복사
COPY package*.json ./

# node-gyp가 python3를 찾을 수 있도록 환경변수 설정
ENV PYTHON=/usr/bin/python3

# 환경 변수 설정
ENV PORT=8080
ENV NODE_ENV=production

# 모든 의존성 설치 (개발 의존성 포함)
RUN npm install --include=dev

# 소스 코드 복사
COPY . .

# TypeScript 빌드
RUN npx tsc

# 개발 의존성 제거
RUN npm prune --production

# 포트 설정
EXPOSE 8080

# 애플리케이션 실행
CMD ["node", "dist/app.js"]