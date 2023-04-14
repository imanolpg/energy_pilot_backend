FROM node:19

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 8000

RUN npm run build

# this command is not needed because it is launched when
# database service is created and port is available
# CMD ["npm", "run", "start"]