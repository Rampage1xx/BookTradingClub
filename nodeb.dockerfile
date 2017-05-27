FROM node:latest

ENV PORT= 4000

RUN mkdir -p /var/www/config/

COPY ./ServerB/package.json  /var/www/

WORKDIR /var/www

RUN yarn global add pm2

RUN yarn install


EXPOSE $PORT
CMD ["pm2-dev","start","pm2.config.json"]
