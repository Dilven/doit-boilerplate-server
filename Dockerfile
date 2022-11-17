FROM node:16 as base

RUN apt-get install -y openssl

WORKDIR /app

COPY package*.json ./

RUN npm install --frozen-lockfile

COPY . .

EXPOSE 3000

RUN npm run build

CMD [ "npm", "start" ]
