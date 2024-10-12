# Stage 1: Build the front-end React app
FROM node:18 AS build
WORKDIR /app
COPY client ./client
WORKDIR /app/client
RUN npm install
RUN npm run build

# Stage 2: Set up the back-end Express server with built React frontend
FROM node:18
WORKDIR /app
COPY server ./server
COPY --from=build /app/client/build ./server/public

WORKDIR /app/server
RUN npm install

# Set the environment variables for production
ENV NODE_ENV=production
ENV PORT=8080

# Expose the port that Cloud Run will use
EXPOSE 8080

# Start the server
CMD ["node", "server.js"]
