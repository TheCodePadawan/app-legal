/**
 * Multi-app legal site — edit publisher once; customize each app block.
 * Orange dashed placeholders on pages come from values that still start with "[".
 *
 * Not legal advice. Have a lawyer review before store submission.
 */
window.LEGAL_SITE = {
  publisher: {
    companyLegalName: "[Company Legal Name]",
    businessType: "[business type, e.g. sole proprietorship / limited company]",
    countryState: "[Country/State of Incorporation]",
    representedBy: "[full name — owner or managing director]",
    contactEmail: "[contact email]",
    contactAddress: "[contact address]",
    phone: "[phone number]",
    website: "https://www.athleter.app",
    vatId: "[USt-IdNr / VAT ID, if applicable]",
    registerCourt: "[Handelsregister court, if limited company — otherwise leave]",
    registerNumber: "[HRB / register number, if limited company — otherwise leave]",
    dpoContact: "[DPO/representative contact, if applicable]",
    governingLaw: "[Governing Law Jurisdiction]",
    liabilityCap: "[PLACEHOLDER AMOUNT, e.g. FIFTY EUROS / US DOLLARS]",
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
      lastUpdated: "[Date]",
      path: "apps/athleter/",
    },
  },
};

/** Back-compat alias used by older snippets */
window.ATHLETER_LEGAL = Object.assign({}, window.LEGAL_SITE.publisher, {
  appName: "AthleteR",
  lastUpdated: window.LEGAL_SITE.apps.athleter.lastUpdated,
});
