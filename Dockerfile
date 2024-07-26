FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM coolify/node-static

COPY --from=build /app/dist /app

EXPOSE 3000

CMD ["npx", "serve", "-s", "/app", "-l", "3000"]