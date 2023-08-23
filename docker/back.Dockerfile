FROM node:16-alpine

RUN mkdir -p /app
WORKDIR /app

COPY ../server .

RUN npm ci

RUN npm run build

ENV NODE_EMV production
EXPOSE 3000
CMD ["npm", "run", "start:prod"]

