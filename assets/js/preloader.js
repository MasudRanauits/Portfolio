/* =========================================================
   Md. Masud Rana — Portfolio
   preloader.js : terminal-style boot screen shown on first paint

   Runs before main.js so the overlay is live from the very first
   frame. Self-removing: it always tears itself down, even if a
   later script throws, so the site can never stay hidden.
   ========================================================= */
(function () {
  "use strict";

  var root = document.documentElement;
  var el   = document.getElementById("preloader");
  if (!el) return;

  /* Honour reduced-motion: the CSS already hides the overlay there. */
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) { el.parentNode.removeChild(el); return; }

  var typeEl = document.getElementById("preType");
  var logEl  = document.getElementById("preLog");
  var pctEl  = document.getElementById("prePct");
  var fillEl = document.getElementById("preFill");
  var skipEl = document.getElementById("preSkip");

  var CMD   = "./initialize_portfolio.sh";
  var STEPS = [                       // [percent at which it prints, label]
    [30, "mounting profile"],
    [60, "loading experience"],
    [88, "running test suites"]
  ];

  var TYPE_SPEED = 34;                // ms per character
  var LOAD_TIME  = 950;               // ms for 0 -> 100%
  var HARD_CAP   = 3600;              // ms before we bail out no matter what

  var finished = false;
  var timers   = [];
  var nextStep = 0;

  root.classList.add("preloading");

  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }

  function setProgress(p) {
    fillEl.style.width = p + "%";
    pctEl.textContent  = Math.round(p) + "%";
    while (nextStep < STEPS.length && p >= STEPS[nextStep][0]) {
      var li = document.createElement("li");
      li.innerHTML = "<span>&gt; " + STEPS[nextStep][1] + "</span><b>ok</b>";
      logEl.appendChild(li);
      nextStep++;
    }
  }

  function finish() {
    if (finished) return;
    finished = true;
    timers.forEach(clearTimeout);
    setProgress(100);
    el.classList.add("done");
    root.classList.remove("preloading");
    root.classList.add("loaded");
    // main.js holds its scroll animations until this fires, so the hero
    // counters and reveals play for the visitor instead of behind the overlay.
    document.dispatchEvent(new CustomEvent("preloader:done"));
    // Drop it from the DOM once the fade is over.
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 500);
  }

  /* ---- 1. type the command ---- */
  function type(i) {
    typeEl.textContent = CMD.slice(0, i);
    if (i < CMD.length) later(function () { type(i + 1); }, TYPE_SPEED);
    else later(run, 160);
  }

  /* ---- 2. run the progress bar ---- */
  function run() {
    var start = performance.now();
    (function step(now) {
      if (finished) return;
      var p = Math.min((now - start) / LOAD_TIME, 1);
      setProgress(p * 100);
      if (p < 1) requestAnimationFrame(step);
      else later(finish, 260);
    })(performance.now());
  }

  /* ---- escape hatches ---- */
  skipEl.addEventListener("click", finish);
  el.addEventListener("click", finish);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Enter" || e.key === " ") finish();
  });
  window.addEventListener("error", finish);
  setTimeout(finish, HARD_CAP);

  later(function () { type(1); }, 220);
})();
