FROM node:latest

WORKDIR /usr/app

COPY package*.json ./

RUN NODE_ENV=development npm install

COPY . .

CMD ['npm', 'run', 'server']