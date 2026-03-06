# 🎨 Portfolio — Marion Calpena

Portfolio personnel développé avec **Angular 21** (standalone components), présentant mes projets, compétences et expériences en tant que développeuse Front-end & Designer UX/UI.

---

## 🚀 Stack technique

- **Framework** : Angular 19 (standalone components, nouvelle syntaxe `@if` / `@for`)
- **Langage** : TypeScript
- **Style** : SCSS
- **Icônes** : [Boxicons](https://boxicons.com/)
- **Typographie** : Pacifico (Google Fonts)

---

## 📁 Structure du projet

```
portfolio/
├── public/                         # Assets statiques (images, GIFs, favicon)
│   ├── favicon.ico
│   ├── background2.png
│   ├── classroom.png
│   ├── monify.png
│   ├── IMG_20230617_202924.jpg
│   └── ...
├── src/
│   ├── app/
│   │   ├── modal/                  # Composant modal réutilisable
│   │   │   ├── modal.component.ts
│   │   │   ├── modal.component.html
│   │   │   └── modal.component.scss
│   │   ├── app.ts                  # Composant racine
│   │   ├── app.html                # Template principal
│   │   ├── app.scss                # Styles du composant
│   │   ├── app.config.ts           # Configuration de l'application
│   │   └── app.routes.ts           # Routing
│   ├── index.html
│   ├── main.ts
│   └── styles.scss                 # Styles globaux
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 📦 Installation

### Prérequis

- [Node.js](https://nodejs.org/) >= 18
- [Angular CLI](https://angular.io/cli) >= 19

```bash
npm install -g @angular/cli
```

### Cloner et installer

```bash
git clone https://github.com/marioncalpe/portfolio.git
cd portfolio
npm install
```

---

## ▶️ Lancer le projet

```bash
ng serve
```

Ouvrir [http://localhost:4200](http://localhost:4200) dans le navigateur.

---

## 🏗️ Build de production

```bash
ng build
```

Les fichiers compilés se trouvent dans le dossier `dist/`.

---

## 🗂️ Sections du portfolio

| Section | Description |
|---|---|
| **Hero** | Présentation, photo, bio et liens vers les réseaux sociaux |
| **Projets** | Creadoc Classroom, Monify V.1 (avec modals de détail) |
| **Technologies** | Stack maîtrisée : SCSS, Angular, TypeScript, MySQL, JS, PHP, Git... |
| **Expériences** | Timeline des formations et expériences professionnelles |
| **Contact** | Formulaire de contact |

---

## 🖼️ Assets

Toutes les images et GIFs doivent être placés dans le dossier **`public/`** à la racine du projet.

> ⚠️ Angular 19 sert les fichiers du dossier `public/` directement à la racine de l'URL.  
> Un fichier `public/monimage.jpg` est accessible via `src="monimage.jpg"` dans les templates.

---

## 🧩 Composant Modal

Le composant `<modal>` est standalone et réutilisable. Il accepte les propriétés suivantes :

| Propriété | Type | Description |
|---|---|---|
| `date` | `string` | Date affichée dans l'en-tête de la modal |
| `onClose` | `EventEmitter<void>` | Événement émis à la fermeture |

**Exemple d'utilisation :**

```html
@if (modal.monProjet.status) {
  <modal [date]="'Janvier 2024'" (onClose)="modal.monProjet.status = false">
    <div>Contenu de la modal...</div>
  </modal>
}
```

---

## 📬 Contact

- **GitHub** : [github.com/marioncalpe](https://github.com/marioncalpe)
- **LinkedIn** : [linkedin.com/in/marion-calpena-90a930187](https://www.linkedin.com/in/marion-calpena-90a930187)
- **Email** : marioncalpe2a@gmail.com

---

*© Marion Calpena — Mis à jour en 2025*