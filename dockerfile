FROM node

WORKDIR /srv/app

COPY package*.json ./

RUN npm i --quiet

COPY . .

CMD npm run start:dev