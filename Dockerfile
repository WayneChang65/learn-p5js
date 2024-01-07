FROM httpd:2.4
RUN apt-get update && apt-get install -y wget git
RUN git clone https://github.com/WayneChang65/learn-p5js.git && \
    cd learn-p5js && \
    cp *.* /usr/local/apache2/htdocs/ && \
    cp -r libraries /usr/local/apache2/htdocs