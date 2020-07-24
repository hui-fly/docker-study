# Dockerfile
# FROM nginx
# COPY index.html /usr/share/nginx/html/index.html
# EXPOSE 80
FROM nginx

COPY ./dist/ /usr/share/nginx/html/

EXPOSE 80
