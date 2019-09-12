FROM node:10.16.3

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN npm install

EXPOSE 3000

CMD npm start