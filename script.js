(function () {
  const C = window.PORTFOLIO;
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) =>
    String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  const ghUrl = `https://github.com/${C.github}`;

  // ── Static content ──────────────────────────────────────────
  document.querySelectorAll("[data-bind]").forEach((el) => (el.textContent = C[el.dataset.bind] || ""));
  document.title = `${C.name} — Portfolio`;
  $("#year").textContent = new Date().getFullYear();
  $("#gh-btn").href = ghUrl;
  $("#all-repos").href = `${ghUrl}?tab=repositories`;
  if (C.resumeUrl) { const r = $("#resume-btn"); r.href = C.resumeUrl; r.hidden = false; }

  const avatar = $("#avatar");
  avatar.src = C.photo || `https://github.com/${C.github}.png?size=480`;
  avatar.alt = `${C.name}`;

  $("#about-text").innerHTML = C.about.map((p) => `<p>${esc(p)}</p>`).join("");

  $("#skills-list").innerHTML = Object.entries(C.skills)
    .map(([group, items]) => `
      <div class="skill-group reveal">
        <h4>${esc(group)}</h4>
        <div class="chips">${items.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      </div>`)
    .join("");

  const chips = (arr) => (arr && arr.length ? `<div class="chips tech">${arr.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div>` : "");

  $("#timeline").innerHTML = C.experience
    .map((e) => `
      <li class="reveal">
        <h4>${esc(e.title)} <span class="org">@ ${esc(e.org)}</span></h4>
        <p class="period">${esc(e.period)}</p>
        ${e.subtitle ? `<p class="exp-sub">${esc(e.subtitle)}</p>` : ""}
        ${chips(e.tech)}
        <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </li>`)
    .join("");

  $("#featured").innerHTML = (C.featured || [])
    .map((f, i) => `
      <article class="feature reveal">
        <div class="feature-head">
          <span class="mono accent">0${i + 1}</span>
          ${f.badge ? `<span class="badge">${esc(f.badge)}</span>` : ""}
        </div>
        <h4><a href="https://github.com/${C.github}/${esc(f.repo)}" target="_blank" rel="noopener">${esc(f.name)}</a></h4>
        <ul>${f.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        ${chips(f.tech)}
        <a class="link" href="https://github.com/${C.github}/${esc(f.repo)}" target="_blank" rel="noopener">View code ↗</a>
      </article>`)
    .join("");

  $("#education-list").innerHTML = (C.education || [])
    .map((e) => `
      <div class="edu reveal">
        <p class="period">${esc(e.period)} · ${esc(e.place)}</p>
        <h4>${esc(e.degree)}</h4>
        <p class="org">${esc(e.school)}</p>
        ${e.score ? `<span class="badge big-badge">${esc(e.score)}</span>` : ""}
      </div>`)
    .join("");

  $("#achievements").innerHTML = (C.achievements || [])
    .map((a) => `<li class="reveal"><strong>${esc(a.title)}</strong><span>${esc(a.text)}</span></li>`)
    .join("");

  const contact = [];
  const ext = (href, label) => `<a class="btn btn-ghost" href="${esc(href)}" target="_blank" rel="noopener">${label} ↗</a>`;
  if (C.email) contact.push(`<a class="btn" href="mailto:${esc(C.email)}">Say hello</a>`);
  if (C.linkedin) contact.push(ext(C.linkedin, "LinkedIn"));
  contact.push(ext(ghUrl, "GitHub"));
  if (C.leetcode) contact.push(ext(C.leetcode, "LeetCode"));
  if (C.gfg) contact.push(ext(C.gfg, "GeeksforGeeks"));
  $("#contact-links").innerHTML = contact.join("");

  // ── Projects from GitHub ────────────────────────────────────
  const LANG_COLORS = {
    JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5", Java: "#b07219", HTML: "#e34c26",
    CSS: "#663399", "C++": "#f34b7d", C: "#555555", "C#": "#178600", Go: "#00ADD8", Rust: "#dea584",
    PHP: "#4F5D95", Ruby: "#701516", Kotlin: "#A97BFF", Swift: "#F05138", Dart: "#00B4AB",
    "Jupyter Notebook": "#DA5B0B", Shell: "#89e051", Vue: "#41b883", SCSS: "#c6538c", Apex: "#1797c0",
  };
  const icon = {
    folder: '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    gh: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg>',
    ext: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  };

  let repos = [];
  let activeLang = "All";

  function render() {
    const grid = $("#projects-grid");
    const list = activeLang === "All" ? repos : repos.filter((r) => r.language === activeLang);
    if (!list.length) {
      grid.innerHTML = `<div class="empty">No public projects to show yet — check back soon, or <a class="link" href="${ghUrl}" target="_blank" rel="noopener">visit my GitHub</a>.</div>`;
      return;
    }
    grid.innerHTML = list.map((r) => {
      const name = r.name.replace(/[-_]/g, " ");
      const home = r.homepage ? `<a href="${esc(r.homepage)}" target="_blank" rel="noopener" aria-label="Live demo of ${esc(r.name)}">${icon.ext}</a>` : "";
      return `
        <article class="card reveal in">
          <div class="card-top">
            <span class="folder">${icon.folder}</span>
            <div class="card-links">
              <a href="${esc(r.html_url)}" target="_blank" rel="noopener" aria-label="${esc(r.name)} on GitHub">${icon.gh}</a>${home}
            </div>
          </div>
          <h4><a href="${esc(r.html_url)}" target="_blank" rel="noopener">${esc(name)}</a></h4>
          <p>${esc(r.description || "No description yet.")}</p>
          <div class="card-meta">
            ${r.language ? `<span><i class="lang-dot" style="background:${LANG_COLORS[r.language] || "#8b98a5"}"></i>${esc(r.language)}</span>` : ""}
            ${r.stargazers_count ? `<span>★ ${r.stargazers_count}</span>` : ""}
            ${r.forks_count ? `<span>⑂ ${r.forks_count}</span>` : ""}
            ${C.projects.pinned.includes(r.name) ? `<span class="badge">featured</span>` : ""}
          </div>
        </article>`;
    }).join("");
  }

  function renderFilters() {
    const langs = ["All", ...new Set(repos.map((r) => r.language).filter(Boolean))];
    if (langs.length <= 2) { $("#filters").hidden = true; return; }
    $("#filters").innerHTML = langs
      .map((l) => `<button class="filter${l === activeLang ? " active" : ""}" role="tab" aria-selected="${l === activeLang}" data-lang="${esc(l)}">${esc(l)}</button>`)
      .join("");
  }
  $("#filters").addEventListener("click", (e) => {
    const b = e.target.closest(".filter");
    if (!b) return;
    activeLang = b.dataset.lang;
    renderFilters();
    render();
  });

  function setStats(user, all) {
    const stars = all.reduce((n, r) => n + r.stargazers_count, 0);
    const langs = new Set(all.map((r) => r.language).filter(Boolean)).size;
    const items = [
      [user?.public_repos ?? all.length, "public repos"],
      [langs, "languages"],
      [stars, "stars earned"],
    ];
    $("#stats").innerHTML = items.map(([n, l]) => `<div class="stat"><strong>${n}</strong><span>${l}</span></div>`).join("");
  }

  async function loadGitHub() {
    const CACHE = "gh-cache-v1";
    try {
      const cached = JSON.parse(sessionStorage.getItem(CACHE) || "null");
      if (cached && Date.now() - cached.t < 10 * 60 * 1000) return cached.d;
    } catch (_) {}
    const [u, r] = await Promise.all([
      fetch(`https://api.github.com/users/${C.github}`),
      fetch(`https://api.github.com/users/${C.github}/repos?per_page=100&sort=updated`),
    ]);
    if (!r.ok) throw new Error(`GitHub API ${r.status}`);
    const d = { user: u.ok ? await u.json() : null, repos: await r.json() };
    try { sessionStorage.setItem(CACHE, JSON.stringify({ t: Date.now(), d })); } catch (_) {}
    return d;
  }

  loadGitHub()
    .then(({ user, repos: all }) => {
      if (user?.bio && !C.tagline) $("[data-bind=tagline]").textContent = user.bio;
      const P = C.projects;
      const pinRank = (r) => { const i = P.pinned.indexOf(r.name); return i === -1 ? Infinity : i; };
      const featuredRepos = (C.featured || []).map((f) => f.repo.toLowerCase());
      repos = all
        .filter((r) => !(P.hideForks && r.fork) && !P.exclude.includes(r.name) && !r.archived && !featuredRepos.includes(r.name.toLowerCase()))
        .sort((a, b) =>
          pinRank(a) - pinRank(b) ||
          b.stargazers_count - a.stargazers_count ||
          new Date(b.pushed_at) - new Date(a.pushed_at))
        .slice(0, P.maxRepos);
      setStats(user, all.filter((r) => !r.fork));
      renderFilters();
      render();
    })
    .catch(() => {
      $("#filters").hidden = true;
      $("#projects-grid").innerHTML = `<div class="empty">Couldn't load projects right now. <a class="link" href="${ghUrl}?tab=repositories" target="_blank" rel="noopener">Browse them on GitHub ↗</a></div>`;
    });

  // ── UI behaviour ────────────────────────────────────────────
  const nav = $(".nav");
  addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 10), { passive: true });

  const menuBtn = $(".menu-btn"), links = $(".links");
  menuBtn.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open);
  });
  links.addEventListener("click", (e) => {
    if (e.target.closest("a")) { links.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
  });

  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
