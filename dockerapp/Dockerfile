FROM --platform=linux/amd64 node:21-alpine

USER root
WORKDIR /react-docker/

COPY public/ ./public
COPY src/ ./src
COPY package.json .

RUN npm install

EXPOSE 3000/tcp
CMD ["npm", "start"]
