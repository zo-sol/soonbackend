FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스 코드 복사
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]