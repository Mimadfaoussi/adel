#!/bin/sh
set -eu

cd "$(dirname "$0")/.."

if [ ! -f certbot/conf/live/guerrache.online/fullchain.pem ]; then
  echo "Certificate not found at certbot/conf/live/guerrache.online/fullchain.pem"
  echo "Run the certbot certonly command first."
  exit 1
fi

if [ -f nginx/conf.d/guerrache.online.conf ]; then
  mv nginx/conf.d/guerrache.online.conf nginx/conf.d/guerrache.online.http.conf
fi

cp nginx/conf.d/guerrache.online.ssl.conf.template nginx/conf.d/guerrache.online.conf

docker compose exec nginx nginx -t
docker compose exec nginx nginx -s reload
