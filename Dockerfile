FROM node:16-alpine as build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN yarn install --frozen-lockfile
COPY . .

RUN yarn run build

FROM nginx:stable-alpine

RUN apk --no-cache add curl
RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin
COPY nginx/nginx.conf /etc/nginx/nginx.template

CMD ["/bin/sh", "-c", "envsubst '$PORT' < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]

COPY --from=build /app/build /usr/share/nginx/html
