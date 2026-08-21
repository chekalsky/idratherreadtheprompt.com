# AGENTS.md — I'd rather read the prompt

## Project

Static single-page site. No build step, no framework. Someone sends the link instead of reading AI slop: the page says they’d rather have the original prompt and the person’s own thoughts.

Files: `index.html`, `styles.css`, `script.js`, `favicon.svg`, `og.png` (source `og.svg`).

## Design lock

Source of truth for look, copy, and behavior. Polish within this lock; do not invent a new metaphor or palette family.

### Metaphor

Neutral, content-first. Invisible excellence (type, spacing, rhythm). Short careful statement — not a product landing page. No cards, hero gradients, purple SaaS chrome, or glow.

### Color

Scandinavian / arctic / warm midcentury. System preference only (`prefers-color-scheme`). No theme toggle.

| Token | Light | Dark |
| --- | --- | --- |
| `--paper` | `#F2EEE6` | `#1C1B19` |
| `--ink` | `#2C2A26` | `#E8E2D8` |
| `--mute` | `#5C646C` | `#9AA1A8` |
| `--accent` | `#6F4A36` | `#C4896A` |
| `--line` | `#D4CEC3` | `#3A3834` |

Nudge hex only for WCAG AA contrast; keep the family.

### Type

Serif editorial for the thesis (system stack: Iowan Old Style / Palatino / Georgia). Measure ~55–65ch. Large margins, generous leading. Restrained UI sans for the Copy link control only — not for the essay. No webfonts / Google Fonts.

### Layout

1. Main copy (2–3 sentences)
2. tl;dr: I’d rather read the prompt
3. Copy link
4. Footer

Desktop: ≥70% of the page above the fold. Mobile: message/prompt block first.

### Copy (locked)

**Main**

> AI, make a page I can send people that tells them I’d rather read their original prompt and their own intent than plow through the AI slop they sent me. It’s annoying to read something they didn’t even read themselves, and I’m not a fan of wasting my time going through a wall of text and endless “it’s not just …, it’s …”.

**tl;dr:** I’d rather read the prompt.

**CTA:** Copy link to send it to someone (current URL; brief “Copied” feedback). No other CTAs.

**Footer** (new tab, `rel="noopener noreferrer"`):

- Inspired by [nohello](https://nohello.net)
- Phrase: [Clayton Ramsey — I’d rather read the prompt](https://claytonwramsey.com/blog/prompt/)
- [chekalsky.com](https://chekalsky.com)

Voice: dry smug. Not hostile. Not a plea.

### Motion (locked: A + E)

No entrance animation. Page is still. Only the Copy link control may animate on success. Honor `prefers-reduced-motion: reduce` (instant final state).

### Sharing

`title` + `description` carry the full message. `og.svg` / `og.png` states the preference in readable type. Meta description:

> I’d rather read your original prompt and your own thoughts than plow through the AI slop you sent me.

### Hard nos

Giant brand wordmark as hero · wordy manifesto · finger-wag tone · frameworks · third-party tracking cookies · paste-prompt backend · manual theme toggle

**Allowed analytics:** Simple Analytics only (`scripts.simpleanalyticscdn.com/latest.js`, `data-collect-dnt="true"`). No other analytics.

## Definition of done

- [x] Valid HTML5: doctype, `lang`, charset, viewport, one `h1`, landmarks
- [x] Core message readable with CSS/JS off
- [x] System light/dark works; AA contrast on body text and controls
- [x] Visible keyboard focus; Copy link works with keyboard
- [x] `prefers-reduced-motion` respected
- [x] Copy link copies URL; fallback if clipboard API missing
- [x] Footer links correct + `noopener noreferrer`
- [x] Meta + OG/Twitter tags; OG asset conveys full message
- [x] Desktop fold ≈ short page (≥70% visible); mobile leads with main copy
- [x] No cards, purple chrome, hero wordmark, or cookie tracking (Simple Analytics OK)
- [x] Opens via `file://` or any static server; no build step

On deploy: replace relative `og.png` / `twitter:image` with an absolute `https://…/og.png` URL.

## Sub-agent playbook

Run in order. Never start Implement before Design lock is settled.

1. **Polish** — tighten strings/tokens inside the lock only. Done when lock matches files and type tokens are named in CSS.
2. **Implement** — build static files + favicon + OG from the lock. Done when DoD items for layout, copy link, and theme pass.
3. **Review** — semantics, contrast, focus, reduced motion, meta/OG, slop-design smell. Done when every DoD checkbox is checked or fixed.

## Out of scope

Multi-page site, CMS, comments, i18n, newsletter, non–Simple-Analytics trackers, backend, storing pasted prompts.
