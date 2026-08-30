/**
 * Multi-app legal site — edit publisher once; customize each app block.
 * Orange dashed placeholders on pages come from values that still start with "[".
 *
 * Not legal advice. Have a lawyer review before store submission.
 */
window.LEGAL_SITE = {
  publisher: {
    companyLegalName: "Haris Harcevic",
    // Geschäftsbezeichnung only — not a registered Firma (kein HR-Eintrag).
    tradeName: "Neo Intellectus",
    businessType: "Einzelunternehmen (Kleinunternehmer gemäß § 19 UStG)",
    countryState: "Deutschland",
    representedBy: "Haris Harcevic",
    contactEmail: "info@neointellectus.com",
    // AthleteR inbox; forwarded to contactEmail.
    appContactEmail: "contact@athleter.app",
    contactAddress: "Lange Str. 6, 89233 Neu-Ulm, Deutschland",
    phone: "+49 160 3491053",
    website: "https://www.athleter.app",
    // W-IdNr after § 139c AO — not a USt-IdNr. Kleinunternehmer; no VAT ID issued.
    vatId: "DE424566302-00001",
    registerCourt: "nicht eingetragen",
    registerNumber: "nicht eingetragen",
    dpoContact: "Kein Datenschutzbeauftragter bestellt",
    governingLaw: "Deutschland",
    liabilityCap: "50 EUR",
    lastUpdated: "30 August 2026",
  },

  /**
   * status: "ready" = policy text is filled for that product
   *         "draft" = stub — replace notes before using the URL in a store
   */
  apps: {
    athleter: {
      id: "athleter",
      name: "AthleteR",
      tagline: "Coach-first athlete performance tracking",
      status: "ready",
      lastUpdated: "30 August 2026",
      website: "https://www.athleter.app",
      path: "apps/athleter/",
    },
  },
};

/** Back-compat alias used by older snippets */
window.ATHLETER_LEGAL = Object.assign({}, window.LEGAL_SITE.publisher, {
  appName: "AthleteR",
  lastUpdated: window.LEGAL_SITE.apps.athleter.lastUpdated,
});
