# Steven Ho — Portfolio

Personal portfolio at **https://stevenho.live**, styled as a macOS Chrome window
(tabs, address bar, bookmarks) with the page content shown inside it.

Built with React 18, Vite and Tailwind CSS.

The page is one long scroll. The browser chrome is functional: tabs scroll to
sections and push real history entries (`#about`), the address bar and URL
follow the section in view (click it to copy the link), back/forward/reload
work, and phones get a bottom toolbar with a menu.

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
    skills.js             grouped skills (as on the resume)
    work.js, education.js about-section timelines (with bullet highlights)
    projects.js           project cards
  components/
    browser/              the browser window: BrowserFrame (scroll area),
                          BrowserChrome = TabBar + Toolbar (address bar) +
                          BookmarksBar on desktop, MobileToolbar on phones
    ui/                   shared pieces: Section, Reveal, TiltCard, Tag,
                          Typewriter, icons
  sections/               one folder per page section, each a single
    hero/ techstack/      responsive component (no separate mobile versions)
    about/ projects/
  hooks/
    useBrowserNav.js      history, active section and address for the chrome
    useRevealOnce.js      one-shot "scrolled into view" detection
  assets/               fonts, tech logos, images (imported, so Vite hashes them)
public/                 files served as-is: CNAME, favicon, resume PDF
```

Section ids in `data/navigation.js` double as the URL hashes, and the chrome's
height is mirrored in `BrowserFrame`'s `scroll-pt-*` classes so a section's top
lands just below it. If you change the chrome height, change those too.

## Hosting

Served from GitHub Pages (`gh-pages` branch) on a custom domain bought at Namecheap.

- `public/CNAME` must contain `stevenho.live`. Vite copies it into `dist/`, so
  every deploy keeps the custom domain. Don't move it back to the repo root.
- DNS (Namecheap → Advanced DNS): four `A` records for `@` pointing at GitHub
  Pages (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) and a `CNAME`
  for `www` pointing at `hostevenpleasedontbetaken.github.io`.
- Repo → Settings → Pages: custom domain `stevenho.live`, Enforce HTTPS on.
