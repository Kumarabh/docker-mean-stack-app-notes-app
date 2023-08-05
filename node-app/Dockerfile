FROM node:16-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN echo helllloooooooo
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]