FROM node:10-alpine
ARG appPath=/home/node/app
RUN mkdir -p $appPath && chown -R node:node $appPath
WORKDIR $appPath
COPY package*.json ./
RUN npm install
COPY . .
USER node
ENV PORT=3001
EXPOSE $PORT
CMD ["node", "index.js"]

