FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8000

RUN npm run build

CMD ["npm", "run", "start"]