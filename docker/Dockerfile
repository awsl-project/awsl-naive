FROM nginx:alpine

RUN mkdir /app
COPY ./dist /app/dist
COPY ./docker/conf.d /etc/nginx/conf.d

EXPOSE 80 443
