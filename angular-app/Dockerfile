FROM node:16-alpine as builder
WORKDIR /app
RUN npm cache clean --force
COPY package.json .
RUN npm install
RUN npm i @angular/cli@15.1.6
COPY . /app
RUN npm run build

# Nginx
FROM nginx:1.21-alpine
# COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/angular-app /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]
EXPOSE 4200
