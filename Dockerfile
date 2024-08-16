# Stage 1: Build React App
FROM node:18.17.1 AS frontend

# Set the working directory to /Booking/client
WORKDIR /Booking/client

# Copy the frontend package.json and install dependencies
COPY ./client/package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY ./client ./

# Build the React app
RUN npm run build

# Stage 2: Setup Backend and Serve Frontend
FROM node:18.17.1

# Set the working directory to /Booking/api
WORKDIR /Booking/api

# Copy backend package.json and install dependencies
COPY ./api/package*.json ./
RUN npm install

# Copy backend files
COPY ./api ./

# Copy the built frontend files from the frontend stage
COPY --from=frontend /Booking/client/build ./client/build

# Expose the ports for both frontend (3000) and backend (8000)
EXPOSE 3000
EXPOSE 8000

# Install concurrently globally to run both frontend and backend
RUN npm install -g concurrently

# Command to run both frontend and backend concurrently
CMD ["concurrently", "\"npm start /Booking/client\"", "\"npm start /Booking/api\""]