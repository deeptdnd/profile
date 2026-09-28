# Deepthi Doddaka — Portfolio

A hand-coded, dependency-free portfolio site (HTML + CSS + vanilla JS). No build step, no framework, no badges.

```
index.html     page markup
styles.css     all styling (tokens at the top)
script.js      header, mobile menu, scroll reveal
images/        profile + project images
```

## 1. Add the real images

The `images/` folder has placeholder files. Replace them with the real images, **keeping the same file names**:

| File | Used for |
|---|---|
| `profile.jpg` | Hero circle + About photo |
| `ohio-health.jpg` | Ohio Health project |
| `wells-fargo.jpg` | Wells Fargo project |
| `hcl.jpg` | HCL Technologies project |
| `cognizant.jpg` | Cognizant project |

Tip: keep each image under ~300 KB (use squoosh.app to compress).

## 2. Preview locally

Just open `index.html` in a browser, or run `npx serve .` in this folder.

## 3. Push to GitHub

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## 4. Deploy

**Vercel:** vercel.com → Add New → Project → import the GitHub repo → Framework preset: **Other** → Deploy. No build command or output directory needed.

**GitHub Pages:** repo → Settings → Pages → Source: *Deploy from a branch* → `main` / `root` → Save. Live at `https://<your-username>.github.io/<repo-name>/`.
