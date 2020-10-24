FROM ubuntu:18.04
RUN apt -y update && apt install -y npm && apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && apt -y install nodejs
COPY . /app
WORKDIR /app/frontend/my-app
RUN npm install
