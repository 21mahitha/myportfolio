# Portfolio Website — Assignment 4

A personal portfolio built with **React Router**, deployed to **GitHub Pages**.

---

## 🚀 Quick Setup (5 steps)

### Step 1 — Install dependencies
```bash
npm install
```

### Step 2 — Add YOUR details (required before running)

Open **`src/pages/Home.js`** and fill in the `ME` object at the top:
- `name` — your full name
- `phone` — your phone number
- `personalEmail` — your personal email
- `collegeEmail` — your college email
- `skills` — your skills (add/remove as needed)
- `about` — a short paragraph about yourself
- `researchInterests` — your research interests
- `profilePic` — replace with your photo URL or a local image

Open **`src/pages/Projects.js`** and fill in the `PROJECTS` array:
- Add your project titles, descriptions, tech stacks, and GitHub links

Open **`src/components/Navbar.js`** and replace `YourName` in the brand logo.

### Step 3 — Run locally to test
```bash
npm start
```
Open `http://localhost:3000` to see your portfolio.

---

## 📦 Deployment to GitHub Pages

### Step 1 — Create GitHub repo
- Go to github.com → New Repository → Name: `portfolio` → Create

### Step 2 — Push your code
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/portfolio.git
git push -u origin main
```

### Step 3 — Update package.json homepage
In `package.json`, replace `your-username` with your actual GitHub username:
```json
"homepage": "https://YOUR-USERNAME.github.io/portfolio"
```

### Step 4 — Deploy
```bash
npm run deploy
```

### Step 5 — Enable GitHub Pages
- Go to your repo → Settings → Pages
- Under "Branch", select `gh-pages` → Save

Your site will be live at `https://YOUR-USERNAME.github.io/portfolio` in ~2 minutes!

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js       ← NavLink navigation
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.js         ← Edit ME object here
│   │   ├── Home.css
│   │   ├── Projects.js     ← Edit PROJECTS array here
│   │   └── Projects.css
│   ├── App.js              ← HashRouter + Routes
│   ├── App.css             ← Global styles & CSS variables
│   └── index.js
└── package.json
```

## ✅ Assignment Checklist

- [x] Home Page with About Me, Research Interests, Personal Details, Profile Picture
- [x] Projects Page with GitHub links
- [x] NavLink for routing between pages
- [x] CSS styling applied throughout
- [x] HashRouter used (required for GitHub Pages)
- [x] gh-pages deployment scripts configured
