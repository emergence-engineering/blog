FROM node:18-alpine
RUN apk add --update bash curl && rm -rf /var/cache/apk/*
WORKDIR /app

COPY /package*.json .
RUN npm ci

COPY . .
RUN npm run lint && npm run build && cp -a dist/. .


EXPOSE 3001
CMD ["./start.sh"]

HEALTHCHECK CMD curl -s -o /dev/null http://localhost:3001/version
