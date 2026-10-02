/* ============================================================
   PaceFly | ui.js — camada de interface (modernização v2)
   Carregado em TODAS as páginas. Não altera conteúdo nem a forma
   de editar o site (pastas conteudo/ e imagens/ continuam iguais).
   Comportamentos: cabeçalho inteligente, animações de entrada,
   destaque da seção no menu, voltar-ao-topo, Instagram flutuante,
   barra de navegação inferior (mobile), menu mobile aprimorado e
   contagem animada de números.
   ============================================================ */
(function () {
  "use strict";
  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  // Ícones (SVG) usados na barra inferior
  var IC = {
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5 12 5l8 6.5"/><path d="M6 10.5V19h12v-8.5"/><path d="M10 19v-4.5h4V19"/></svg>',
    cal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="15" rx="2.5"/><path d="M4 9.5h16M8 3v4M16 3v4"/></svg>',
    trophy: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4.5h10V9a5 5 0 0 1-10 0V4.5Z"/><path d="M7 6H4.5V8A2.5 2.5 0 0 0 7 10.5M17 6h2.5V8A2.5 2.5 0 0 1 17 10.5M9.5 19.5h5M12 14v5.5"/></svg>',
    bulb: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.45 1 1.15 1.1 1.9l.1.8h4.8l.1-.8c.1-.75.5-1.45 1.1-1.9A6 6 0 0 0 12 3Z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none"/></svg>'
  };
  var IG_URL = "https://www.instagram.com/paceflyrunning";

  ready(function () {
    var body = document.body;

    /* 1. Cabeçalho encolhe e ganha sombra ao rolar */
    var head = document.querySelector("header");
    function onScroll() { if (head) head.classList.toggle("scrolled", window.scrollY > 10); }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* 2. Instagram flutuante (desktop) */
    if (!document.querySelector(".fab-ig")) {
      var ig = document.createElement("a");
      ig.className = "fab-ig";
      ig.href = IG_URL; ig.target = "_blank"; ig.rel = "noopener";
      ig.setAttribute("aria-label", "Siga a PaceFly no Instagram");
      ig.innerHTML = '<span class="ig-ic">' + IC.ig + '</span><span class="lbl">Siga no Instagram</span>';
      body.appendChild(ig);
    }

    /* 3. Botão voltar ao topo */
    var top = document.querySelector(".to-top");
    if (!top) {
      top = document.createElement("button");
      top.className = "to-top";
      top.setAttribute("aria-label", "Voltar ao topo");
      top.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V6M6 12l6-6 6 6"/></svg>';
      body.appendChild(top);
    }
    window.addEventListener("scroll", function () { top.classList.toggle("on", window.scrollY > 600); }, { passive: true });
    top.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

    /* 4. Barra de navegação inferior (aparece só no mobile, via CSS) */
    if (!document.querySelector(".botnav")) {
      function item(href, svg, label, ext, cls) {
        return '<a href="' + href + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + (cls ? ' class="' + cls + '"' : "") +
          '><span class="bn-ic">' + svg + '</span><span class="bn-lb">' + label + "</span></a>";
      }
      var bn = document.createElement("nav");
      bn.className = "botnav";
      bn.setAttribute("aria-label", "Navegação rápida");
      bn.innerHTML =
        item("index.html#top", IC.home, "Início") +
        item("index.html#calendario", IC.cal, "Provas") +
        item("rankings.html", IC.trophy, "Ranking") +
        item("index.html#dicas", IC.bulb, "Dicas") +
        item(IG_URL, IC.ig, "Instagram", true, "ig");
      body.appendChild(bn);
    }

    /* 5. Menu mobile: fundo escurecido + trava de rolagem (observa a classe .open) */
    var menu = document.getElementById("menu");
    if (menu) {
      if (!document.querySelector(".menu-backdrop")) {
        var bd = document.createElement("div");
        bd.className = "menu-backdrop";
        body.appendChild(bd);
        bd.addEventListener("click", function () { menu.classList.remove("open"); });
      }
      var mo = new MutationObserver(function () {
        body.classList.toggle("menu-open", menu.classList.contains("open"));
      });
      mo.observe(menu, { attributes: true, attributeFilter: ["class"] });
    }

    /* 6. Animações de entrada ao rolar + destaque da seção no menu */
    if ("IntersectionObserver" in window) {
      body.classList.add("anim");
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("vis"); io.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
      document.querySelectorAll(
        ".hero-grid>div,.cidade-head,.sec-head,.pilar,.ps-item,.rkh-txt,.rkh-podio,.assess-grid>div,.news-cta," +
        ".ev-card,.on-card,.rk-step,.rk-hero-inner,.art-resumo,.art-body>p,.rk-podio,.rk-table-wrap"
      ).forEach(function (el) { el.classList.add("reveal"); io.observe(el); });

      var links = [].slice.call(document.querySelectorAll('.menu a[href^="#"]'));
      var mapa = links.map(function (a) {
        var s = document.getElementById(a.getAttribute("href").slice(1));
        return s ? { a: a, s: s } : null;
      }).filter(Boolean);
      if (mapa.length) {
        var spy = new IntersectionObserver(function (es) {
          es.forEach(function (e) {
            if (!e.isIntersecting) return;
            var m = mapa.filter(function (x) { return x.s === e.target; })[0];
            if (!m) return;
            links.forEach(function (a) { a.classList.remove("ativo"); });
            m.a.classList.add("ativo");
          });
        }, { rootMargin: "-45% 0px -50% 0px" });
        mapa.forEach(function (m) { spy.observe(m.s); });
      }
    }

    /* 7. Traço amarelo animado sob a palavra-destaque do hero */
    var hero = document.querySelector(".hero");
    if (hero) { requestAnimationFrame(function () { setTimeout(function () { hero.classList.add("lit"); }, 180); }); }

    /* 8. Contagem animada de números (hero e provas sociais) */
    function countUp(el) {
      var raw = (el.textContent || "").trim();
      var m = raw.match(/^(\d+)(\+?)$/);
      if (!m) return;
      var alvo = parseInt(m[1], 10), suf = m[2] || "", dur = 1100, ini = null;
      function step(ts) {
        if (!ini) ini = ts;
        var p = Math.min((ts - ini) / dur, 1);
        el.textContent = Math.round(p * alvo) + (p === 1 ? suf : "");
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    }
    if ("IntersectionObserver" in window) {
      var cio = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); } });
      }, { threshold: 0.6 });
      document.querySelectorAll(".ps-item b:not(#psRanking), .hero-stats b, .rk-hero-stats b").forEach(function (el) { cio.observe(el); });
    }

    /* 9. Nº de corredores no ranking (prova social na home) */
    var ps = document.getElementById("psRanking");
    if (ps) {
      fetch("assets/ranking_2026.json", { cache: "no-store" })
        .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
        .then(function (d) {
          var n = (d.atletas || []).length;
          if (n > 0) { ps.textContent = (n >= 40 ? (Math.floor(n / 10) * 10) + "+" : String(n)); countUp(ps); }
        })
        .catch(function () {});
    }

    /* 10. Contagem regressiva para a próxima prova (só na home) */
    (function () {
      var sec = document.getElementById("countdown");
      if (!sec) return;
      var evs = window.PACEFLY_EVENTOS || [];
      if (!evs.length) return;
      var nomeEl = document.getElementById("cdNome"),
          metaEl = document.getElementById("cdMeta"),
          clockEl = document.getElementById("cdClock"),
          linkEl = document.getElementById("cdLink");
      if (!nomeEl || !clockEl) return;
      var curId = null;
      function z(n) { return (n < 10 ? "0" : "") + n; }
      function bloc(v, l) { return '<div class="cd-b"><b>' + z(v) + "</b><small>" + l + "</small></div>"; }
      function pick() {
        var now = new Date(), mid = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        var arr = evs.map(function (e) {
          return { e: e, d: new Date(+e.ano, (+e.mes) - 1, +e.dia), alvo: new Date(+e.ano, (+e.mes) - 1, +e.dia, 7, 0, 0) };
        }).filter(function (x) { return x.d >= mid; }).sort(function (a, b) { return a.d - b.d; });
        return arr[0] || null;
      }
      function tick() {
        var p = pick();
        if (!p) { sec.hidden = true; return; }
        sec.hidden = false;
        if (p.e.id !== curId) {
          curId = p.e.id;
          nomeEl.textContent = p.e.nome;
          if (metaEl) metaEl.textContent = (p.e.dataExtenso || (p.e.dia + "/" + p.e.mes + "/" + p.e.ano)) + " · " + (p.e.cidade || "");
          if (linkEl) linkEl.href = "evento.html?id=" + p.e.id;
        }
        var diff = p.alvo - new Date();
        if (diff <= 0) { clockEl.innerHTML = '<span class="cd-hoje">É hoje! Boa prova.</span>'; return; }
        var d = Math.floor(diff / 86400000), h = Math.floor(diff / 3600000) % 24, m = Math.floor(diff / 60000) % 60, s = Math.floor(diff / 1000) % 60;
        clockEl.innerHTML = bloc(d, "dias") + bloc(h, "h") + bloc(m, "min") + bloc(s, "s");
      }
      tick();
      setInterval(tick, 1000);
    })();
  });
})();
