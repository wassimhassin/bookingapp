# Stage 1: Build React App
FROM node:18.17.1 AS frontend

# Set the working directory to /app
WORKDIR /Booking/client

# Copy the frontend package.json and install dependencies
COPY ./client/package*.json ./
RUN npm install

# Copy the rest of the frontend code and build the app
COPY ./client ./
RUN npm run build

# Stage 2: Setup Backend and Frontend with pm2
FROM node:18.17.1

# Set the working directory to /Booking/api
WORKDIR /Booking/api

# Install pm2 globally
RUN npm install -g pm2

# Copy backend package.json and install dependencies
COPY ./api/package*.json ./
RUN npm install

# Copy backend files
COPY ./api ./

# Copy the built frontend files from the frontend stage
COPY --from=frontend /Booking/client/build ./public

# Expose the ports for both frontend (3000) and backend (8000)
EXPOSE 3000

# Copy the pm2 ecosystem configuration file
COPY ecosystem.config.js ./

# Command to start both frontend and backend using pm2
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
