# Use an official Node.js image
FROM node:latest

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Add environment variables
ENV PORT=5000
ENV MongoDB_URI=mongodb://mongo:27017/mean-docker
ENV USER=user@gmail.com
ENV PASSWORD=123
ENV RES=res@gmail.com
ENV EMAIL=email@gmail.com
ENV SECRET=secret
ENV RESET_SECRET=reset

# Expose the application port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
