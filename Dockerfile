# Use Node.js for building
FROM node:18-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . . 

ARG REACT_APP_VERSION=v1
ENV REACT_APP_VERSION=${REACT_APP_VERSION}
ENV NODE_OPTIONS="--max-old-space-size=2048"

RUN npm run build

# Use stable Nginx for serving the app
FROM nginx:stable-alpine

# Copy built files
COPY --from=build /app/build /usr/share/nginx/html

# Set permissions
RUN chmod -R 755 /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
