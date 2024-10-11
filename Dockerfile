# Stage 1: Build the front-end React app
FROM node:18 AS build-frontend
WORKDIR /app/client
COPY client/package*.json ./
RUN npm install
COPY client/ .
RUN npm run build

# Stage 2: Set up the back-end Express server
FROM node:18 AS build-backend
WORKDIR /app/server
COPY server/package*.json ./
RUN npm install
COPY server/ .

# Stage 3: Combine both front-end and back-end
FROM node:18
WORKDIR /app

# Copy the built front-end files to the server folder
COPY --from=build-frontend /app/client/build ./client/build
# Copy the back-end server files
COPY --from=build-backend /app/server ./

# Install a process manager for Node.js
RUN npm install -g pm2

# Expose the port for the backend server
EXPOSE 4000

# Set environment variables (optional)
ENV NODE_ENV=production

# Start the server using PM2
CMD ["pm2-runtime", "index.js"]
