# Steven Ho — Portfolio

Personal portfolio at **https://stevenho.live**, styled as a macOS Chrome window
(tabs, address bar, bookmarks) with the page content shown inside it.

Built with React 18, Vite and Tailwind CSS. Swiper powers the mobile project carousel.

## Scripts

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run lint      # ESLint
npm run deploy    # build, then publish dist/ to the gh-pages branch
```

## Project structure

```
src/
  main.jsx, App.jsx     entry point; App composes the browser frame + sections
  styles/               global CSS (Tailwind layers, local font)
  data/                 all page content as plain data — edit text here
    links.js              LinkedIn / GitHub / Resume
    navigation.js         the tab bar entries
    techStack.js          skills shown in "Current Technologies"
    work.js, education.js about section timelines
    projects.js           project cards
  components/
    browser/              the fake browser window (frame, tabs, mobile bars)
    ui/                   small shared pieces (Section, Tag, Typewriter)
  sections/               one folder per page section
    hero/ techstack/ about/ projects/
  hooks/                useActiveSection, useRevealOnce (scroll helpers)
  assets/               fonts, tech logos, images (imported, so Vite hashes them)
public/                 files served as-is: CNAME, favicon, resume PDF
```

Sections currently have separate `Large…` (desktop) and `Small…` (mobile)
variants; both are rendered and one is hidden with CSS.

## Hosting

Served from GitHub Pages (`gh-pages` branch) on a custom domain bought at Namecheap.

- `public/CNAME` must contain `stevenho.live`. Vite copies it into `dist/`, so
  every deploy keeps the custom domain. Don't move it back to the repo root.
- DNS (Namecheap → Advanced DNS): four `A` records for `@` pointing at GitHub
  Pages (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) and a `CNAME`
  for `www` pointing at `hostevenpleasedontbetaken.github.io`.
- Repo → Settings → Pages: custom domain `stevenho.live`, Enforce HTTPS on.
