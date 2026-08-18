FROM node:18-alpine

WORKDIR /usr/src/app

# Install dependencies first (use package.json)
COPY package.json package-lock.json* ./
RUN npm install --production --no-audit --no-fund

# Copy app sources
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
