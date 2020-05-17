FROM nginx:stable-alpine
RUN sed -i '/index.html/c\try_files $uri $uri/ /index.html;' /etc/nginx/conf.d/default.conf
COPY dist /usr/share/nginx/html