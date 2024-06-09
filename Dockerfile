FROM ubuntu:latest

RUN apt update && apt-get upgrade -y

RUN apt install -y nodejs npm apache2 mariadb-server

# Copy project files to the container
COPY . /var/www/html/

# Set working directory
WORKDIR /var/www/html/

# Install project dependencies
RUN npm install

# Build the project
RUN npm run build

# Move the build output to the Apache web directory (adjust 'build' to your actual build directory)
RUN mv /var/www/html/dist/* /var/www/html/

RUN npm run preview > /dev/null 2>&1 &

WORKDIR /var/www/html/BACKEND/

RUN npm install

RUN node index.js > /dev/null 2>&1 &

RUN npm run preview > /dev/null 2>&1 &

EXPOSE 5173
EXPOSE 5174

