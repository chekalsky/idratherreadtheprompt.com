# I'd rather read the prompt

A one-page site you can send when you'd rather read someone's original prompt (and their own thoughts) than plow through AI slop.

## Open locally

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8080
```

Then visit http://localhost:8080

## Deploy

Any static host works (GitHub Pages, Netlify, Cloudflare Pages, S3, …). Point the site root at this directory — no build step.

After you have a public URL, set absolute `og:image` / `twitter:image` in `index.html` to `https://YOUR-DOMAIN/og.png` so link previews resolve reliably.

## Specs for agents

See [AGENTS.md](AGENTS.md).
