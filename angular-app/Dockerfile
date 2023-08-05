FROM node:16-alpine AS build
WORKDIR /usr/app

COPY ./package*.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
WORKDIR /usr/app
COPY --from=build /usr/app/dist/project/ /usr/share/nginx/html/
COPY ./nginx/angular.conf /etc/nginx/conf.d/default.conf
