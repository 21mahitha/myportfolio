

A personal portfolio built with **React Router**

---

## Quick Setup (5 steps)

###  Install dependencies
```bash
npm install
```

###  Run locally to test
```bash
npm start
```
Open `http://localhost:3000` to see your portfolio.

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
