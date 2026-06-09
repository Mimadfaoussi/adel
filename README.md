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

Open `http://localhost:3000`.

To use another host port:

```bash
APP_PORT=8080 docker compose up --build -d
```

Open `http://localhost:8080`.

Stop the container:

```bash
docker compose down
```

## Notes

- Candidate photo is served from `public/adel.jpg`.
- The app uses Next.js standalone output for smaller production Docker images.
- Main content is Arabic-first and RTL. Content data is centralized in `components/content.ts` to make future French support easier.
