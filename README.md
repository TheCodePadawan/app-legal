# Publisher legal site (GitHub Pages)

Privacy Policy + Terms for **AthleteR** store listings. Shared company config in
one place; per-app policy URLs under `apps/`. More apps can be added later when
their policies are ready.

```
/
  index.html                 ← hub
  privacy.html / terms.html  ← redirects → AthleteR (bookmarks)
  assets/js/config.js        ← edit publisher + per-app notes HERE
  apps/
    athleter/privacy.html       ← EN (canonical store URL)
    athleter/privacy-de.html    ← DE Datenschutzerklärung
    athleter/privacy-fr.html    ← FR Politique de confidentialité
    athleter/terms.html         ← EN (canonical store URL)
    athleter/terms-de.html      ← DE Nutzungsbedingungen
    athleter/terms-fr.html      ← FR Conditions d'utilisation
```

**Not legal advice.** Have a lawyer review before store submission.

## Edit once

`assets/js/config.js` → `publisher`:

- company name, business type, country
- contact email / address
- governing law, liability cap
- DPO (or leave bracketed)

## AthleteR

AthleteR has full EN / DE / FR text under `apps/athleter/` (mirrored from the app).
Each legal page includes an EN|DE|FR language switcher. Fill remaining bracketed
placeholders in `config.js` before store submission.

## Store URLs

After Pages is live (English remains the canonical store URL):

```
https://<user>.github.io/<repo>/apps/athleter/privacy.html
https://<user>.github.io/<repo>/apps/athleter/privacy-de.html
https://<user>.github.io/<repo>/apps/athleter/privacy-fr.html
https://<user>.github.io/<repo>/apps/athleter/terms.html
https://<user>.github.io/<repo>/apps/athleter/terms-de.html
https://<user>.github.io/<repo>/apps/athleter/terms-fr.html
```

## Preview

```bash
cd /Users/dev-pc/Work/app-legal
python3 -m http.server 8080
```

Open http://localhost:8080

## Publish

GitHub → **Settings → Pages** → branch **`main`** / folder **`/`**.

## Add another app later

1. Add `apps/<new-id>/` with `privacy.html` and `terms.html`
2. Set `data-app="<new-id>"` on `<body>` in both HTML files
3. Add an entry under `apps` in `config.js` (catalog is derived from `Object.keys`)
4. Fill placeholders; mark `status: "ready"` when the text is real
