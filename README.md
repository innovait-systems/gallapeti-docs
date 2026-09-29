# Galla Peti Help

Step-by-step guides for shopkeepers using **Galla Peti** (by Innovait Systems), built with
[Docusaurus](https://docusaurus.io/) — same setup as `../thannican-docs`. Served at
`https://help.gallapeti.innovait-systems.com`.

- Guides live in `docs/<topic>/*.mdx`; the sidebar is generated from the folders
  (order and labels in each `_category_.json`).
- Screenshots: guides use `<Screenshot alt="…" />` placeholders. Drop a capture into
  `static/img/<topic>/<name>.png` and add `src="<topic>/<name>.png"` — no text changes needed.
- Search is offline (built at build time).

```bash
npm install
npm run start   # live preview
npm run build   # static site in build/
npm run serve   # preview the build
```

The marketing site and privacy policy are in `../gallapeti-web`.
