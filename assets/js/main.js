/* =========================================================
   Md. Masud Rana — Portfolio
   main.js : renders PORTFOLIO data + all interactions
   ========================================================= */
(function () {
  "use strict";

  /* Set this to your own Formspree form id (https://formspree.io/forms) to
     receive messages in your inbox. Left empty, the form falls back to
     opening the visitor's mail app with everything pre-filled. */
  const FORMSPREE_ID = "";

  /* Visitor counter — Abacus (free, no signup, CORS-open). The pair below is
     this site's own counter; change it and the count starts from zero.
     Set VISITOR_NS to "" to remove the badge entirely. */
  const VISITOR_NS  = "md-masud-rana-portfolio";
  const VISITOR_KEY = "home";

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
    check:    `<svg ${S}><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
    clipboard:`<svg ${S}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>`,
    robot:    `<svg ${S}><rect x="3" y="8" width="18" height="12" rx="3"/><path d="M12 8V4M9 4h6"/><circle cx="8.5" cy="14" r="1.2"/><circle cx="15.5" cy="14" r="1.2"/><path d="M1 13v3M23 13v3"/></svg>`,
    bolt:     `<svg ${S}><path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/></svg>`,
    shield:   `<svg ${S}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>`,
    database: `<svg ${S}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`,
    gear:     `<svg ${S}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    award:    `<svg ${S}><circle cx="12" cy="8" r="6"/><path d="M15.5 13.5L17 22l-5-3-5 3 1.5-8.5"/></svg>`,
    book:     `<svg ${S}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`,
    external: `<svg ${S}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14L21 3"/></svg>`,
    code:     `<svg ${S}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
    globe:    `<svg ${S}><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
    server:   `<svg ${S}><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
    activity: `<svg ${S}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
    file:     `<svg ${S}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    coffee:   `<svg ${S}><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>`,
    layout:   `<svg ${S}><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
    monitor:  `<svg ${S}><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
    sun:      `<svg ${S}><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>`,
    moon:     `<svg ${S}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`
  };
  const icon = (n) => ICONS[n] || ICONS.check;
  const esc  = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* =========================================================
     RENDER
     ========================================================= */
  const P = D.profile;

  /* ---- Profile bits ---- */
  $("#heroName").textContent     = P.name;
  $("#footerName").textContent   = P.name;
  $("#heroTagline").textContent  = P.tagline;
  $("#availability").textContent = P.availability;
  $("#year").textContent         = D.meta.year;
  document.title = P.name + " — " + P.title;

  /* ---- Resume buttons: always download, never open in the PDF viewer ----
     The `download` attribute on its own is routinely overridden by browser
     PDF viewers, so every click fetches the file and saves it from a blob.
     If the fetch cannot run (file:// pages, offline) a synthetic anchor with
     `download` is clicked instead, which is the next best native fallback. */
  const RESUME_FILE = P.resume.split("/").pop() || "resume.pdf";

  function triggerSave(href, filename, revoke) {
    const a = document.createElement("a");
    a.href = href;
    a.download = filename;
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();
    if (revoke) setTimeout(() => URL.revokeObjectURL(href), 1000);
  }

  function downloadResume(e) {
    if (e) e.preventDefault();
    fetch(P.resume, { cache: "no-store" })
      .then(r => { if (!r.ok) throw new Error(r.status); return r.blob(); })
      .then(b => triggerSave(URL.createObjectURL(b), RESUME_FILE, true))
      .catch(() => triggerSave(P.resume, RESUME_FILE, false));
  }

  $$("#navResume, #mobileResume, #heroResume, #aboutResume").forEach(a => {
    a.href = P.resume;
    a.setAttribute("download", RESUME_FILE);
    a.addEventListener("click", downloadResume);
  });

  const socialHTML = P.social
    .map(s => `<a class="icon-btn" href="${s.url}" target="_blank" rel="noopener noreferrer" aria-label="${s.label}" title="${s.label}">${icon(s.icon)}</a>`)
    .join("");
  $("#footerSocial").innerHTML  = socialHTML;
  $("#contactSocial").innerHTML = socialHTML;

  /* ---- Hero: tool chips + stats ---- */
  $("#heroTools").innerHTML = D.tools.slice(0, 7)
    .map(t => `<li>${esc(t.name)}</li>`).join("");

  $("#stats").innerHTML = D.stats
    .map(s => `
      <div class="stat">
        <b><span class="count" data-target="${s.value}">0</span>${s.suffix}</b>
        <span>${esc(s.label)}</span>
      </div>`)
    .join("");

  /* ---- About ---- */
  $("#aboutParagraphs").innerHTML = D.about.paragraphs.map(p => `<p>${p}</p>`).join("");
  $("#aboutFacts").innerHTML = D.about.facts
    .map(f => `<div class="fact"><h4>${esc(f.label)}</h4><p>${esc(f.value)}</p></div>`).join("");

  const yearsFact = D.about.facts.find(f => f.label === "Experience");
  if (yearsFact) $("#aboutBadge").textContent = yearsFact.value + " Experience";

  /* ---- Services ---- */
  $("#services").innerHTML = D.services
    .map((s, i) => `
      <article class="card card-hover service reveal" data-delay="${(i % 4) + 1}">
        <div class="icon-box">${icon(s.icon)}</div>
        <h4>${esc(s.title)}</h4>
        <p>${esc(s.text)}</p>
      </article>`)
    .join("");

  /* ---- Experience timeline ---- */
  $("#timeline").innerHTML = D.experience
    .map((j, i) => `
      <article class="tl-item reveal" data-delay="${i + 1}">
        <div class="card tl-card">
          <div class="job-head">
            <div>
              <h3>${esc(j.role)}</h3>
            </div>
            <div>
              <span class="period">${esc(j.period)}</span>
              ${j.location ? `<span class="job-location">${icon("pin")}${esc(j.location)}</span>` : ""}
            </div>
          </div>
          <span class="job-company">${esc(j.company)}</span>
          <ul class="job-points">${j.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
          <div class="tags">${j.tags.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        </div>
      </article>`)
    .join("");

  /* ---- Projects: professional groups (from experience) ---- */
  $("#proGroups").innerHTML = D.experience
    .filter(j => j.projects && j.projects.length)
    .map((j, i) => `
      <div class="proj-group reveal" data-delay="${i + 1}">
        <h3>${esc(j.company)} <em>— ${esc(j.role)}, ${esc(j.period)}</em></h3>
        <div class="tags" aria-label="Testing scope at ${esc(j.company)}">
          ${j.tags.map(t => `<span class="chip">${esc(t)}</span>`).join("")}
        </div>
        <div class="proj-cards grid-min0">
          ${j.projects.map(p => `
            <div class="card card-hover proj-mini">
              <p class="name">${esc(p)}</p>
              <p class="org">${esc(j.company)}</p>
            </div>`).join("")}
        </div>
      </div>`)
    .join("");

  /* ---- Projects: personal repos ---- */
  $("#repoGrid").innerHTML = D.projects
    .map((p, i) => `
      <article class="card card-hover repo-card reveal" data-delay="${(i % 3) + 1}">
        <div class="repo-top">
          <div>
            <h3>${esc(p.title)}</h3>
            <span class="chip">${esc(p.type)}</span>
          </div>
          <span class="icon-box" style="margin:0;width:38px;height:38px">${icon("github")}</span>
        </div>
        <p>${esc(p.description)}</p>
        <ul class="repo-points">${p.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul>
        <div class="tags">${p.tech.map(t => `<span class="chip">${esc(t)}</span>`).join("")}</div>
        ${p.repo ? `<a class="repo-link" href="${p.repo}" target="_blank" rel="noopener noreferrer">View on GitHub ${icon("external")}</a>` : ""}
      </article>`)
    .join("");

  /* ---- Skills ---- */
  $("#toolGrid").innerHTML = D.tools
    .map(t => `<div class="tool">${icon(t.icon)}<p>${esc(t.name)}</p></div>`).join("");

  $("#skillGrid").innerHTML = D.skillGroups
    .map((g, i) => `
      <article class="skill-card card reveal" data-delay="${(i % 3) + 1}">
        <h4>${icon(g.icon)}${esc(g.name)}</h4>
        <div class="chips">${g.items.map(s => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      </article>`)
    .join("");

  /* ---- Education ---- */
  const EDU_ICONS = ["award", "book"];
  $("#eduGrid").innerHTML = D.education
    .map((e, i) => `
      <article class="card card-hover edu reveal" data-delay="${i + 1}">
        <div class="edu-top">
          <span class="edu-ring">${icon(EDU_ICONS[i % EDU_ICONS.length])}</span>
          <div>
            <h3>${esc(e.degree)}</h3>
            <p>Completed in ${esc(e.year)}</p>
          </div>
        </div>
        <h4>${esc(e.institute)}</h4>
      </article>`)
    .join("");

  /* ---- Contact details ---- */
  $("#contactList").innerHTML = [
    { icon: "pin",   label: "Location", value: P.location, href: "https://maps.google.com/?q=" + encodeURIComponent(P.location) },
    { icon: "mail",  label: "Email",    value: P.email,    href: "mailto:" + P.email },
    { icon: "phone", label: "Phone",    value: P.phone,    href: "tel:" + P.phoneRaw }
  ].map(c => `
      <div class="contact-item">
        <span class="contact-ring">${icon(c.icon)}</span>
        <div>
          <h4>${esc(c.label)}</h4>
          <p><a href="${c.href}" target="_blank" rel="noopener noreferrer">${esc(c.value)}</a></p>
        </div>
      </div>`)
    .join("");

  /* =========================================================
     INTERACTIONS
     ========================================================= */

  /* Scroll-triggered animations wait for the boot screen to clear,
     otherwise the hero counters and reveals play behind the overlay. */
  function afterIntro(fn) {
    const pre = document.getElementById("preloader");
    if (!pre || document.documentElement.classList.contains("loaded")) { fn(); return; }
    let ran = false;
    const run = () => { if (!ran) { ran = true; fn(); } };
    document.addEventListener("preloader:done", run, { once: true });
    // Safety net: if the intro ever stalls, the page must still appear.
    setTimeout(run, 4000);
  }

  /* ---- Theme ---- */
  const root = document.documentElement;
  function paintThemeIcon() {
    $("#themeToggle").innerHTML = root.getAttribute("data-theme") === "dark" ? icon("sun") : icon("moon");
  }
  paintThemeIcon();
  $("#themeToggle").addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) { /* storage blocked */ }
    paintThemeIcon();
  });

  /* ---- Mobile menu ---- */
  const burger = $("#burger"), mobileMenu = $("#mobileMenu");
  function closeMenu() {
    mobileMenu.classList.remove("open");
    burger.setAttribute("aria-expanded", "false");
  }
  burger.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    burger.setAttribute("aria-expanded", String(open));
  });
  $$("#mobileMenu a").forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

  /* ---- Typing effect ---- */
  (function typeLoop() {
    const target = $("#typed");
    const roles = P.roles;
    let r = 0, i = 0, deleting = false;
    (function tick() {
      const word = roles[r];
      target.textContent = deleting ? word.slice(0, --i) : word.slice(0, ++i);
      let delay = deleting ? 45 : 85;
      if (!deleting && i === word.length) { delay = 1700; deleting = true; }
      else if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; delay = 400; }
      setTimeout(tick, delay);
    })();
  })();

  /* ---- Reveal on scroll ---- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("in"); revealObserver.unobserve(entry.target); }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  afterIntro(() => $$(".reveal").forEach(el => revealObserver.observe(el)));

  /* ---- Hero counters ---- */
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target, target = +el.dataset.target, dur = 1400, start = performance.now();
      (function step(now) {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(step);
      })(start);
      countObserver.unobserve(el);
    });
  }, { threshold: 0.5 });
  afterIntro(() => $$(".count").forEach(el => countObserver.observe(el)));

  /* ---- Project tabs (click + full keyboard support) ---- */
  const tabs = $$('[role="tab"]');
  function selectTab(tab) {
    tabs.forEach(t => {
      const selected = t === tab;
      t.setAttribute("aria-selected", String(selected));
      t.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(t.getAttribute("aria-controls"));
      if (panel) panel.hidden = !selected;
    });
    // Panels revealed after the first paint still need their animation kicked off.
    $$(".reveal", document.getElementById(tab.getAttribute("aria-controls")) || document)
      .forEach(el => revealObserver.observe(el));
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => selectTab(tab));
    tab.addEventListener("keydown", (e) => {
      let next = null;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (index + 1) % tabs.length;
      if (e.key === "ArrowLeft"  || e.key === "ArrowUp")   next = (index - 1 + tabs.length) % tabs.length;
      if (e.key === "Home") next = 0;
      if (e.key === "End")  next = tabs.length - 1;
      if (next !== null) { e.preventDefault(); tabs[next].focus(); selectTab(tabs[next]); }
    });
  });

  /* ---- Nav: scroll progress, active link, back-to-top ---- */
  const bar = $("#progressBar"), toTop = $("#toTop");
  const sections = $$("main section[id], main header[id]");
  const navLinks = $$(".nav-link");

  function onScroll() {
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    toTop.classList.toggle("show", y > 600);

    let current = "";
    sections.forEach(sec => { if (y >= sec.offsetTop - 150) current = sec.id; });
    navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + current));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  /* ---- Visitor counter ---- */
  (function initVisitors() {
    const badge = $("#visitorBadge");
    if (!badge || !VISITOR_NS) { if (badge) badge.remove(); return; }

    fetch(`https://abacus.jasoncameron.dev/hit/${VISITOR_NS}/${VISITOR_KEY}`)
      .then(r => r.ok ? r.json() : Promise.reject(new Error(r.status)))
      .then(data => {
        const n = Number(data.value);
        if (!Number.isFinite(n)) return;
        $("#visitorCount").textContent = n.toLocaleString();
        $("[data-visitor-label]", badge).textContent = n === 1 ? "visitor" : "visitors";
        badge.classList.add("show");
      })
      .catch(() => { /* counter unreachable — leave the badge hidden */ });
  })();

  /* ---- Contact form ---- */
  (function initForm() {
    const form = $("#contactForm");
    const status = $("#formStatus");
    const submit = $("#contactSubmit");

    function say(msg, isError) {
      status.textContent = msg;
      status.className = isError ? "err" : "ok";
    }

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const name    = $("#cName").value.trim();
      const email   = $("#cEmail").value.trim();
      const subject = $("#cSubject").value.trim() || `Portfolio enquiry from ${name}`;
      const message = $("#cMessage").value.trim();

      if (name.length < 2)                               return say("Please enter your name.", true);
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))     return say("Please enter a valid email address.", true);
      if (message.length < 10)                           return say("Please write a message of at least 10 characters.", true);

      /* No Formspree id configured — hand off to the visitor's mail app. */
      if (!FORMSPREE_ID) {
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        window.location.href =
          `mailto:${P.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        say("Opening your email app with the message ready to send…", false);
        return;
      }

      submit.disabled = true;
      const label = submit.textContent;
      submit.textContent = "Sending…";
      try {
        const res = await fetch("https://formspree.io/f/" + FORMSPREE_ID, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });
        if (res.ok) { say("Thanks! Your message has been sent.", false); form.reset(); }
        else        { say("Something went wrong. Please try again.", true); }
      } catch (err) {
        say("There was a problem sending your message. Please try again.", true);
      } finally {
        submit.disabled = false;
        submit.textContent = label;
      }
    });
  })();

})();
