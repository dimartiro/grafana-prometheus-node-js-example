FROM node:20.2.0-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENTRYPOINT ["node"]

