/* =========================================================
   Md. Masud Rana — Portfolio
   main.js : renders PORTFOLIO data + all interactions
   ========================================================= */
(function () {
  "use strict";

  const D = window.PORTFOLIO || PORTFOLIO;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* ---------------- SVG icon set ---------------- */
  const S = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const ICONS = {
    linkedin: `<svg ${S}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    github:   `<svg ${S}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
    mail:     `<svg ${S}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 6L2 7"/></svg>`,
    phone:    `<svg ${S}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    pin:      `<svg ${S}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    check:    `<svg ${S}><path d="M20 6L9 17l-5-5"/></svg>`,
    clipboard:`<svg ${S}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>`,
    robot:    `<svg ${S}><rect x="3" y="8" width="18" height="12" rx="3"/><path d="M12 8V4M9 4h6"/><circle cx="8.5" cy="14" r="1.2"/><circle cx="15.5" cy="14" r="1.2"/><path d="M1 13v3M23 13v3"/></svg>`,
    bolt:     `<svg ${S}><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>`,
    shield:   `<svg ${S}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    database: `<svg ${S}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`,
    gear:     `<svg ${S}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    cap:      `<svg ${S}><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5"/></svg>`,
    arrow:    `<svg ${S}><path d="M5 12h14M12 5l7 7-7 7"/></svg>`,
    external: `<svg ${S}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/></svg>`,
    folder:   `<svg ${S}><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"/><circle cx="13" cy="12" r="2"/><path d="M18 19c-2.8 0-5-2.2-5-5v8"/><circle cx="20" cy="19" r="2"/></svg>`,
    building: `<svg ${S}><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/></svg>`,
    chevron:  `<svg ${S}><path d="m6 9 6 6 6-6"/></svg>`
  };
  const icon = (n) => ICONS[n] || ICONS.check;

  /* =========================================================
     RENDER
     ========================================================= */

  /* ---- Profile bits ---- */
  const P = D.profile;
  $("#brandName").textContent  = P.shortName + " Rana";
  $("#heroName").textContent   = P.name;
  $("#footerName").textContent = P.name;
  $("#heroTagline").textContent = P.tagline;
  $("#availability").textContent = P.availability;
  $("#year").textContent = D.meta.year;
  $("#navResume").href = P.resume;
  $("#mobileResume").href = P.resume;
  document.title = P.name + " — " + P.title;

  const socialHTML = P.social
    .map(s => `<a class="icon-btn" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" title="${s.label}">${icon(s.icon)}</a>`)
    .join("");
  $("#heroSocial").innerHTML    = socialHTML;
  $("#footerSocial").innerHTML  = socialHTML;
  $("#contactSocial").innerHTML = socialHTML;
  $("#contactMail").href        = "mailto:" + P.email;
  $("#contactResume").href      = P.resume;

  /* ---- Stats ---- */
  $("#stats").innerHTML = D.stats
    .map((s, i) => `
      <div class="stat reveal" data-delay="${i + 1}">
        <b><span class="count" data-target="${s.value}">0</span>${s.suffix}</b>
        <span>${s.label}</span>
      </div>`)
    .join("");

  /* ---- About ---- */
  $("#aboutHeading").textContent = D.about.heading;
  $("#aboutParagraphs").innerHTML = D.about.paragraphs.map(p => `<p>${p}</p>`).join("");
  $("#aboutFacts").innerHTML = D.about.facts
    .map(f => `<div class="fact"><small>${f.label}</small><b>${f.value}</b></div>`).join("");
  $("#aboutHighlights").innerHTML = D.about.highlights
    .map(h => `<li><span class="check">${icon("check")}</span><span>${h}</span></li>`).join("");

  /* ---- Services ---- */
  $("#services").innerHTML = D.services
    .map((s, i) => `
      <article class="card service reveal" data-delay="${i + 1}">
        <div class="icon-box">${icon(s.icon)}</div>
        <h4>${s.title}</h4>
        <p>${s.text}</p>
      </article>`)
    .join("");

  /* ---- Experience timeline ---- */
  $("#timeline").innerHTML = D.experience
    .map((j, i) => `
      <article class="tl-item reveal ${j.current ? "current" : ""}" data-delay="${i + 1}">
        <span class="tl-dot"></span>
        <div class="card">
          <div class="job-head">
            <div>
              <h3>${j.role} ${j.current ? '<span class="badge-now">Current</span>' : ""}</h3>
              <span class="job-company">${j.company}</span>
            </div>
            <div class="job-meta">
              <span class="period">${j.period}</span>
              ${j.location ? `<span class="job-location">${icon("pin")}${j.location}</span>` : ""}
            </div>
          </div>
          <p class="job-summary">${j.summary}</p>
          <ul class="job-points">${j.points.map(p => `<li>${p}</li>`).join("")}</ul>
          ${j.projects.length ? `
            <div class="job-projects">
              <h5>Key Projects</h5>
              <div class="chips">${j.projects.map(p => `<span class="chip">${p}</span>`).join("")}</div>
            </div>` : ""}
          <div class="tags">${j.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        </div>
      </article>`)
    .join("");

  /* ---- Skills ---- */
  $("#skillGrid").innerHTML = D.skillGroups
    .map((g, i) => `
      <article class="card skill-card reveal" data-delay="${(i % 3) + 1}">
        <h4><span class="icon-box">${icon(g.icon)}</span>${g.name}</h4>
        <div class="chips">${g.items.map(s => `<span class="chip">${s}</span>`).join("")}</div>
      </article>`)
    .join("");

  /* ---- Projects: filter chips + expandable explorer rows ---- */
  const CAT_LABELS = { all: "All Projects", healthcare: "Healthcare", ecommerce: "E-commerce" };
  const categories = ["all", ...new Set(D.projects.map(p => p.category))];
  const labelOf = c => CAT_LABELS[c] || c.charAt(0).toUpperCase() + c.slice(1);

  $("#filters").innerHTML = categories
    .map((c, i) => `<button class="filter-btn ${i === 0 ? "active" : ""}" data-filter="${c}">${labelOf(c)}</button>`)
    .join("");

  $("#projectsList").innerHTML = D.projects
    .map((p, i) => `
      <article class="proj-item reveal" data-category="${p.category}" data-delay="${i + 1}" data-open="${i === 0}">
        <button class="proj-trigger" type="button" aria-expanded="${i === 0}" aria-controls="projPanel${i}">
          <span class="proj-index" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
          <span class="proj-icon" aria-hidden="true">${icon("folder")}</span>
          <span class="proj-main">
            <span class="proj-title-row">
              <span class="proj-title">${p.title}</span>
              ${p.repo ? `<span class="proj-badge">${icon("github")}Repo</span>` : ""}
            </span>
            <span class="proj-sub">
              ${icon("building")}
              <span class="org">${p.type}</span>
              <span aria-hidden="true">·</span>
              <span class="cat">${labelOf(p.category)}</span>
            </span>
          </span>
          <span class="proj-chev" aria-hidden="true">${icon("chevron")}</span>
        </button>
        <div class="proj-panel" id="projPanel${i}" role="region">
          <div>
            <div class="proj-body">
              <p>${p.description}</p>
              <ul class="proj-points">${p.highlights.map(h => `<li>${h}</li>`).join("")}</ul>
              <div class="tags">${p.tech.map(t => `<span class="tag">${t}</span>`).join("")}</div>
              ${p.repo ? `
              <a class="repo-link" href="${p.repo}" target="_blank" rel="noopener noreferrer">
                View on GitHub ${icon("external")}
              </a>` : ""}
            </div>
          </div>
        </div>
      </article>`)
    .join("");

  /* One row open at a time, like a classic accordion. */
  $("#projectsList").addEventListener("click", (e) => {
    const trigger = e.target.closest(".proj-trigger");
    if (!trigger) return;
    const item = trigger.closest(".proj-item");
    const wasOpen = item.dataset.open === "true";
    $$(".proj-item").forEach(x => {
      x.dataset.open = "false";
      x.querySelector(".proj-trigger").setAttribute("aria-expanded", "false");
    });
    if (!wasOpen) {
      item.dataset.open = "true";
      trigger.setAttribute("aria-expanded", "true");
    }
  });

  $("#filters").addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    $$(".filter-btn").forEach(b => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    const shown = $$(".proj-item").filter(item => {
      const show = f === "all" || item.dataset.category === f;
      item.classList.toggle("hide", !show);
      return show;
    });
    // Keep one row open so the list never collapses to bare headers.
    if (!shown.some(i => i.dataset.open === "true")) {
      $$(".proj-item").forEach(x => {
        x.dataset.open = "false";
        x.querySelector(".proj-trigger").setAttribute("aria-expanded", "false");
      });
      if (shown[0]) {
        shown[0].dataset.open = "true";
        shown[0].querySelector(".proj-trigger").setAttribute("aria-expanded", "true");
      }
    }
  });

  /* ---- Education ---- */
  $("#eduGrid").innerHTML = D.education
    .map((e, i) => `
      <article class="card edu reveal" data-delay="${i + 1}">
        <div class="icon-box">${icon("cap")}</div>
        <div>
          <h4>${e.degree}</h4>
          <p>${e.institute}</p>
          <span class="year">${e.year}</span>
        </div>
      </article>`)
    .join("");

  /* ---- Contact ---- */
  $("#contactList").innerHTML = [
    { icon: "mail",  label: "Email",    value: P.email,    href: "mailto:" + P.email },
    { icon: "phone", label: "Phone",    value: P.phone,    href: "tel:" + P.phoneRaw },
    { icon: "pin",   label: "Location", value: P.location, href: "https://maps.google.com/?q=" + encodeURIComponent(P.location) }
    /* LinkedIn is omitted here on purpose — it already sits in the social row below. */
  ].map(c => `
      <a class="contact-item" href="${c.href}" target="_blank" rel="noopener noreferrer">
        <span class="icon-box">${icon(c.icon)}</span>
        <span><small>${c.label}</small><b>${c.value}</b></span>
      </a>`)
    .join("");

  /* =========================================================
     INTERACTIONS
     ========================================================= */

  /* Scroll-triggered animations wait for the boot screen to clear,
     otherwise the hero counters and reveals play behind the overlay. */
  function afterIntro(fn) {
    const pre = document.getElementById("preloader");
    if (!pre || document.documentElement.classList.contains("loaded")) { fn(); return; }
    document.addEventListener("preloader:done", fn, { once: true });
  }

  /* ---- Theme ---- */
  const root = document.documentElement;
  const saved = (() => { try { return localStorage.getItem("theme"); } catch (e) { return null; } })();
  if (saved) root.setAttribute("data-theme", saved);
  $("#themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked */ }
  });

  /* ---- Typing effect ---- */
  (function typeLoop() {
    const target = $("#typed");
    const roles = P.roles;
    let r = 0, i = 0, deleting = false;

    function tick() {
      const word = roles[r];
      target.textContent = deleting ? word.slice(0, --i) : word.slice(0, ++i);
      let delay = deleting ? 45 : 85;
      if (!deleting && i === word.length) { delay = 1700; deleting = true; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; delay = 400; }
      setTimeout(tick, delay);
    }
    tick();
  })();

  /* ---- Reveal on scroll ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  afterIntro(() => $$(".reveal").forEach(el => revealObserver.observe(el)));

  /* ---- Counters ---- */
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      const dur = 1400;
      const start = performance.now();
      (function step(now) {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      })(start);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  afterIntro(() => $$(".count").forEach(el => countObserver.observe(el)));

  /* ---- Nav: scrolled state, progress, back-to-top ---- */
  const nav = $("#nav"), bar = $("#progressBar"), toTop = $("#toTop");
  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 20);
    toTop.classList.toggle("show", y > 500);
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---- Scroll spy ----
     Picks the section covering the viewport mid-line, so boundaries
     never leave two links fighting over the active state. */
  const sections = $$("main section[id]");
  const navAnchors = $$('.nav-links a, .mobile-menu a[href^="#"]');
  let spyFrame = null, activeId = "";

  function updateSpy() {
    spyFrame = null;
    const line = window.scrollY + window.innerHeight * 0.4;
    let current = sections[0];
    for (const s of sections) {
      if (s.offsetTop <= line) current = s;
    }
    // Bottom of page always lights the last section
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = sections[sections.length - 1];
    }
    const id = "#" + current.id;
    if (id === activeId) return;
    activeId = id;
    navAnchors.forEach(a => a.classList.toggle("active", a.getAttribute("href") === id));
  }
  function queueSpy() { if (!spyFrame) spyFrame = requestAnimationFrame(updateSpy); }
  window.addEventListener("scroll", queueSpy, { passive: true });
  window.addEventListener("resize", queueSpy);
  updateSpy();

  /* ---- Mobile menu ---- */
  const burger = $("#burger"), menu = $("#mobileMenu");
  burger.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  $$(".mobile-menu a").forEach(a => a.addEventListener("click", () => {
    menu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }));

  /* ---- Cursor glow (pointer devices only) ---- */
  if (window.matchMedia("(pointer: fine)").matches) {
    const glow = $("#cursorGlow");
    window.addEventListener("pointermove", (e) => {
      glow.style.opacity = "1";
      glow.style.left = e.clientX + "px";
      glow.style.top  = e.clientY + "px";
    }, { passive: true });
    document.addEventListener("pointerleave", () => { glow.style.opacity = "0"; });
  }

  /* ---- Smooth anchor scroll fallback ---- */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      t.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

})();
