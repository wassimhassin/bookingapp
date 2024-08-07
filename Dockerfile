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

# Stage 2: Setup Backend with Built Frontend
FROM node:18.17.1

# Set the working directory to /Booking/api
WORKDIR /Booking/api

# Copy backend package.json and install dependencies
COPY ./api/package*.json ./
RUN npm install

# Copy backend files
COPY ./api ./

# Copy the built frontend files from the frontend stage
COPY --from=frontend /Booking/client/build ./public

# Expose the port that the app runs on
EXPOSE 3000

# Command to run the backend
CMD ["node", "index.js"]
