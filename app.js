(() => {
  const tabsEl = document.getElementById("tabs");
  const listEl = document.getElementById("list");
  const searchInput = document.getElementById("searchInput");
  const countPill = document.getElementById("countPill");
  const player = document.getElementById("player");

  function stopAudio(){
    try{ player.pause(); }catch{}
    try{ player.currentTime = 0; }catch{}
    if (currentPlayId) setPlayingUI(currentPlayId, false);
    currentPlayId = null;
  }


  // CSS.escape polyfill (basic)
  if (typeof CSS === "undefined") window.CSS = {};
  if (typeof CSS.escape !== "function") {
    CSS.escape = (s) => (s + "").replace(/[^a-zA-Z0-9_-]/g, "\\$&");
  }


  let currentPlayId = null;

  function setPlayingUI(id, isPlaying){
    // clear all first
    document.querySelectorAll(".card.playing").forEach(el => el.classList.remove("playing"));
    document.querySelectorAll(".play-btn").forEach(el => { if(el) el.textContent = "▶"; });

    if (!id) return;
    const card = document.querySelector(`.card[data-id="${CSS.escape(id)}"]`);
    if (!card) return;
    const btn = card.querySelector(".play-btn");
    if (isPlaying){
      card.classList.add("playing");
      if (btn) btn.textContent = "❚❚";
    } else {
      card.classList.remove("playing");
      if (btn) btn.textContent = "▶";
    }
  }

  player.addEventListener("ended", () => {
    if (currentPlayId) setPlayingUI(currentPlayId, false);
    currentPlayId = null;
  });
  player.addEventListener("pause", () => {
    if (currentPlayId) setPlayingUI(currentPlayId, false);
  });
  player.addEventListener("play", () => {
    if (currentPlayId) setPlayingUI(currentPlayId, true);
  });

  function togglePlay(item){
    const id = item?.id || null;
    const src = item?.audio;
    if (!id || !src) return;

    // same item toggles
    if (currentPlayId === id){
      if (!player.paused){
        player.pause();
      } else {
        player.play().catch(()=>{});
      }
      return;
    }

    // switch to new item
    currentPlayId = id;
    player.src = src;
    player.play().catch(()=>{});
    setPlayingUI(id, true);
  }

  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modalClose");
  const modalX = document.getElementById("modalX");  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  const CATS = Array.isArray(window.CATEGORIES) ? window.CATEGORIES : [];
  const R = Array.isArray(window.RINGTONES) ? window.RINGTONES : [];
  const CARRIERS = Array.isArray(window.CARRIERS) ? window.CARRIERS : [];

  let activeCat = "all";
  let lastCopy = "";

  const MODAL_STATE_KEY = "tahdithi_modal_state_v1";

  function saveModalState(state){
    try{ sessionStorage.setItem(MODAL_STATE_KEY, JSON.stringify(state)); }catch{}
  }
  function loadModalState(){
    try{ return JSON.parse(sessionStorage.getItem(MODAL_STATE_KEY) || "null"); }catch{ return null; }
  }
  function clearModalState(){
    try{ sessionStorage.removeItem(MODAL_STATE_KEY); }catch{}
  }

  let modalOpen = false;
  let currentItemId = null;

  function pushModalHistory(itemId){
    try{
      // Avoid stacking multiple modal states
      if (history.state && history.state.__modal) return;
      history.pushState({__modal:true, itemId}, "", location.href);
    }catch{}
  }

  window.addEventListener("popstate", (e) => {
    // If modal is open, back should close it instead of leaving page
    if (modalOpen) {
      closeModal(true);
    }
  });

  // Restore modal after returning from SMS app or page cache
  window.addEventListener("pageshow", () => {
    const st = loadModalState();
    if (st && st.open && st.itemId) {
      const r = R.find(x => x && x.id === st.itemId);
      if (r) {
        // restore scroll first
        if (typeof st.scrollY === "number") window.scrollTo(0, st.scrollY);
        openModal(r, /*skipHistory*/ true);
      }
      clearModalState();
    }
  });

  function escapeHtml(s) {
    return (s ?? "").toString()
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function toast(msg){
    const t=document.createElement("div");
    t.className="toast";
    t.textContent=msg;
    document.body.appendChild(t);
    setTimeout(()=>t.remove(), 1800);
  }

  function makeSmsLink(number, body) {
    const encoded = encodeURIComponent(body || "");
    const ua = navigator.userAgent || "";
    const isIOS = /iPad|iPhone|iPod/i.test(ua) && !window.MSStream;
    const sep = isIOS ? "&" : "?";
    return `sms:${number}${sep}body=${encoded}`;
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

  function tabButton(id, name) {
    const b = document.createElement("button");
    b.className = "tab" + (id === activeCat ? " active" : "");
    b.textContent = name;
    b.onclick = () => { stopAudio();
      activeCat = id;
      [...tabsEl.children].forEach(x => x.classList.remove("active"));
      b.classList.add("active");
      render();
    };
    return b;
  }

  function initTabs() {
    tabsEl.innerHTML = "";
    tabsEl.appendChild(tabButton("all", "الكل"));
    for (const c of CATS) {
    if ((c.name || "").trim() === "الأحدث") continue;
    tabsEl.appendChild(tabButton(c.id, c.name));
  }
  }

  function inCat(it) {
    if (activeCat === "all") return true;
    const cats = it?.categories || [];
    return cats.includes(activeCat) || cats.includes(CATS.find(x=>x.id===activeCat)?.name);
  }

  function matchesSearch(it, q) {
    if (!q) return true;
    const t = (it?.title || "").toLowerCase();
    const p = (it?.performer || "").toLowerCase();
    return t.includes(q) || p.includes(q);
  }

  function getImage(it) {
    return it?.image || "./icon-192.png";
  }

  function play(it) {
    const src = it?.audio;
    if (!src) return;
    try {
      player.src = src;
      player.play().catch(() => {});
    } catch {}
  }

  function getCodeForCarrier(r, carrierKey){
    const ck = carrierKey;
    return (
      r?.codes?.[ck]?.code ||
      r?.codes?.[(ck === "yemen" ? "yemenMobile" : ck)]?.code ||
      ""
    );
  }

  function openModal(r, skipHistory=false) {
    stopAudio();
    modalTitle.textContent = "الاشتراك";
    modalOpen = true;
    currentItemId = r?.id || null;
    if (!skipHistory) pushModalHistory(currentItemId);
    const title = escapeHtml(r?.title || "");
    const performer = escapeHtml(r?.performer || "");

    const carrierRows = CARRIERS.map((c) => {
      const code = getCodeForCarrier(r, c.key);
      if (!code) return "";
      const logo = escapeHtml(c.logo || "");
      const name = escapeHtml(c.name || "");
      const num = escapeHtml(c.number || "");
      return `
        <div class="carrier-row">
          <div class="c-left">
            <img src="${logo}" alt="${name}">
            <div class="c-meta">
              <div class="c-name">${name}</div>
              <div class="c-sub">رقم الخدمة: ${num} • الكود: ${escapeHtml(code)}</div>
            </div>
          </div>
          <button class="c-btn ${escapeHtml(c.key)}" data-key="${escapeHtml(c.key)}">اشتراك</button>
        </div>
      `;
    }).join("");

    modalBody.innerHTML = `
      <div style="font-weight:900;font-size:16px;margin-bottom:6px">${title}</div>
      ${performer ? `<div style="color:rgba(255,255,255,.65);font-size:12px;margin-bottom:10px">${performer}</div>` : ``}
      <div style="color:rgba(255,255,255,.75);font-size:13px;margin-bottom:8px">اضغط اشتراك ثم أرسل الكود عبر SMS.</div>
      <div class="carriers">${carrierRows || `<div class="pill" style="text-align:center">لا توجد أكواد اشتراك لهذه النغمة.</div>`}</div>
    `;

    lastCopy = ""; // will update when user selects carrier
    modal.classList.remove("hidden");

    // wire carrier buttons
    modalBody.querySelectorAll(".c-btn").forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        e.preventDefault();
        const key = btn.getAttribute("data-key") || "";
        const carrier = CARRIERS.find(x => x.key === key);
        const code = getCodeForCarrier(r, key);
        if (!carrier?.number || !code) { toast("لا يوجد كود لهذه الشركة"); return; }
        lastCopy = code;

        let didHide = false;
        const onVis = () => { if (document.visibilityState === "hidden") didHide = true; };
        window.addEventListener("pagehide", () => stopAudio());
  document.addEventListener("visibilitychange", onVis, { once:true });

        // Copy code now (so user can paste even if SMS doesn't open)
        await copyToClipboard(code);
        // Save state so returning/back won't kick you out of the site
        saveModalState({open:true, itemId: currentItemId, scrollY: window.scrollY});
        window.location.href = makeSmsLink(carrier.number, code);

        setTimeout(async () => {
          if (!didHide) {
            const ok = await copyToClipboard(code);
            toast(ok ? `تم نسخ كود النغمة: ${code}. قم بإرسالها إلى رقم الخدمة: ${carrier.number}.` : `لم يتم فتح الرسائل. الكود: ${code} • رقم الخدمة: ${carrier.number}`);
          }
        }, 700);
      });
    });
  }

  function closeModal(fromPop=false) {
    stopAudio(); modal.classList.add("hidden"); modalOpen = false; currentItemId = null; if (!fromPop) { try{ if (history.state && history.state.__modal) history.back(); }catch{} } }
  modalClose.onclick = () => closeModal();
  modalX.onclick = () => closeModal();
  function card(r) {
    const title = escapeHtml(r?.title || "بدون عنوان");
    const performer = escapeHtml(r?.performer || "");
    const img = getImage(r);

    const wrap = document.createElement("div");
    wrap.className = "card";
    if (r?.id) wrap.dataset.id = r.id;
    wrap.innerHTML = `
      <button class="btn-sub" type="button">اشتراك</button>
      <div class="meta">
        <div class="title">${title}</div>
        <div class="sub">${performer || "&nbsp;"}</div>
      </div>
      <div class="thumb">
        <img alt="" loading="lazy" decoding="async" src="${img}">
        <div class="play-overlay" aria-hidden="true">
          <div class="play-btn">▶</div>
        </div>
      </div>
    `;    wrap.querySelector(".btn-sub").onclick = (e) => { e.stopPropagation(); openModal(r); };    // تشغيل/إيقاف عند الضغط على الصورة فقط
    const thumb = wrap.querySelector(".thumb");
    if (thumb) thumb.onclick = (e) => { e.stopPropagation(); togglePlay(r); };
    const ov = wrap.querySelector(".play-overlay");
    if (ov) ov.onclick = (e) => { e.stopPropagation(); togglePlay(r); };
    // Card tap toggles play/pause (except subscribe button)
    wrap.addEventListener("click", (e) => {
      const t = e.target;
      if (t && (t.closest("button") || t.closest("a"))) return;
      togglePlay(r);
    }, { passive: true });

    return wrap;
  }

  function render() {
    const q = (searchInput.value || "").trim().toLowerCase();
    const arr = R.filter(inCat).filter(it => matchesSearch(it, q));

    countPill.textContent = `${arr.length} نغمة`;
    listEl.innerHTML = "";
    if (arr.length === 0) {
      const empty = document.createElement("div");
      empty.className = "pill";
      empty.style.textAlign = "center";
      empty.style.marginTop = "10px";
      empty.textContent = "لا توجد نتائج.";
      listEl.appendChild(empty);
      return;
    }
    for (const it of arr) listEl.appendChild(card(it));
  }

  searchInput.addEventListener("input", render);

  initTabs();
  render();
})();