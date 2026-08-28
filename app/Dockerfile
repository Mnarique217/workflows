FROM node:24-alpine AS builder

WORKDIR /usr/src/app

# Install only production dependencies in builder
COPY package.json package-lock.json* ./
RUN npm ci --only=production --no-audit --no-fund

# Copy source files
COPY src ./src

FROM node:24-alpine

WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy production node_modules and source from builder
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/src ./src
COPY package.json ./

EXPOSE 3000

CMD ["node", "src/server.js"]
