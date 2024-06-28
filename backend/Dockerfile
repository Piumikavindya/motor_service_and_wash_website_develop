# Dockerfile for the API service
FROM node:20-alpine

RUN npm install -g nodemon

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5555

CMD ["npm","run" ,"start"]