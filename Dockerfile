FROM node:4.0.0

RUN apt-get update -y
RUN npm install statsd

WORKDIR /node_modules/statsd

ADD ./config.js /node_modules/statsd/

CMD ["node","./stats.js","./config.js"]

