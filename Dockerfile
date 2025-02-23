FROM node:19.4-bullseye

WORKDIR /usr/src/app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies (including dev dependencies so Vite is available)
RUN npm install 

# Copy the rest of the files
COPY . .

# Expose Vite's default port
EXPOSE 3000

ENV HOST=0.0.0.0
# Start Vite using npx to ensure it's found
CMD ["npx", "vite", "dev", "--host", "0.0.0.0"]

