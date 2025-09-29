# Studio VBG – Front & Backend

Ce dépôt regroupe :
- **`web/`** : application front-end Vite + React (design Solstice/Nebula, formulaires avancés, routage complet).
- **`backend/`** : API NestJS + PostgreSQL + Prisma + Redis couvrant authentification JWT/refresh, gestion des dossiers, chat temps réel et portfolio headless.

## Prérequis généraux
- Node.js 18+
- npm 9+
- Docker (optionnel mais recommandé pour lancer l’API + PostgreSQL + Redis)

---
## Front-end (`web/`)

### Installation
```bash
cd web
npm install
```

### Développement local
```bash
npm run dev
```
Visitez <http://localhost:5173>. React Router couvre toutes les routes (`/`, `/portfolio`, `/services`, `/services/...`, `/a-propos`, `/blog`, `/contact`, `/connexion`, `/espace-client`, pages légales).

### Build & preview
```bash
npm run build
npm run preview
```
Le dossier `web/dist` contient le rendu statique prêt à déployer.

### Déploiement
- **Netlify** : voir [`netlify.toml`](netlify.toml) (base `web/`, build `npm install && npm run build`, publish `web/dist`, rewrite SPA).
- **Vercel** : voir [`vercel.json`](vercel.json) (install/build `cd web && ...`, output `web/dist`, rewrite `/* -> /index.html`).

Les assets vidéo doivent respecter ≤ 1,5 MB pour les hero (`web/public/assets/README.txt`).

---
## Backend (`backend/`)

### Installation
```bash
cd backend
npm install
```

### Variables d’environnement
Copiez `.env.example` vers `.env` et ajustez :
- `DATABASE_URL` (PostgreSQL)
- `REDIS_URL`
- `JWT_ACCESS_SECRET`, `JWT_REFRESH_SECRET`
- `SWAGGER_USER` / `SWAGGER_PASSWORD`

### Lancement via Docker
```bash
cd backend
docker-compose up --build
```
Expose l’API sur `http://localhost:4000`, PostgreSQL `5432`, Redis `6379`.

### Lancement en local (sans Docker)
```bash
npm run prisma:generate
npm run prisma:migrate
npm run start:dev
```
Swagger est disponible sur `/docs` (auth basique via variables d’environnement). L’API applique Helmet, CORS, logging Pino, exception filter global, guards JWT + RBAC.

### Seed
```bash
npm run prisma:generate
npx prisma db push
npx ts-node prisma/seed.ts
```
Crée un compte admin (`admin@studiovbg.test` / `ChangeMe42!`) et deux entrées portfolio.

### Tests
```bash
npm test        # unitaires (ex. ProgressService)
npm run test:e2e # e2e (Supertest sur /portfolio-items)
```

### Architecture
- `auth/` : JWT 15 min + refresh 7 jours (rotation + hash en base). Routes : register (admin), login, refresh, logout, me.
- `users/` : consultation/mise à jour profil authentifié.
- `dossiers/` : création, listing, messages, milestones (progression pondérée). Chat Gateway (Socket.io + Redis adapter) émet `new_message`, `mark_read`, `progression.updated`, `milestone.completed`.
- `admin/` : `/admin/dossiers`, `/admin/dossiers/:id/status`, CRUD portfolio, `/admin/stats` (RBAC admin).
- `portfolio/` : endpoints publics avec cache Redis TTL 60 s.
- `progress/` : service centralisant les émissions d’événements temps réel.
- `common/` : guards, interceptors, filters, décorateurs (`@Roles`, `@GetUser`), Prisma module/service.

Prisma (`prisma/schema.prisma`) définit `User`, `Dossier`, `Milestone`, `Message`, `PortfolioItem`, `RefreshToken` + enums. Dockerfile multi-stage + `docker-compose.yml` orchestrent API + Postgres + Redis.

---
## Scripts utiles
- `npm run lint` (backend) : ESLint + Prettier.
- `npm run build` (backend) : compilation Nest.
- `npm run prisma:migrate` : migration locale.
- `npm run prisma:deploy` : migration en production.

---
## Notes de conformité
- Anti-doublons éditoriaux : tarifs seulement dans `/services`, FAQ budget uniquement sur `/blog`, témoignages complets accueil/à-propos.
- Accessibilité : focus visibles, sous-titres `.srt`, contrastes AA.
- SEO : Titles < 60 caractères, metas < 155, FAQ/Video/Product JSON-LD prêts à intégrer.
- Formulaire contact/devis : logique multi-étapes, consentement RGPD obligatoire, résumé avant envoi.
- Backend : JWT + refresh rotation, logging structuré, Swagger, healthcheck (`/docs` + endpoints), Socket.io + Redis.
