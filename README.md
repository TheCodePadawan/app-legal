# Publisher legal site (GitHub Pages)

Privacy Policy, Terms, Data Processing Agreement (AVV), and Impressum for
**AthleteR** store listings. Shared company config in one place; per-app
policy URLs under `apps/`. More apps can be added later when their policies
are ready.

```
/
  index.html                 ← hub
  privacy.html / terms.html / impressum.html  ← redirects → AthleteR
  assets/js/config.js        ← edit publisher + per-app notes HERE
  apps/
    athleter/privacy.html       ← EN (canonical store URL)
    athleter/privacy-de.html    ← DE Datenschutzerklärung
    athleter/privacy-fr.html    ← FR Politique de confidentialité
    athleter/terms.html         ← EN (canonical store URL)
    athleter/terms-de.html      ← DE Nutzungsbedingungen
    athleter/terms-fr.html      ← FR Conditions d'utilisation
    athleter/avv.html           ← EN Data Processing Agreement (convenience translation)
    athleter/avv-de.html        ← DE Auftragsverarbeitungsvertrag (Art. 28 DSGVO) — legally controlling
    athleter/avv-fr.html        ← FR Accord de traitement des données
    athleter/impressum.html     ← EN legal notice
    athleter/impressum-de.html  ← DE Impressum (§ 5 DDG) — legally relevant
    athleter/impressum-fr.html  ← FR mentions légales
    athleter/parental-consent-template.html     ← EN — practical tool for coaches, not a legal doc about us
    athleter/parental-consent-template-de.html  ← DE
    athleter/parental-consent-template-fr.html  ← FR
    athleter/delete-account.html  ← Google Play account deletion
    athleter/delete-data.html     ← Google Play partial data deletion
```

**Not legal advice.** Have a lawyer review before store submission.

## Edit once

`assets/js/config.js` → `publisher`:

- company name, business type, country
- represented by (owner / managing director)
- contact email / address / phone
- website
- VAT ID and commercial register (if a limited company; leave placeholder if not)
- governing law, liability cap
- DPO (or leave bracketed)

Orange dashed text on pages comes from values that still start with `[`.

## AthleteR

AthleteR has full EN / DE / FR text under `apps/athleter/`. Each legal page
includes an EN|DE|FR language switcher. Fill remaining bracketed placeholders
in `config.js` before relying on these pages in Germany (Impressum) or for
store submission.

## Store URLs

After Pages is live (English remains the canonical Play store URL for privacy):

```
https://<user>.github.io/<repo>/apps/athleter/privacy.html
https://<user>.github.io/<repo>/apps/athleter/privacy-de.html
https://<user>.github.io/<repo>/apps/athleter/privacy-fr.html
https://<user>.github.io/<repo>/apps/athleter/terms.html
https://<user>.github.io/<repo>/apps/athleter/terms-de.html
https://<user>.github.io/<repo>/apps/athleter/terms-fr.html
https://<user>.github.io/<repo>/apps/athleter/avv.html
https://<user>.github.io/<repo>/apps/athleter/avv-de.html         ← legally controlling text
https://<user>.github.io/<repo>/apps/athleter/avv-fr.html
https://<user>.github.io/<repo>/apps/athleter/impressum.html
https://<user>.github.io/<repo>/apps/athleter/impressum-de.html  ← German Impressum
https://<user>.github.io/<repo>/apps/athleter/impressum-fr.html
https://<user>.github.io/<repo>/apps/athleter/parental-consent-template.html
https://<user>.github.io/<repo>/apps/athleter/parental-consent-template-de.html
https://<user>.github.io/<repo>/apps/athleter/parental-consent-template-fr.html
https://<user>.github.io/<repo>/apps/athleter/delete-account.html  ← Google Play account deletion
https://<user>.github.io/<repo>/apps/athleter/delete-data.html     ← Google Play partial data deletion
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
