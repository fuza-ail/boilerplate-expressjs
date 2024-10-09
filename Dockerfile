# Use an official Node runtime as the base image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy TypeScript configuration and source code
COPY tsconfig.json ./
COPY src ./src

# Install TypeScript globally
RUN npm install -g typescript

# Install app
RUN npm i

# Build the application
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Expose the port the app runs on
EXPOSE 3000

# Run the application
CMD ["node", "dist/app.js"]