# Use an official Node.js image
FROM node:20.5.1

# Install nodemon globally
RUN npm install -g nodemon

# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .
# Expose the application port
EXPOSE 5555
# Start the application
CMD ["npm","start"]