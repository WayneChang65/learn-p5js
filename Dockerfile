FROM httpd:2.4
RUN apt-get update && apt-get install -y wget git
COPY ./learn-p5js/ /usr/local/apache2/htdocs/