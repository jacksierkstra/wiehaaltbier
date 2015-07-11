FROM ubuntu:14.04
RUN apt-get update
RUN apt-get install nodejs-legacy git -y
RUN apt-get install npm -y
RUN npm install gulp -g
RUN npm install bower -g
RUN mkdir /var/www

RUN git clone https://github.com/jacksierkstra/wiehaaltbier.git /var/www/wiehaaltbier

WORKDIR /var/www/wiehaaltbier

RUN npm install
RUN bower install --allow-root

CMD ["gulp", "serve"]

EXPOSE 8888
