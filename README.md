# Adel Campaign Landing Page

Single-page Arabic RTL campaign landing page for عادل قراش, built with Next.js and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run start
```

## Docker Deployment

Build and run with Docker Compose:

```bash
docker compose up --build -d
```

Open `http://localhost` for local Docker testing, or `http://guerrache.online` on the VPS.

Stop the container:

```bash
docker compose down
```

## VPS Deployment With Nginx And HTTPS

This setup runs the Next.js app internally on Docker port `3000`, then exposes Nginx on public ports `80` and `443`.

Domain:

```text
guerrache.online
```

Start HTTP first:

```bash
docker compose up --build -d adel-campaign nginx
```

Verify HTTP:

```bash
curl -I http://guerrache.online
```

Issue the first Let's Encrypt certificate:

```bash
docker compose run --rm certbot certonly \
  --webroot \
  --webroot-path /var/www/certbot \
  --email adel.guerrache96@gmail.com \
  --agree-tos \
  --no-eff-email \
  -d guerrache.online \
  -d www.guerrache.online
```

Enable HTTPS after the certificate is created:

```bash
chmod +x scripts/enable-https.sh
./scripts/enable-https.sh
```

Verify HTTPS:

```bash
curl -I https://guerrache.online
```

Set automatic certificate renewal on the VPS with cron:

```bash
chmod +x scripts/renew-certificates.sh scripts/enable-https.sh
crontab -e
```

Add this line:

```cron
0 3 * * * cd /path/to/adel && ./scripts/renew-certificates.sh >> /var/log/adel-certbot-renew.log 2>&1
```

Replace `/path/to/adel` with the real deployment directory on the VPS.

## Notes

- Candidate photo is served from `public/adel.jpg`.
- The app uses Next.js standalone output for smaller production Docker images.
- Main content is Arabic-first and RTL. Content data is centralized in `components/content.ts` to make future French support easier.
