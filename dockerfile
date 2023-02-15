FROM node

WORKDIR /srv/app

COPY package*.json ./

RUN npm i --quiet

COPY . .

CMD node /node_modules/@nestjs/bin/nest.js start