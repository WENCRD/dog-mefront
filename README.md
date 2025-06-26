# 🐶 DogAndMe - Frontend

Frontend de l’application **DogAndMe**, développée en **React + Vite + TypeScript**.  
Cette interface permet la navigation, la connexion admin, l’envoi de fichiers et l’affichage de contenus liés au service.

---

## 🚀 Stack technique

- ⚛️ React 19 (avec TSX)
- ⚡ Vite (build ultra-rapide)
- 🎨 Tailwind CSS
- 📦 Swiper (carrousels)
- 📂 Architecture modulaire : `components/`, `pages/`, `routes/`, `services/`, etc.
- 🔐 Authentification via token JWT
- 🌐 Communication avec un backend Express (voir `dogandme-back`)

---

## 📁 Arborescence

dog-mefront/
├── public/
├── src/
│ ├── assets/ # images, icônes, etc.
│ ├── components/ # composants UI réutilisables
│ ├── context/ # gestion du state global / auth context
│ ├── pages/ # pages comme Home, Login, Admin, etc.
│ ├── routes/ # routes protégées (ex: PrivateRoute)
│ ├── services/ # appels API, auth, etc.
│ ├── types/ # définitions TypeScript (ex: swiper)
│ └── App.tsx # point d’entrée principal
├── .env # non versionné
├── .env.example # variables d’environnement attendues
├── package.json
├── tsconfig.json
└── vite.config.ts

## ⚙️ Lancer le projet en local

### 1. Cloner le dépôt

```bash
git clone https://github.com/WENCRD/dog-mefront.git
cd dog-mefront

```bash
git clone https://github.com/WENCRD/dogandme-back.git
cd dogandme-back

### 2. Installer les dépendances

npm install

### 3.Créer un fichier .env
PORT=4000
JWT_SECRET=*****
ADMIN_EMAIL=********@********.fr
ADMIN_PASSWORD=************


### 4. Lancer le serveur

npm run dev

### 5. Authentification
 
Formulaire de connexion /login

Auth via token JWT stocké en localStorage

Routes protégées via PrivateRoute dans routes/



### 6.Carrousels / Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

### 7. Dépendances externes
npm install react-router-dom swiper axios

### Projet privé – tous droits réservés.
### LICENCE

