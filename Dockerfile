#######################################################
FROM node:16.0.0-slim AS frontend-builder
RUN apt-get update
RUN apt-get install -y --no-install-recommends build-essential gcc make

WORKDIR /code

# Create layer to install npm dependencies
COPY package.json .
RUN npm install

# Create layer to build assets from source
COPY public ./public
COPY src ./src
RUN npm run build

# #####################################
FROM node:alpine AS release  

WORKDIR /code

COPY --from=frontend-builder /code/build .

RUN apk --update add \
        nginx \
        bash; \
    chmod -R 755 /var/lib/nginx;

COPY /nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 9000
CMD ["nginx", "-g", "daemon off;"]

