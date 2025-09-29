# Studio VBG – Site vitrine

Ce dépôt contient le contenu éditorial et le site vitrine du studio vidéo Studio VBG. Le dossier `web/`
regroupe l'application front-end basée sur Vite + React qui expose les pages statiques demandées.

## Prérequis
- Node.js 18+
- npm 9+

## Installation
```bash
cd web
npm install
```

## Développement local
```bash
npm run dev
```
Le serveur de développement Vite est accessible sur <http://localhost:5173>. Toutes les routes sont gérées
côté client via React Router (`/`, `/portfolio`, `/services`, `/a-propos`, `/blog`, `/contact`, `/connexion`,
`/espace-client`, et les pages légales).

## Build de production
```bash
npm run build
```
Le build génère les fichiers statiques dans `web/dist`.

Pour vérifier le rendu du build :
```bash
npm run preview
```

## Déploiement sur Netlify
Le fichier [`netlify.toml`](netlify.toml) configure Netlify pour construire et publier le site.
- Dossier de base : `web/`
- Commande : `npm install && npm run build`
- Dossier publié : `web/dist`

Sur Netlify, configurez un site en pointant vers ce dépôt. Netlify exécutera automatiquement la commande de
build puis servira le contenu statique depuis `web/dist`. La règle de redirection `/* -> /index.html` garantit que
les routes gérées côté client (ex. `/portfolio` ou `/a-propos`) restent accessibles même lors d'un rafraîchissement
de page.

## Déploiement sur Vercel
Pour les déploiements Vercel, le fichier [`vercel.json`](vercel.json) indique les commandes à exécuter et le
dossier de sortie à publier.

- `installCommand` : `cd web && npm install`
- `buildCommand` : `cd web && npm run build`
- `outputDirectory` : `web/dist`

La section `rewrites` assure que toutes les requêtes HTTP sont renvoyées vers `index.html`, évitant les erreurs 404
sur les routes internes de l'application React Router.

## Structure du contenu
Le fichier [`content/site_content.md`](content/site_content.md) centralise toutes les copies injectées dans
les pages. Les règles anti-doublon ont été respectées :
- Tarifs et packs détaillés uniquement dans `/services`.
- FAQ budgétaire uniquement dans `/blog`.
- Processus adapté à chaque page (version courte ou détaillée selon le contexte).
- Témoignages complets sur l'accueil et la page À propos.

Les assets globaux (logo, styles, scripts) sont stockés dans `web/public` et `web/src`.
