# Prashanth Dharavath — Portfolio

A fast, dependency-free personal portfolio (HTML + CSS + JS). Projects are pulled **live from GitHub** (`prashanth262`), so new repos show up automatically.

**Live:** https://prashanth262.github.io

## Personalise

Edit **`config.js`** only — name, role, tagline, about, skills, experience, email, LinkedIn, résumé link, and which repos to feature (`projects.pinned`) or hide (`projects.exclude`).

To show a live-demo link on a project card, set the repo's **Website** field on GitHub (repo → ⚙ next to *About*).

## Run locally

```bash
python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy to GitHub Pages

1. On GitHub, create a **public** repo named exactly **`prashanth262.github.io`** (no README).
2. In this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/prashanth262/prashanth262.github.io.git
   git push -u origin main
   ```
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → Branch: `main` / `(root)` → Save.
4. In ~1 minute it's live at **https://prashanth262.github.io**.

Future updates: edit, then `git add . && git commit -m "Update" && git push`.
