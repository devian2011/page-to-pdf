FROM node:lts-alpine3.14
MAINTAINER Ilya Romanov <romanov.i.u@yandex.ru>

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 8080

CMD ["npm start"]
