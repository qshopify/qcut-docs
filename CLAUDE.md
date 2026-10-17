# Identity: QCut · DOCS

**This folder = the QCut theme's public docs, FAQ and support site.**

- **What:** Astro docs site — `.mdx` pages, `/faq`, `/support` (Netlify Forms + auto-reply function).
- **Source of truth for settings copy:** `src/data/theme-schema.json`, exported from the theme repo
  with `node scripts/export-docs-schema.mjs` (writes `../qcut-docs/src/data/theme-schema.json`). Never hand-edit it; never retype setting labels in
  prose that a `<SettingsTable>` already shows.
- **Writing rules (Theme Store):** American English, sentence case, same terminology as the theme
  editor (heading, signup, navigation, main menu, footer menu, slideshow, top bar), and QCut's own
  terms: fit line, fit zone (Close / Regular / Relaxed / Oversized), size guide, size finder. Keep the FAQ
  current. Bold the exact setting labels you mention. Never promise custom work — point to the support policy and the Partner Directory.
- **Engine:** forked from `qsortby-user-guide`; brand preset `qcut` in `src/config.ts`. Live at https://qcut.qdn.vn.
