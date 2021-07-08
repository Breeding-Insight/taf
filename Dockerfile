FROM node:lts-alpine3.13
COPY . /taf
WORKDIR /taf
COPY package*.json /taf/
RUN npm install
COPY . .
ENTRYPOINT ["npm","run","test:debug"]
