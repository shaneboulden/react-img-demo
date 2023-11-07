FROM registry.access.redhat.com/ubi9-minimal:9.2-750.1697625013
COPY build/ /var/www/html/

RUN microdnf update --disableplugin=subscription-manager -y \ 
    && microdnf install --disableplugin=subscription-manager httpd -y \
    && rm -rf /var/cache/yum/*

COPY conf/httpd.conf /etc/httpd/conf/httpd.conf

RUN chgrp -R 0 /var/log/httpd /var/run/httpd /etc/httpd /var/www/html \
  && chmod -R g=u /var/log/httpd /var/run/httpd /etc/httpd /var/www/html 

EXPOSE 8080
USER 1001
CMD ["-D","FOREGROUND"]
ENTRYPOINT ["/usr/sbin/httpd"]
