# Khokon Chandra — Portfolio

Personal portfolio and freelance landing site. Nuxt 3 · Vue 3 · Tailwind CSS · Nuxt Content.

Live: <https://khokon.vercel.app>

---

## Editing content

Almost all copy lives in plain data files — you shouldn't need to touch a component to
update the site.

| File | What it holds |
| --- | --- |
| `data/profile.ts` | Name, role, email, phone, location, availability, stats, social + freelance-platform links |
| `data/gigs.ts` | **Fiverr gigs**, the services grid, and the "how it works" steps |
| `data/experience.ts` | Work history (mirrors the CV) |
| `data/projects.ts` | Selected work + published packages |

Skills live in `components/Skill.vue`, because each one is paired with an icon component.

### Adding a Fiverr gig

Open `data/gigs.ts` and copy an entry in the `gigs` array:

```ts
{
  url: 'https://www.fiverr.com/s/xxxxxxx', // Fiverr gig page → Share → Copy link
  title: 'I will …',                       // exact gig title
  summary: 'One or two sentences.',
  price: 60,                               // your real starting price
  days: 3,
  revisions: 'Unlimited revisions',
  tags: ['Laravel', 'MySQL'],
  includes: ['What the buyer gets', '…'],
  featured: true,                          // pins it first + accent border
}
```

The layout adapts automatically: one gig renders centred, two or more render in a grid.

### Marking yourself unavailable

Set `available: false` in `data/profile.ts` to hide the green availability badge in the hero.

---

## Contact form

The form posts to `POST /api/contact`, a Nitro route that runs as a **Vercel serverless
function** (`server/api/contact.post.ts`). It validates input, drops bot submissions via a
honeypot field, throttles repeat senders, and delivers through the
[Resend](https://resend.com) HTTP API.

### Setup

1. Create an API key at <https://resend.com> → **API Keys**.
2. Add these in **Vercel → Project → Settings → Environment Variables** (and to a local
   `.env` for development — see `.env.example`):

   ```
   NUXT_RESEND_API_KEY=re_xxxxxxxxxxxx
   NUXT_CONTACT_TO=khokonchandra4@gmail.com
   NUXT_CONTACT_FROM=Portfolio <onboarding@resend.dev>
   ```

`onboarding@resend.dev` needs no domain verification, but Resend will only deliver from it
to the address that owns the API key — which is all a personal contact form needs. Swap in
your own verified domain later.

**Without the key the site still works**: the endpoint returns `503` and the form falls
back to a prefilled `mailto:` link, so nobody hits a dead end.

### Behaviour

| Case | Response |
| --- | --- |
| Invalid fields | `422` with per-field messages |
| Honeypot filled (bot) | `200 {ok:true}`, nothing sent |
| More than 5 sends / 10 min from one IP | `429` |
| No `NUXT_RESEND_API_KEY` | `503` → UI offers a `mailto:` fallback |
| Resend rejects the request | `502` → UI offers a `mailto:` fallback |

Rate limiting is in-memory and therefore per warm serverless instance — it thins out bursts
rather than enforcing a hard global cap.

---

## Deployment (Vercel)

`nitro.preset` is `'vercel'`. Pages are prerendered to the CDN at build time while
`/api/**` stays a serverless function, so the site is as fast as a static build but the
contact form still works.

> **If this project was previously deployed with the `static` preset**, clear any manual
> **Output Directory** override (e.g. `.output/public`) in Vercel → Settings → Build &
> Development Settings. Nuxt now emits `.vercel/output` (Build Output API v3), which Vercel
> detects on its own.

## Updating the CV

`public/khokon-chandra-cv.pdf` is served by the "Download CV" buttons. To regenerate it
from the HTML source:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="public/khokon-chandra-cv.pdf" \
  "file:///Users/khokonchandra/Documents/resume/khokon_chandra_cv.html"
```

---

## Commands

```bash
npm install     # install dependencies
npm run dev     # dev server on http://localhost:3000
npm run build   # production build
npm run preview # preview the production build locally
```
