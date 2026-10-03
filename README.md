# Md. Masud Rana — Portfolio Website

A modern, responsive, single-page portfolio built from the CV `Resume of Masud Rana SQA.pdf`.
Plain HTML + CSS + JavaScript — no build step, no dependencies, no server needed.

---

## Files

```
Portfolio/
├── index.html                      # page structure (sections + mount points)
├── assets/
│   ├── css/style.css               # all styling, dark + light themes
│   ├── js/data.js                  # ← ALL CONTENT LIVES HERE
│   ├── js/main.js                  # rendering + interactions
│   ├── img/                        # (empty — put a profile photo here if you want one)
│   └── Md-Masud-Rana-SQA-Resume.pdf  # downloadable CV
├── Resume of Masud Rana SQA.pdf    # original source CV
└── README.md
```

## How to view it

Double-click `index.html` — it runs straight from the file system, no server required.

## How to update the content

Open **`assets/js/data.js`** and edit the values. The page re-renders itself from that
object, so you never need to touch HTML or CSS for a content change.

| What you want to change | Where in `data.js` |
|---|---|
| Name, title, email, phone, location, social links | `profile` |
| Rotating headline text in the hero | `profile.roles` |
| The four hero counters | `stats` |
| About paragraphs, highlights, quick facts | `about` |
| Jobs, bullet points, client projects | `experience` |
| "Tools & Technologies" tiles | `tools` |
| Skill categories and chips | `skillGroups` |
| Automation projects + GitHub links | `projects` |
| Degrees | `education` |
| "What I do" service cards | `services` |

**To add a new job**, copy an existing object inside `experience[]` and edit it. Its
`projects[]` array also feeds the **Professional Projects** tab, grouped by company.
**To add a personal project**, copy an object inside `projects[]` — it appears under the
**Personal Projects** tab.

To change the colour scheme, edit the token block at the top of `assets/css/style.css`:
`--primary`, `--title`, `--heading`, `--body`, `--muted` and `--grad` in `:root` (light)
and in the `html[data-theme="dark"]` block (dark).

## Features

- Terminal-style boot screen on first load (skippable; never blocks the page)
- Light / dark theme toggle, remembered via `localStorage` and applied before first paint
- Typing animation in the hero, animated counters, reveal-on-scroll
- Scroll progress bar, scroll-spy navigation, back-to-top button
- Tabbed Projects section (Professional / Personal) with full keyboard support
- Fully responsive down to 360px, with a mobile menu
- Contact form with client-side validation. Set `FORMSPREE_ID` at the top of
  `assets/js/main.js` to receive messages in your inbox; left empty, the form falls
  back to opening the visitor's own mail app with the message pre-filled
- Resume download button
- SEO meta tags, Open Graph tags, inline SVG favicon
- Respects `prefers-reduced-motion`; prints cleanly

## Publishing it online (free)

**GitHub Pages**

```bash
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/MasudRanauits/portfolio.git
git push -u origin main
```
Then: repo → **Settings → Pages → Source: `main` / root → Save**.
Your site goes live at `https://masudranauits.github.io/portfolio/`.

**Netlify / Vercel** — drag the whole `Portfolio` folder onto
[app.netlify.com/drop](https://app.netlify.com/drop), or import the repo in Vercel.
No build command, no output directory.

Once it is live, replace the placeholder Portfolio link in your CV (currently
`https://example.com/portfolio`) with the real URL.

## A note on what was left off the site

These details are in the CV but were deliberately **not** published on the public page:

- Father's and mother's name, date of birth, marital status — not needed by employers
  and best kept off a public page.
- The referee's personal email and mobile number — publishing someone else's contact
  details without asking them is not okay. Add "References available on request" if you
  want it mentioned; share the details privately when an employer asks.

If you want any of these added anyway, they go into `data.js` like everything else.
