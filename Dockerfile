# Stage 1: Builder
FROM node:20-alpine AS builder

WORKDIR /usr/local/app

# Copy only package files for dependencies
COPY package*.json pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Copy only necessary application files
COPY src ./src
COPY tsconfig.json .

# Build the application
RUN pnpm build

# Stage 2: Runner
FROM gcr.io/distroless/nodejs20-debian12:nonroot AS runner

WORKDIR /usr/local/app

# Copy built files and node_modules from the builder stage
COPY --from=builder /usr/local/app/node_modules ./node_modules
COPY --from=builder /usr/local/app/dist ./dist

USER nonroot

EXPOSE 3000

# Add a health check
HEALTHCHECK CMD ["curl", "-f", "http://localhost:3000/health"]

CMD ["dist/main.js"]