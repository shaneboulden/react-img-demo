FROM registry.redhat.io/ubi8

COPY dist/ /var/www/html/

RUN yum update --disableplugin=subscription-manager -y && rm -rf /var/cache/yum
RUN yum install --disableplugin=subscription-manager httpd -y && rm -rf /var/cache/yum

RUN sed -i 's/Listen 80/Listen 8080/' /etc/httpd/conf/httpd.conf \
  && chgrp -R 0 /var/log/httpd /var/run/httpd \
  && chmod -R g=u /var/log/httpd /var/run/httpd

EXPOSE 8080
USER 1001
CMD ["-D","FOREGROUND"]
ENTRYPOINT ["/usr/sbin/httpd"]
