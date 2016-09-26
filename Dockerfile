FROM node:6.6

WORKDIR /app

ADD package.json elm-package.json ./
RUN npm install --production

ADD . ./

RUN npm run plastiq-compile && npm run elm-compile

CMD ["npm", "run", "start"]
