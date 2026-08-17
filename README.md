# dotsquares-travel

## Supporting Pages

This repository includes static supporting pages for the Dotsquares Travel
site:

- `index.html` — Home/landing page
- `privacy-policy.html` — Privacy Policy (placeholder legal content)
- `terms.html` — Terms & Conditions (placeholder legal content)

Shared styles for consistent typography and layout live in
`css/styles.css`. Every page includes a header and footer, and the footer
on every page links to both the Privacy Policy and Terms & Conditions
pages.

### Viewing Locally

Since these are static HTML files with no build step, you can open
`index.html` directly in a browser, or serve the directory with any
static file server, e.g.:

```bash
npx serve .
```

Then navigate to `http://localhost:3000` (or the port shown) to view the
site.