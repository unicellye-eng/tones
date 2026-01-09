(() => {

// === Icon helpers (avoid colored emoji on Android) ===
const LAST_PLAYED_KEY = "alooh:lastPlayedId";
const CLICK_GUARD_MS = 250;

function setPlayIcon(btn) {
  btn.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path d="M8 5v14l11-7z"/></svg>`;
  btn.setAttribute("aria-label", "تشغيل");
}
function setPauseIcon(btn) {
  btn.innerHTML = `<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>`;
  btn.setAttribute("aria-label", "إيقاف مؤقت");
}
  const $ = (id) => document.getElementById(id);

  const headerTitle = $("headerTitle");
  const backBtn = $("backBtn");
  const headerLogo = $("headerLogo");

  const views = {
    cats: $("viewCategories"),
    list: $("viewList"),
    details: $("viewDetails"),
  };

  const categoriesGrid = $("categoriesGrid");
  const listGrid = $("listGrid");
  const searchBtn = $("searchBtn");
  const searchBar = $("searchBar");
  const searchInput = $("searchInput");
  const searchClear = $("searchClear");

  const detailsImage = $("detailsImage");
  const detailsName = $("detailsName");
  const subsGrid = $("subsGrid");
  const toast = $("toast");
  const offlineHint = $("offlineHint");

  // Audio preview (LIST ONLY)
  const previewAudio = new Audio();
  // Compatibility defaults (safe; no UI impact)
  previewAudio.preload = "none";
  try { previewAudio.setAttribute("playsinline", ""); } catch(e) {}
  try { previewAudio.setAttribute("webkit-playsinline", ""); } catch(e) {}
  let currentPlayingId = null;
  let isStoppingPreview = false;

  let currentView = "categories"; // categories | list | details
  let selectedCategory = null;     // category id
  let selectedRingtoneId = null;
  let currentQuery = "";

  // Cleanup controller for list button listeners (prevents leaks on re-render)
  let listAbort = new AbortController();

  // Auto-generated images for "بالاسم" content
  const generatedImageCache = new Map();

  function isByNameRingtone(r) {
    return ((r?.categories || []).some(n => String(n || "").includes("بالاسم")));
  }

  function extractNameOnly(title) {
    const t = String(title || "").trim();
    // Remove common prefixes like: دعاء / رد / رد آلي
    const cleaned = t
      .replace(/^\s*(دعاء)\s+/u, "")
      .replace(/^\s*(رد\s*آلي|رد)\s+/u, "")
      .trim();
    return cleaned || t;
  }

  function makeNameImageDataUrl(text) {
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");

    // Subtle dark background (keeps site palette)
    const g = ctx.createLinearGradient(0, 0, 600, 600);
    g.addColorStop(0, "#0b1620");
    g.addColorStop(1, "#111c27");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 600, 600);

    // Very subtle music note pattern
    ctx.globalAlpha = 0.08;
    ctx.fillStyle = "#ffffff";
    const notes = ["♪", "♫", "♩", "♬"];
    ctx.font = "48px sans-serif";
    for (let y = 80; y < 600; y += 140) {
      for (let x = 60; x < 600; x += 140) {
        ctx.fillText(notes[(x + y) % notes.length], x, y);
      }
    }
    ctx.globalAlpha = 1;

    // Main name text
    const name = String(text || "").trim();
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    // Fit text to canvas
    let fontSize = 92;
    const maxWidth = 520;
    while (fontSize > 44) {
      ctx.font = `800 ${fontSize}px system-ui, -apple-system, Segoe UI, Arial`;
      if (ctx.measureText(name).width <= maxWidth) break;
      fontSize -= 4;
    }

    // Soft shadow for readability
    ctx.shadowColor = "rgba(0,0,0,0.55)";
    ctx.shadowBlur = 18;
    ctx.shadowOffsetY = 6;
    ctx.fillText(name, 300, 300);
    ctx.shadowBlur = 0;

    return canvas.toDataURL("image/png");
  }

  function getDisplayImage(r) {
    if (!r) return "";
    if (!isByNameRingtone(r)) return r.image || "";
    if (generatedImageCache.has(r.id)) return generatedImageCache.get(r.id);
    const nameOnly = extractNameOnly(r.title);
    const url = makeNameImageDataUrl(nameOnly);
    generatedImageCache.set(r.id, url);
    return url;
  }

  function normalizeRingtone(r) {
    // Defensive normalization (prevents crashes from unexpected/missing fields)
    const obj = (r && typeof r === "object") ? r : {};
    const id = obj.id ?? obj._id ?? obj.uuid ?? String(Math.random());
    const title = String(obj.title ?? obj.name ?? "").trim();
    const audio = String(obj.audio ?? obj.audioUrl ?? obj.url ?? "").trim();
    const image = String(obj.image ?? obj.img ?? obj.cover ?? "").trim();
    const categories = Array.isArray(obj.categories) ? obj.categories.filter(Boolean).map(String) : [];
    const rank = (obj.rank && typeof obj.rank === "object") ? obj.rank : {};
    return {
      ...obj,
      id,
      title,
      audio,
      image,
      categories,
      rank
    };
  }

  function showView(name) {
    Object.values(views).forEach(v => v.classList.add("hidden"));
    views[name].classList.remove("hidden");
    currentView = name === "cats" ? "categories" : (name === "list" ? "list" : "details");
  }

  function setHeader(title, showBack) {
    headerTitle.textContent = title || "سمّع متصليك – أجمل الرنات";
    backBtn.classList.toggle("hidden", !showBack);
    headerLogo.classList.toggle("hidden", !!showBack); // مثل القالب الأصلي: يظهر الشعار فقط في الرئيسية
  }

  function toastMsg(msg) {
    toast.textContent = msg;
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), 1800);
  }

  function stopPreview() {
    if (isStoppingPreview) return;
    isStoppingPreview = true;
    try {
      previewAudio.pause();
      previewAudio.currentTime = 0;
      previewAudio.removeAttribute("src");
      previewAudio._retry = 0;
    try { previewAudio.load(); } catch(e) {}
    } catch (e) {}
    currentPlayingId = null;
    try { localStorage.removeItem(LAST_PLAYED_KEY); } catch (e) {}
    document.querySelectorAll("[data-play]").forEach(btn => {
      try { btn.dataset.busy = "0"; } catch(e) {}
      setPlayIcon(btn);
    });
    isStoppingPreview = false;
  }

  function playToggle(id, audioUrl, btn) {
    // Guard against double taps / rapid clicks on mobile
    if (btn?.dataset?.busy === "1") return;
    if (btn) {
      btn.dataset.busy = "1";
      setTimeout(() => { try { btn.dataset.busy = "0"; } catch(e) {} }, CLICK_GUARD_MS);
    }
    if (currentPlayingId === id) {
      stopPreview();
      return;
    }
    stopPreview();
    previewAudio.src = audioUrl;
    previewAudio.play().then(() => {
      currentPlayingId = id;
      try { localStorage.setItem(LAST_PLAYED_KEY, String(id)); } catch (e) {}
      setPauseIcon(btn);
    }).catch(() => {
      // Safe one-time retry for flaky mobile networks (no UI change)
      if (previewAudio._retry === 0) {
        previewAudio._retry = 1;
        try { previewAudio.currentTime = 0; previewAudio.play().then(() => {
          currentPlayingId = id;
          try { localStorage.setItem(LAST_PLAYED_KEY, String(id)); } catch (e) {}
          setPauseIcon(btn);
        }).catch(() => {
          try { if (btn) { setPlayIcon(btn); btn.dataset.busy = "0"; } } catch(e) {}
          toastMsg("تعذر تشغيل الصوت");
        }); return; } catch(e) {}
      }
      try { if (btn) { setPlayIcon(btn); btn.dataset.busy = "0"; } } catch(e) {}
      toastMsg("تعذر تشغيل الصوت");
    });
  }
  previewAudio.addEventListener("ended", stopPreview);
  // Robust state recovery (no UI change)
  ["error","abort","stalled"].forEach(ev => {
    previewAudio.addEventListener(ev, () => {
      // If something goes wrong mid-play, ensure icons/state reset
      if (currentPlayingId != null) stopPreview();
    });
  });
  previewAudio.addEventListener("pause", () => {
    // Some browsers pause audio when switching apps; keep UI consistent
    if (!isStoppingPreview && currentPlayingId != null) stopPreview();
  });

  // Stop audio when the page is hidden (prevents stuck playback on mobile)
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopPreview();
  });

  function ringtonesForCategory(catId) {
    const catObj = (window.CATEGORIES || []).find(c => c.id === catId);
    const catName = catObj ? catObj.name : "";

    const all = (window.RINGTONES || []).map(normalizeRingtone);

    const hasCat = (r, name) => (r.categories || []).includes(name);

    const sortByRankOrDate = (items, name) => {
      return items.slice().sort((a, b) => {
        const ra = a.rank?.[name];
        const rb = b.rank?.[name];
        const hasRa = Number.isFinite(ra);
        const hasRb = Number.isFinite(rb);
        if (hasRa && hasRb) return ra - rb;
        if (hasRa) return -1;
        if (hasRb) return 1;

        const da = Date.parse(a.createdAt || "") || 0;
        const db = Date.parse(b.createdAt || "") || 0;
        return db - da; // newer first
      });
    };

    if (catId === "latest") {
      // "الأحدث" يعرض كل النغمات من كل الأقسام
      // مع استثناء أي نغمة تنتمي لأي قسم يحتوي اسمه على كلمة "بالاسم"
      const filtered = all.filter(r => !((r.categories || []).some(n => String(n || "").includes("بالاسم"))));
      return filtered.slice().sort((a, b) => (Date.parse(b.createdAt || "") || 0) - (Date.parse(a.createdAt || "") || 0));
    }

    if (catId === "popular") {
      // "الأكثر تحميلًا" بحسب ترتيب rank إن وجد
      const popularName = ((window.CATEGORIES || []).find(c => c.id === "popular") || {}).name || "الأكثر تحميلًا";
      const filtered = all.filter(r => hasCat(r, popularName));
      return sortByRankOrDate(filtered, popularName);
    }

    // باقي الأقسام
    const filtered = catName ? all.filter(r => hasCat(r, catName)) : all;
    return catName ? sortByRankOrDate(filtered, catName) : filtered;
  }

  function renderList(catId, query) {
    // Cleanup old listeners from previous render
    try { listAbort.abort(); } catch(e) {}
    listAbort = new AbortController();

    const q = (query || "").trim().toLowerCase();
    const items = ringtonesForCategory(catId).filter(r => {
      if (!q) return true;
      return String(r.title || "").toLowerCase().includes(q);
    });

    listGrid.innerHTML = "";
    items.forEach((r) => {
      const row = document.createElement("div");
      row.className = "tone";

      const img = document.createElement("img");
      img.className = "thumb";
      img.src = getDisplayImage(r);
      img.alt = r.title || "";
      img.loading = "lazy";
      img.onerror = () => { img.onerror = null; img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO2Y7u8AAAAASUVORK5CYII="; };

      const name = document.createElement("div");
      name.className = "tone-name";
      name.textContent = r.title || "";

      const play = document.createElement("button");
      play.className = "btn play";
      play.dataset.play = r.id;
      setPlayIcon(play);
      play.addEventListener("click", (e) => {
        e.stopPropagation();
        playToggle(r.id, r.audio, play);
      });
const actions = document.createElement("div");
      actions.className = "tone-actions";

      const subscribe = document.createElement("button");
      subscribe.className = "btn primary subscribe";
      subscribe.textContent = "اشتراك";
      subscribe.addEventListener("click", (e) => {
        e.stopPropagation();
        // List card does not execute subscription; it only opens details
        openDetails(r.id);
      }, { signal: listAbort.signal });

      actions.append(play, subscribe);
      row.append(img, name, actions);
      listGrid.appendChild(row);
    });

    if (items.length === 0) {
      const empty = document.createElement("div");
      empty.className = "empty";
      empty.textContent = "لا توجد نتائج.";
      listGrid.appendChild(empty);
    }
  }


  function renderCategories() {
    categoriesGrid.innerHTML = "";
    window.CATEGORIES.forEach((cat, index) => {
      const btn = document.createElement("button");
      btn.className = "cat-card";
      btn.style.animationDelay = `${index * 80}ms`;

      const bg = document.createElement("div");
      bg.className = "cat-bg";
      bg.style.backgroundImage = `url('${cat.image || ""}')`;

      const overlay = document.createElement("div");
      overlay.className = "cat-overlay";

      const shine = document.createElement("div");
      shine.className = "cat-shine";

      const name = document.createElement("div");
      name.className = "cat-name";
      name.textContent = cat.name;

      btn.append(bg, overlay, shine, name);
      btn.onclick = () => openList(cat.id);
      categoriesGrid.appendChild(btn);
    });
  }

  function openList(catId, opts = {}) {
    const __push = opts.push !== false;
    stopPreview();
    selectedCategory = catId;
    selectedRingtoneId = null;

    const cat = window.CATEGORIES.find(c => c.id === catId);
    setHeader(cat ? cat.name : "النغمات", true);

    // Search UI
    currentQuery = "";
    if (searchInput) searchInput.value = "";
    if (searchBar) searchBar.classList.add("hidden");
    if (searchBtn) searchBtn.classList.remove("hidden");

    showView("list");
    renderList(catId, currentQuery);

    if (__push) history.pushState({ view: "list", catId }, "", `#list-${encodeURIComponent(catId)}`);
  }

  function makeSmsLink(number, body) {
    const encoded = encodeURIComponent(body || "");
    return `sms:${number}?&body=${encoded}`;
  }

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    }
  }

  function openDetails(ringtoneId, opts = {}) {
    const __push = opts.push !== false;
    stopPreview();
    if (searchBtn) searchBtn.classList.add("hidden");
    if (searchBar) searchBar.classList.add("hidden");
    selectedRingtoneId = ringtoneId;
    const raw = (window.RINGTONES || []).find(x => x.id === ringtoneId);
    if (!raw) return;
    const r = normalizeRingtone(raw);

    setHeader(r.title, true);
    showView("details");

    detailsImage.src = getDisplayImage(r);
    detailsImage.alt = r.title;
    detailsImage.onerror = () => { detailsImage.onerror = null; detailsImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO2Y7u8AAAAASUVORK5CYII="; };
    detailsName.textContent = r.title;

    subsGrid.innerHTML = "";
    window.CARRIERS.forEach((c) => {
      const code = (r.codes?.[c.key]?.code || r.codes?.[(c.key === "yemen" ? "yemenMobile" : c.key)]?.code || "");
      const box = document.createElement("div");
      box.className = "sub-card";

      const left = document.createElement("div");
      left.className = "sub-left";

      const logo = document.createElement("img");
      logo.className = "carrier";
      logo.src = c.logo;
      logo.alt = c.name;

      const meta = document.createElement("div");
      meta.className = "sub-meta";
      meta.innerHTML = `
        <div class="cname">${c.name}</div>
        <div class="cnum">رقم الخدمة: ${c.number || "-"}</div>
        <div class="ccode">الكود: ${code || "-"}</div>
      `;

      left.append(logo, meta);

      const btn = document.createElement("button");
      btn.className = "btn primary";
      btn.textContent = "اشتراك";
      btn.onclick = async () => {
        if (!c.number || !code) {
          toastMsg("لا يوجد كود لهذه الشركة");
          return;
        }
        window.location.href = makeSmsLink(c.number, code);
        setTimeout(async () => {
          const ok = await copyToClipboard(code);
          toastMsg(ok ? `تم نسخ الكود: ${code}` : "تعذر نسخ الكود");
        }, 600);
      };

      box.append(left, btn);
      subsGrid.appendChild(box);
    });

    if (__push) history.pushState({ view: "details", ringtoneId }, "", `#details-${encodeURIComponent(ringtoneId)}`);
  }

  function goBack() {
    if (currentView === "details") {
      // back to list
      if (selectedCategory) openList(selectedCategory);
      else openHome();
      return;
    }
    if (currentView === "list") {
      openHome();
      return;
    }
    openHome();
  }

  function openHome(opts = {}) {
    const __push = opts.push !== false;
    stopPreview();
    selectedCategory = null;
    selectedRingtoneId = null;
    setHeader("سمّع متصليك – أجمل الرنات", false);
    if (searchBtn) searchBtn.classList.add("hidden");
    if (searchBar) searchBar.classList.add("hidden");
    showView("cats");
    if (__push) history.pushState({ view: "categories" }, "", "#");
  }

  backBtn.addEventListener("click", goBack);

  // Search controls (List view)
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      if (!searchBar) return;
      const willShow = searchBar.classList.contains("hidden");
      searchBar.classList.toggle("hidden", !willShow);
      if (willShow && searchInput) searchInput.focus();
      if (!willShow) {
        currentQuery = "";
        if (searchInput) searchInput.value = "";
        if (selectedCategory) renderList(selectedCategory, currentQuery);
      }
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      currentQuery = searchInput.value || "";
      if (selectedCategory) renderList(selectedCategory, currentQuery);
    });
  }

  if (searchClear) {
    searchClear.addEventListener("click", () => {
      currentQuery = "";
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      if (selectedCategory) renderList(selectedCategory, currentQuery);
    });
  }

  window.addEventListener("popstate", (e) => {
    const st = (e && e.state) ? e.state : (history.state || {});
    const h = location.hash || "";

    const getFromHash = (prefix) => {
      if (!h.startsWith(prefix)) return null;
      try { return decodeURIComponent(h.slice(prefix.length)); } catch { return h.slice(prefix.length); }
    };

    if ((st && st.view === "details") || h.startsWith("#details-")) {
      const id = (st && st.ringtoneId) || getFromHash("#details-");
      if (id) openDetails(id, { push: false });
      else openHome({ push: false });
      return;
    }

    if ((st && st.view === "list") || h.startsWith("#list-")) {
      const catId = (st && st.catId) || getFromHash("#list-");
      if (catId) openList(catId, { push: false });
      else openHome({ push: false });
      return;
    }

    openHome({ push: false });
  });


  // Offline hint
  function updateOnline() {
    offlineHint.classList.toggle("hidden", navigator.onLine);
  }
  window.addEventListener("online", updateOnline);
  window.addEventListener("offline", updateOnline);
  updateOnline();

  // Contact footer
  function renderContact() {
    const links = $("contactLinks");
    const social = $("socialLinks");
    if (!links || !social) return;

    const c = window.CONTACT || {};
    links.innerHTML = "";
    social.innerHTML = "";

    const phone = c.phone ? String(c.phone).trim() : "";
    const whatsapp = c.whatsapp ? String(c.whatsapp).trim() : "";
    const email = c.email ? String(c.email).trim() : "";

    const ICON = {
      phone: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8c1.6 3 3.6 5 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.2-.2 1 .4 2.2.7 3.3.7.7 0 1.1.4 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.3 21.1 2.9 13.7 2.9 4.1 2.9 3.5 3.4 3 4.1 3h3.3c.6 0 1.1.5 1.1 1.1 0 1.1.2 2.2.7 3.3.1.4 0 .9-.3 1.2l-2.3 2.2z"/></svg>`,
      whatsapp: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/></svg>`,
      email: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"/></svg>`
    };

    const makeCard = (label, value, href, iconSvg, color) => {
      if (!value) return;
      const a = document.createElement("a");
      a.className = "contact-card";
      a.href = href || "#";
      a.target = "_blank";
      a.rel = "noopener";

      const ic = document.createElement("div");
      ic.className = "contact-ic";
      if (color) ic.style.color = color;
      ic.innerHTML = iconSvg;

      const meta = document.createElement("div");
      meta.className = "contact-meta";

      const l = document.createElement("div");
      l.className = "contact-label";
      l.textContent = label;

      const v = document.createElement("div");
      v.className = "contact-value";
      v.textContent = value;

      meta.append(l, v);
      a.append(ic, meta);
      links.appendChild(a);
    };

    makeCard("اتصال", phone, phone ? `tel:${phone}` : "", ICON.phone, "#7dd3fc");
    makeCard("واتساب", whatsapp, whatsapp ? `https://wa.me/${String(whatsapp).replace(/\D/g, "")}` : "", ICON.whatsapp, "#25D366");
    makeCard("ايميل", email, email ? `mailto:${email}` : "", ICON.email, "#a78bfa");

    // Social icons (circular, one row)
    const s = (c.social || {});
    const SICON = {
      instagram: { label:"Instagram", color:"#E1306C", svg:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.2 6.9a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z"/></svg>`},
      telegram: { label:"Telegram", color:"#2AABEE", svg:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.8 4.6c.2-.8-.6-1.4-1.3-1.1L2.7 10.4c-.9.4-.8 1.7.1 2l4.6 1.5 1.8 5.7c.2.7 1.1.9 1.6.4l2.6-2.5 5.1 3.8c.6.4 1.4.1 1.6-.7l3-15zM9.6 14.2l8.8-7.6-6.9 9.1-.3 3.7-1.8-5.2z"/></svg>`},
      x: { label:"X", color:"#ffffff", svg:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M18.9 2H22l-6.9 7.9L23 22h-6.7l-5.2-6.7L5.2 22H2l7.4-8.5L1 2h6.7l4.7 6.1L18.9 2zm-1.1 18h1.7L6.2 4H4.4l13.4 16z"/></svg>`},
      youtube: { label:"YouTube", color:"#FF0000", svg:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.9 4.6 12 4.6 12 4.6s-5.9 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.6.5 7.5.5 7.5.5s5.9 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"/></svg>`},
      facebook: { label:"Facebook", color:"#1877F2", svg:`<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M13.5 22v-8h2.7l.4-3H13.5V9.2c0-.9.2-1.5 1.5-1.5h1.6V5.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V11H8v3h2.2v8h3.3z"/></svg>`}
    };

    const addSocial = (key, url) => {
      if (!url) return;
      const meta = SICON[key];
      if (!meta) return;
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.setAttribute("aria-label", meta.label);
      a.title = meta.label;
      a.style.color = meta.color;
      a.innerHTML = meta.svg;
      social.appendChild(a);
    };

    addSocial("instagram", s.instagram);
    addSocial("telegram", s.telegram);
    addSocial("x", s.x);
    addSocial("youtube", s.youtube);
    addSocial("facebook", s.facebook);
  }

  // PWA install prompt

  let deferredPrompt = null;
  const installBar = $("installBar");
  const installBtn = $("installBtn");
  const installLater = $("installLater");

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBar.classList.remove("hidden");
  });

  installBtn.addEventListener("click", async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    installBar.classList.add("hidden");
  });

  installLater.addEventListener("click", () => installBar.classList.add("hidden"));

  // Service Worker
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
    });
  }

  // init
  renderCategories();
  renderContact();
  openHome();
})();