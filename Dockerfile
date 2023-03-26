FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install tailwindcss postcss autoprefixer

RUN npx tailwindcss build 

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]