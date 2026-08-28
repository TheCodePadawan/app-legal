# Publisher legal site (GitHub Pages)

Shared company pages plus per-app policies. **AthleteR is the first app**, not
the whole site. Add more products later under `apps/<id>/`.

```
/
  index.html                 ← publisher hub (list of apps)
  impressum.html             ← EN legal notice
  impressum-de.html          ← DE Impressum (§ 5 DDG) — legally relevant
  impressum-fr.html          ← FR mentions légales
  privacy.html / terms.html  ← shortcuts → AthleteR (first app only)
  assets/js/config.js        ← publisher + per-app values
  apps/athleter/
    index.html               ← AthleteR legal home
    privacy / terms          ← EN, -de, -fr
    avv / avv-de / avv-fr    ← DPA (Art. 28 GDPR); German text controls
    parental-consent-template*.html
    delete-account.html / delete-data.html
    impressum*.html          ← redirects → publisher Impressum
```

**Not legal advice.** Have a lawyer review before store submission.

## What belongs where

| Page | Level | In the top bar? |
|------|--------|-----------------|
| Impressum | Publisher (same company for every app) | Yes — hub + every app bar |
| Privacy / Terms | Per app | Yes — on that app’s pages only |
| DPA / AVV | AthleteR only (coach = controller) | No — linked from Privacy, Terms, and the AthleteR home |
| Parental consent template | AthleteR coach tool | No — AthleteR home |
| Delete account / data | Play Console URLs | No — AthleteR home |

Every AthleteR document uses the same bar: **Privacy · Terms · Impressum**.
The DPA is not a fourth tab.

## Edit once

`assets/js/config.js` → `publisher` (company name, address, phone, VAT, …).

`apps.athleter` holds AthleteR-only fields (`name`, `tagline`, `website`).

Orange dashed text still starts with `[`.

## Store URLs

Play Console (AthleteR):

```
https://<user>.github.io/<repo>/apps/athleter/privacy.html
https://<user>.github.io/<repo>/apps/athleter/delete-account.html
https://<user>.github.io/<repo>/apps/athleter/delete-data.html
```

Impressum (German, publisher-level):

```
https://<user>.github.io/<repo>/impressum-de.html
```

Old `…/apps/athleter/impressum-de.html` still redirects there.

## Preview

```bash
cd /Users/dev-pc/Work/app-legal
python3 -m http.server 8080
```

Open http://localhost:8080

## Publish

GitHub → **Settings → Pages** → branch **`main`** / folder **`/`**.

## Add another app later

1. Add `apps/<new-id>/` with at least `index.html`, `privacy.html`, `terms.html`
2. Set `data-app="<new-id>"` on those pages
3. Add an entry under `apps` in `config.js`
4. Do **not** put that app’s extra docs (DPA, deletion, …) in the hub nav
