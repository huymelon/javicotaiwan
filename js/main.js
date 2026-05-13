/* ============================================================
   JAVICO – Du Học Đài Loan | main.js
   Shared nav/footer injection + UI interactions
   ============================================================ */

/* ----------------------------------------------------------
   1. SHARED NAV HTML
---------------------------------------------------------- */
const NAV_HTML = `
<div class="nav-inner">
  <a href="/index.html" class="nav-logo">
    <span class="nav-logo-star">★</span> JAVICO
  </a>
  <nav class="nav-links" id="nav-links">
    <a href="/index.html" data-page="index">Trang chủ</a>
    <a href="/cac-he.html" data-page="cac-he">Các hệ đào tạo</a>
    <a href="/truong-doi-tac.html" data-page="truong-doi-tac">Trường đối tác</a>
    <a href="/chi-phi.html" data-page="chi-phi">Chi phí</a>
    <a href="/dang-ky.html" data-page="dang-ky" class="nav-cta">Đăng ký ngay</a>
  </nav>
  <button class="nav-burger" id="nav-burger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
</div>
`;

/* ----------------------------------------------------------
   2. SHARED FOOTER HTML
---------------------------------------------------------- */
const FOOTER_HTML = `
<div class="footer-inner">
  <div class="footer-col footer-brand">
    <div class="footer-logo">★ JAVICO</div>
    <p>Tư vấn du học Đài Loan uy tín – minh bạch – hiệu quả từ 2015.</p>
    <div class="footer-socials">
      <a href="https://facebook.com/javico.vn" target="_blank" rel="noopener" aria-label="Facebook">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </a>
      <a href="https://zalo.me/0983058358" target="_blank" rel="noopener" aria-label="Zalo">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V10h2v6zm4 0h-2v-3.5c0-.83-.67-1.5-1.5-1.5S10 11.67 10 12.5V16H8v-6h2v.93c.48-.57 1.19-.93 2-.93 1.65 0 3 1.35 3 3V16z"/></svg>
      </a>
      <a href="https://www.youtube.com/@javico" target="_blank" rel="noopener" aria-label="YouTube">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#1A1A1A"/></svg>
      </a>
    </div>
  </div>

  <div class="footer-col">
    <h4>Chương trình</h4>
    <ul>
      <li><a href="/cac-he.html#du-bi">Hệ Dự Bị 1+4</a></li>
      <li><a href="/cac-he.html#vhvl">Vừa Học Vừa Làm</a></li>
      <li><a href="/cac-he.html#tu-tuc">Hệ Tự Túc</a></li>
      <li><a href="/cac-he.html#lien-thong">Liên Thông / VB2</a></li>
      <li><a href="/cac-he.html#thac-si">Thạc Sĩ</a></li>
      <li><a href="/cac-he.html#ngon-ngu">Khóa Ngôn Ngữ</a></li>
    </ul>
  </div>

  <div class="footer-col">
    <h4>Thông tin</h4>
    <ul>
      <li><a href="/truong-doi-tac.html">Trường đối tác</a></li>
      <li><a href="/chi-phi.html">Chi phí du học</a></li>
      <li><a href="/dang-ky.html">Đăng ký tư vấn</a></li>
      <li><a href="https://javico.vn/blog" target="_blank">Blog & Kinh nghiệm</a></li>
    </ul>
  </div>

  <div class="footer-col footer-contact">
    <h4>Liên hệ</h4>
    <ul>
      <li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 5.49 5.49l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <a href="tel:0983058358">0983 058 358</a>
      </li>
      <li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.6a16 16 0 0 0 5.49 5.49l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        <a href="tel:02439911189">024 3991 1189</a>
      </li>
      <li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        T2–T7: 8:00 – 18:00
      </li>
      <li>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Hà Nội & TP. HCM
      </li>
    </ul>
  </div>
</div>
<div class="footer-bottom">
  <p>© 2026 JAVICO. Tư vấn du học Đài Loan. | <a href="https://javico.vn" target="_blank">javico.vn</a></p>
</div>
`;

/* ----------------------------------------------------------
   3. INJECT NAV + FOOTER
---------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Nav
  const navEl = document.getElementById('site-nav');
  if (navEl) {
    navEl.innerHTML = NAV_HTML;
    setActiveNav();
    initBurger();
    initNavScroll();
  }

  // Footer
  const footerEl = document.getElementById('site-footer');
  if (footerEl) {
    footerEl.innerHTML = FOOTER_HTML;
  }

  // Init other UI
  initFAQ();
  initSmoothScroll();
  initCountUp();
});

/* ----------------------------------------------------------
   4. ACTIVE NAV LINK
---------------------------------------------------------- */
function setActiveNav() {
  const path = window.location.pathname;
  // Extract page key from path, e.g. "/cac-he.html" → "cac-he"
  const match = path.match(/\/([^/]+?)(?:\.html)?(?:#.*)?$/);
  const pageKey = match ? match[1] : 'index';

  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    const lp = link.getAttribute('data-page');
    if (lp === pageKey || (pageKey === '' && lp === 'index')) {
      link.classList.add('active');
    }
  });
}

/* ----------------------------------------------------------
   5. BURGER MENU
---------------------------------------------------------- */
function initBurger() {
  const burger = document.getElementById('nav-burger');
  const links  = document.getElementById('nav-links');
  if (!burger || !links) return;

  burger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!burger.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      burger.classList.remove('open');
    }
  });

  // Close on nav link click (mobile)
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      burger.classList.remove('open');
    });
  });
}

/* ----------------------------------------------------------
   6. NAV SCROLL SHADOW
---------------------------------------------------------- */
function initNavScroll() {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

/* ----------------------------------------------------------
   7. FAQ ACCORDION
---------------------------------------------------------- */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ----------------------------------------------------------
   8. SMOOTH SCROLL
---------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        const navH = document.getElementById('site-nav')?.offsetHeight || 72;
        const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* ----------------------------------------------------------
   9. COUNT-UP ANIMATION (stats bar)
---------------------------------------------------------- */
function initCountUp() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCount(el) {
  const target = parseFloat(el.getAttribute('data-count'));
  const suffix = el.getAttribute('data-suffix') || '';
  const duration = 1400;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;
    el.textContent = (Number.isInteger(target) ? Math.round(current) : current.toFixed(1)) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

/* ----------------------------------------------------------
   10. FLOATING REGISTER BUTTON (scroll > 600px)
---------------------------------------------------------- */
window.addEventListener('scroll', () => {
  const fab = document.getElementById('fab-register');
  if (!fab) return;
  fab.classList.toggle('visible', window.scrollY > 600);
}, { passive: true });
