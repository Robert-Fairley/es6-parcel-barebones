# Alpine Linux Image
FROM alpine:3.7

# Install NodeJS
RUN apk update && apk add --update nodejs nodejs-npm

# Copy the application into the root app folder
COPY . . 

# Navigate to the app folder and install dependencies
RUN npm install -g parcel-bundler
RUN npm install

# Expose the development port
EXPOSE 1234

# Run the app
CMD ["npm", "start"]

