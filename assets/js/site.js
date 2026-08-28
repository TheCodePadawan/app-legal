(function () {
  const site = window.LEGAL_SITE || {};
  const publisher = site.publisher || {};
  const apps = site.apps || {};

  function looksPlaceholder(value) {
    return value == null || String(value).trim() === "" || String(value).startsWith("[");
  }

  function setText(el, value, keyHint) {
    const text = value == null ? "" : String(value);
    el.textContent = text;
    if (looksPlaceholder(text)) {
      el.classList.add("is-placeholder");
      el.title = keyHint
        ? "Edit assets/js/config.js — " + keyHint
        : "Edit assets/js/config.js";
    } else {
      el.classList.remove("is-placeholder");
      el.removeAttribute("title");
    }
  }

  const appId =
    document.body.getAttribute("data-app") ||
    document.documentElement.getAttribute("data-app");
  const app = appId ? apps[appId] : null;

  document.querySelectorAll("[data-legal]").forEach((el) => {
    const key = el.getAttribute("data-legal");
    if (!key) return;
    if (Object.prototype.hasOwnProperty.call(publisher, key)) {
      setText(el, publisher[key], "publisher." + key);
      return;
    }
    if (app && Object.prototype.hasOwnProperty.call(app, key)) {
      setText(el, app[key], "apps." + appId + "." + key);
      return;
    }
  });

  document.querySelectorAll("[data-app-field]").forEach((el) => {
    const key = el.getAttribute("data-app-field");
    if (!app || !key) return;
    setText(el, app[key], "apps." + appId + "." + key);
  });

  document.querySelectorAll('a[data-legal-mailto="contactEmail"]').forEach((a) => {
    const email = publisher.contactEmail;
    if (email && !looksPlaceholder(email)) {
      a.href = "mailto:" + email;
    }
  });

  document.querySelectorAll('a[data-legal-tel="phone"]').forEach((a) => {
    const phone = publisher.phone;
    if (phone && !looksPlaceholder(phone)) {
      a.href = "tel:" + String(phone).replace(/[\s().-]/g, "");
    }
  });

  document.querySelectorAll('a[data-legal-href="website"]').forEach((a) => {
    const url = publisher.website;
    if (url && !looksPlaceholder(url)) {
      a.href = url;
    }
  });

  document.querySelectorAll('a[data-app-href="website"]').forEach((a) => {
    const url = app && app.website;
    if (url && !looksPlaceholder(url)) {
      a.href = url;
    }
  });

  const catalog = document.querySelector("[data-app-catalog]");
  if (catalog) {
    const order = Object.keys(apps);
    catalog.innerHTML = "";
    order.forEach((id) => {
      const item = apps[id];
      if (!item) return;
      const card = document.createElement("a");
      card.className = "app-card";
      card.href = item.path || "#";
      card.innerHTML =
        '<div class="app-card-top">' +
        "<h3></h3>" +
        '<span class="badge"></span>' +
        "</div>" +
        '<p class="app-card-tagline"></p>' +
        '<p class="app-card-links"><span>Legal home</span> · <span>Privacy</span> · <span>Deletion</span></p>';
      card.querySelector("h3").textContent = item.name;
      const badge = card.querySelector(".badge");
      badge.textContent = item.status === "ready" ? "Ready" : "Draft";
      badge.classList.add(item.status === "ready" ? "badge-ready" : "badge-draft");
      card.querySelector(".app-card-tagline").textContent = item.tagline || "";
      catalog.appendChild(card);
    });
  }

  document.querySelectorAll("[data-print]").forEach((btn) => {
    btn.addEventListener("click", () => window.print());
  });

  document.documentElement.dataset.legalReady = "true";
})();
