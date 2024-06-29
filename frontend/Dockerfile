# Set the base image to create the image for React app
FROM node:20.5.1

# Create a user with permissions to run the app
RUN addgroup -S app && adduser -S -G app app

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Change the ownership of the /app directory to the app user
RUN chown -R app:app /app

# Set the user to run the app
USER app

# Expose port 3000 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 3000

# Command to run the app
CMD ["npm", "start"]
