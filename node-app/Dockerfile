FROM node:16-alpine
WORKDIR /usr/src/app
COPY ../node-app/package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]