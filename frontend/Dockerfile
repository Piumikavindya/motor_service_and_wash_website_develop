# Set the base image to create the image for React app
FROM node:20.5.1

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the files to the working directory
COPY . .

# Expose port 3000 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
