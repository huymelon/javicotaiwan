/* =====================================================
   JAVICO — main.js
   Inject nav/footer + interactions (FAQ, counter, reveal, FAB, mobile menu)
   ===================================================== */
(function () {
  'use strict';

  /* -------------------------------------------------
     1) NAV + FOOTER MARKUP
  -------------------------------------------------- */
  const NAV_HTML = `
    <div class="nav-inner">
      <a href="index.html" class="brand" aria-label="JAVICO">
        <span class="logo-box" style="background:#000;display:flex;align-items:center;justify-content:center;padding:2px;">
          <img src="img/Logo JVC unlock BG.png" alt="JAVICO" width="38" height="38" style="display:block;object-fit:contain;">
        </span>
        <span class="brand-name">JAVICO<br><small style="font-weight:500;color:#888">Du học Đài Loan</small></span>
      </a>
      <nav class="nav-links" aria-label="Main">
        <a href="index.html" data-page="index">Trang chủ</a>
        <a href="cac-he.html" data-page="cac-he">Các hệ</a>
        <a href="chi-phi.html" data-page="chi-phi">Chi phí</a>
        <a href="truong-doi-tac.html" data-page="truong-doi-tac">Trường đối tác</a>
        <a href="/blog/" data-page="blog">Blog</a>
        <a href="dang-ky.html" data-page="dang-ky">Liên hệ</a>
      </nav>
      <div class="nav-cta">
        <a href="tel:0983058358" class="btn btn-outline" aria-label="Hotline">📞 0983 058 358</a>
        <a href="dang-ky.html" class="btn btn-primary">Đăng ký</a>
        <button class="burger" id="js-burger" aria-label="Menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
    <div class="mobile-menu" id="js-mobile-menu">
      <a href="index.html" data-page="index">Trang chủ</a>
      <a href="cac-he.html" data-page="cac-he">Các hệ đào tạo</a>
      <a href="chi-phi.html" data-page="chi-phi">Chi phí</a>
      <a href="truong-doi-tac.html" data-page="truong-doi-tac">Trường đối tác</a>
      <a href="/blog/" data-page="blog">Blog</a>
      <a href="dang-ky.html" data-page="dang-ky">Đăng ký tư vấn</a>
      <div class="mm-cta">
        <a href="tel:0983058358" class="btn btn-outline">📞 Gọi</a>
        <a href="https://zalo.me/0983058358" target="_blank" rel="noopener" class="btn btn-mint">💬 Zalo</a>
      </div>
    </div>
  `;

  const FOOTER_HTML = `
    <div class="footer-inner">
      <div class="footer-col footer-brand">
        <a href="index.html" class="brand" style="margin-bottom:14px;">
          <span class="logo-box" style="background:#000;display:flex;align-items:center;justify-content:center;padding:2px;">
            <img src="img/Logo JVC unlock BG.png" alt="JAVICO" width="34" height="34" style="display:block;object-fit:contain;">
          </span>
          <span class="footer-logo" style="margin:0;">JAVICO</span>
        </a>
        <p>Tư vấn du học Đài Loan uy tín từ 2015. Học bổng 100% • Vừa học vừa kiếm xèng • Hỗ trợ A-Z.</p>
        <div class="footer-socials">
          <a href="#" aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.5s-.2-1.5-.9-2.2c-.8-.9-1.8-.9-2.2-1C16.6 4 12 4 12 4s-4.6 0-7.9.3c-.4.1-1.4.1-2.2 1C1.2 6 1 7.5 1 7.5S.8 9.3.8 11.1v1.6c0 1.8.2 3.6.2 3.6s.2 1.5.9 2.2c.8.9 1.9.9 2.4 1 1.7.2 7.7.3 7.7.3s4.6 0 7.9-.3c.4-.1 1.4-.1 2.2-1 .7-.7.9-2.2.9-2.2s.2-1.8.2-3.6v-1.6c0-1.8-.2-3.6-.2-3.6zM9.7 14.6V8.4l6 3.1-6 3.1z"/></svg></a>
          <a href="#" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.6 6.3c-1.4-.1-2.6-1.1-3-2.4 0-.4-.1-.7-.1-1.1h-3.5v14a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 1 1 0-5c.3 0 .5 0 .8.1V11a6 6 0 1 0 5.2 5.9V9.3c1 .7 2.2 1.1 3.5 1.1V6.9c-.1 0-.3-.5-.4-.6z"/></svg></a>
          <a href="https://zalo.me/0983058358" target="_blank" rel="noopener" aria-label="Zalo"><strong style="font-size:11px;font-weight:800;">Zalo</strong></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Du học</h4>
        <ul>
          <li><a href="cac-he.html">Các hệ đào tạo</a></li>
          <li><a href="cac-he.html#dieu-duong">Điều dưỡng (học bổng toàn phần)</a></li>
          <li><a href="cac-he.html#vhvl">Vừa học vừa làm</a></li>
          <li><a href="cac-he.html#du-bi">Hệ Dự Bị 1+4</a></li>
          <li><a href="cac-he.html#thac-si">Hệ Thạc Sĩ</a></li>
          <li><a href="cac-he.html#ngon-ngu">Khóa Ngôn Ngữ</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Thông tin</h4>
        <ul>
          <li><a href="truong-doi-tac.html">Trường đối tác</a></li>
          <li><a href="chi-phi.html">Chi phí</a></li>
          <li><a href="chi-phi.html#goi-dich-vu">Gói dịch vụ</a></li>
          <li><a href="chi-phi.html#tocfl">Khóa tiếng Trung TOCFL</a></li>
          <li><a href="chi-phi.html#chung-thuc">Dịch vụ chứng thực</a></li>
          <li><a href="chi-phi.html#hoc-bong-moe">Săn học bổng MOE</a></li>
          <li><a href="chi-phi.html#cam-ket">Cam kết hoàn tiền</a></li>
          <li><a href="index.html#faq">Câu hỏi thường gặp</a></li>
        </ul>
      </div>
      <div class="footer-col foot-contact">
        <h4>Liên hệ</h4>
        <div class="ci">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9 v3 a2 2 0 0 1-2.2 2 a19.8 19.8 0 0 1-8.6-3.1 a19.5 19.5 0 0 1-6-6 a19.8 19.8 0 0 1-3.1-8.7 A2 2 0 0 1 4.1 2 h3 a2 2 0 0 1 2 1.7 c.1.9.3 1.8.6 2.6 a2 2 0 0 1-.5 2.1 L7.9 9.7 a16 16 0 0 0 6 6 l1.3-1.3 a2 2 0 0 1 2.1-.5 c.9.3 1.7.5 2.6.6 a2 2 0 0 1 1.7 2 z"/></svg>
          <div><a href="tel:0983058358" style="color:inherit;">0983 058 358</a><br><a href="tel:02439911189" style="color:inherit;font-size:12.5px;">024 3991 1189</a></div>
        </div>
        <div class="ci">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4 H20 a2 2 0 0 1 2 2 V18 a2 2 0 0 1-2 2 H4 a2 2 0 0 1-2-2 V6 a2 2 0 0 1 2-2 z"/><polyline points="22 6 12 13 2 6"/></svg>
          <span>tuvanduhoc@javico.vn</span>
        </div>
        <div class="ci">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>Hà Nội &amp; TP. Hồ Chí Minh</span>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© 2026 JAVICO – Du học Đài Loan. All rights reserved.</span>
      <span>Hotline: <a href="tel:0983058358">0983 058 358</a> · Zalo · javico.vn</span>
    </div>
  `;

  /* -------------------------------------------------
     2) INJECT NAV + FOOTER
  -------------------------------------------------- */
  function injectChrome() {
    const nav = document.getElementById('site-nav');
    if (nav && !nav.dataset.injected) {
      nav.innerHTML = NAV_HTML;
      nav.dataset.injected = '1';
    }
    const footer = document.getElementById('site-footer');
    if (footer && !footer.dataset.injected) {
      footer.innerHTML = FOOTER_HTML;
      footer.dataset.injected = '1';
    }
    markActiveNav();
  }

  function markActiveNav() {
    let page = (location.pathname.split('/').pop() || 'index.html').replace('.html', '');
    if (!page) page = 'index';
    document.querySelectorAll('[data-page]').forEach(a => {
      if (a.getAttribute('data-page') === page) a.classList.add('active');
    });
  }

  /* -------------------------------------------------
     3) MOBILE MENU
  -------------------------------------------------- */
  function setupMobileMenu() {
    const burger = document.getElementById('js-burger');
    const menu = document.getElementById('js-mobile-menu');
    if (!burger || !menu) return;
    burger.addEventListener('click', () => {
      const open = burger.classList.toggle('open');
      menu.classList.toggle('open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      burger.classList.remove('open');
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }));
  }

  /* -------------------------------------------------
     4) NAV SCROLLED SHADOW
  -------------------------------------------------- */
  function setupNavScroll() {
    const nav = document.querySelector('header.nav, #site-nav');
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* -------------------------------------------------
     5) FAQ ACCORDION
  -------------------------------------------------- */
  function setupFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
      const q = item.querySelector('.faq-q');
      if (!q) return;
      q.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        // optional: close siblings for accordion behaviour
        const list = item.closest('.faq-list');
        if (list) list.querySelectorAll('.faq-item.open').forEach(o => {
          if (o !== item) o.classList.remove('open');
        });
        item.classList.toggle('open', !isOpen);
      });
    });
  }

  /* -------------------------------------------------
     6) COUNTER ANIMATION (.stat-num[data-count])
  -------------------------------------------------- */
  function setupCounters() {
    const nums = document.querySelectorAll('.stat-num[data-count]');
    if (!nums.length || !('IntersectionObserver' in window)) {
      // Fallback: render final number directly
      nums.forEach(n => {
        const target = parseInt(n.dataset.count, 10);
        const suffix = n.dataset.suffix || '';
        n.textContent = formatNum(target) + suffix;
      });
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !e.target.dataset.done) {
          e.target.dataset.done = '1';
          animateCounter(e.target);
          io.unobserve(e.target);
        }
      });
    }, { threshold: .4 });
    nums.forEach(n => io.observe(n));
  }
  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 3); // ease-out cubic
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const v = Math.floor(target * ease(p));
      el.textContent = formatNum(v) + suffix;
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = formatNum(target) + suffix;
    }
    requestAnimationFrame(tick);
  }
  function formatNum(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  /* -------------------------------------------------
     7) SCROLL REVEAL
  -------------------------------------------------- */
  function setupReveal() {
    // Auto-tag common containers
    const autoSelectors = [
      '.prog-card', '.school-card', '.testi-card', '.feat-item',
      '.why-card', '.cost-item', '.price-card', '.he-mini-card',
      '.special-card', '.contact-block', '.school-list-item',
      '.major-cat', '.he-detail-content', '.he-detail-side',
      '.sec-head', '.section-head', '.guarantee-box', '.process-step',
      '.school-tag', '.major-pill'
    ];
    document.querySelectorAll(autoSelectors.join(',')).forEach((el, i) => {
      if (!el.classList.contains('reveal')) el.classList.add('reveal');
      // stagger groups of cards in same row
      const idx = i % 3;
      if (idx === 1) el.classList.add('delay-1');
      else if (idx === 2) el.classList.add('delay-2');
    });

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('in-view'));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));
  }

  /* -------------------------------------------------
     8) FAB VISIBILITY
  -------------------------------------------------- */
  function setupFAB() {
    const fab = document.getElementById('fab-register') || document.querySelector('.fab');
    if (!fab) return;
    const onScroll = () => {
      fab.classList.toggle('visible', window.scrollY > 400);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* -------------------------------------------------
     9) SMOOTH SCROLL FOR # ANCHORS
  -------------------------------------------------- */
  function setupSmoothScroll() {
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const tgt = document.querySelector(id);
      if (!tgt) return;
      e.preventDefault();
      const navH = (document.querySelector('header.nav')?.offsetHeight) || 0;
      const y = tgt.getBoundingClientRect().top + window.pageYOffset - navH - 12;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  }

  /* -------------------------------------------------
     10) DECO PARALLAX (subtle)
  -------------------------------------------------- */
  function setupParallax() {
    const decos = document.querySelectorAll('.hero .deco-circle, .page-hero .deco-circle');
    if (!decos.length) return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      decos.forEach((d, i) => {
        const speed = (i % 2 === 0 ? .12 : .08);
        d.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
    }, { passive: true });
  }

  /* -------------------------------------------------
     11) PREFILL FORM FROM QUERY (?goi=vip, ?truong=)
  -------------------------------------------------- */
  function prefillForm() {
    const params = new URLSearchParams(location.search);
    const goi = params.get('goi');
    const truong = params.get('truong');
    const msg = document.getElementById('message');
    if (msg && (goi || truong)) {
      const lines = [];
      if (goi)    lines.push('Quan tâm gói: ' + goi.toUpperCase());
      if (truong) lines.push('Trường mong muốn: ' + truong);
      msg.value = (lines.join('\n') + '\n\n' + (msg.value || '')).trim();
    }
  }

  /* -------------------------------------------------
     BOOT
  -------------------------------------------------- */
  function init() {
    injectChrome();
    setupMobileMenu();
    setupNavScroll();
    setupFAQ();
    setupCounters();
    setupReveal();
    setupFAB();
    setupSmoothScroll();
    setupParallax();
    prefillForm();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
