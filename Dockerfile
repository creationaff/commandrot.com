# Use Node 20 Alpine
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --no-audit --no-fund

# Copy source
COPY . .

# Build static export
RUN npm run build

# Install a static file server
RUN npm i -g serve@14.2.1

# Render will provide PORT
ENV PORT=3000
EXPOSE 3000

# Serve the prebuilt static site from out/
CMD ["serve","-s","out","-l","$PORT"]
