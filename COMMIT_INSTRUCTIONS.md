# 🚀 Commit + push lên GitHub — v3.0 Editorial Hero

> Sandbox không push trực tiếp được. Henry chạy các bước sau từ Terminal trên máy Mac.

---

## ⚠️ Bước 0 — Dọn dẹp PNG portrait gốc (~16MB)

Có 7 file PNG lớn (mỗi file 2.4–3.2MB) đã được optimize thành JPG. Cần xoá bản PNG trước khi commit để repo nhẹ:

```bash
cd /Users/huymelon/Desktop/javicotaiwan/img/brand
rm portrait-dhs-nam.png \
   portrait-dhs-nu-confident.png \
   portrait-dhs-nu-contemplative.png \
   portrait-dhs-nu-studious.png \
   portrait-ph-chu.png \
   portrait-ph-co.png \
   texture-paper.png
```

(Claude trong sandbox không xoá được do mount read-only — phải xoá bằng tay.)

Sau khi xoá, folder `img/brand/` còn ~17 file, tổng **<2MB**.

---

## Bước 1 — Vào folder repo

```bash
cd /Users/huymelon/Desktop/javicotaiwan
```

## Bước 2 — Xem changes

```bash
git status
git diff --stat
```

Expected:
```
modified:   index.html         (hero v3.0 — 2-col layout với PNG visuals)
modified:   css/style.css      (+360 lines tổng — editorial v2.1 + v3.0)

new files (templates/):
  templates/_lib.css
  templates/index.html
  templates/key-visual.html
  templates/brand-guideline.html
  templates/print-a4-flyer.html
  templates/social-fb-cover.html
  templates/social-ig-story.html
  templates/social-quote-card.html
  templates/social-stat-card.html

new files (img/brand/):  17 assets (.jpg portraits + .png doodles/landmarks/stamps)
```

## Bước 3 — Commit + push

```bash
git add .
git commit -m "feat: hero v3.0 editorial — 2-col layout + PNG visuals + brand templates

Hero (index.html + css/style.css):
- Rebuild hero thành 2-column desktop layout (text trái, visual phải)
- Right column composition với PNG assets thật:
  • 臺 CJK stamp character backdrop (mint, 60vw)
  • Sun disk coral top-left
  • Halftone dot pattern overlay
  • Taipei 101 silhouette (transparent PNG)
  • Chiang Kai-shek Memorial silhouette
  • 5 doodles: wavy mint, asterisk, squiggle, curl, dots cluster
  • 3 birds Unicode swallows
  • Yellow circle stamp 'ONE TRIP / ĐỔI ĐỜI / ENDLESS POSSIBILITIES'
  • Visa-approved stamp tilted -12deg
- Full-width black stat bar (10/2,000+/98%/20+) với Playfair italic numerals
- Coral CTA banner với arrow → animation
- Footer metadata strip (📅 tuyển sinh · 📍 VP · 🌐 website)
- Hand-drawn 'ở ĐÀI BẮC' annotation giữ nguyên
- Responsive: stack 1-col @1024px, simplified @720px, single-col stats @480px

Brand assets (img/brand/):
- 17 optimized assets (~1.8MB tổng)
- 5 portraits JPG q82 (DHS + phụ huynh)
- 2 landmarks PNG transparent (Taipei 101, Chiang Kai-shek)
- 5 doodles PNG transparent (asterisk, curl, dots, squiggle, wavy-mint)
- Stamps + textures (halftone, paper, visa-approved, gradcap icon)

Brand templates (/templates/):
- 7 ready-to-use HTML files (key-visual, brand-guideline, A4 flyer,
  FB cover, IG story, quote card, stat card) + gallery index + _lib.css
- Zero external dependency (chỉ Google Fonts CDN)"

git push origin main
```

## Bước 4 — Verify

- **GitHub commits**: https://github.com/huymelon/javicotaiwan/commits/main
- **Live site** (Cloudflare Pages auto deploy):
  - Homepage: https://javico.vn/ ← Hero editorial v3.0
  - Templates gallery: https://javico.vn/templates/

---

## 📋 Tóm tắt thay đổi

### Hero v3.0 — visual elements được thêm

| Element | Source | Position | Z-index |
|---|---|---|---|
| 臺 CJK character | CSS text (mint) | Center back | 1 |
| Sun disk | CSS circle (coral) | Top-left | 2 |
| Halftone dots | CSS pattern (coral) | Top-right | 3 |
| Wavy line mint | `doodle-wavyline-mint.png` | Mid-left | 4 |
| Asterisk doodle | `doodle-asterisk.png` | Top-right | 4 |
| Squiggle doodle | `doodle-squiggle.png` | Top-center | 4 |
| Curl doodle | `doodle-curl.png` | Mid-right | 4 |
| Dots cluster | `doodle-dots.png` | Bottom-mid | 4 |
| Chiang Kai-shek | `landmark-chiangkaishek.png` | Bottom-left (46%) | 5 |
| Taipei 101 | `landmark-taipei101.png` | Bottom-right (28%) | 5 |
| Birds (Unicode ↝) | CSS text | Top-mid | 6 |
| Visa-approved stamp | `stamp-visa-approved.png` | Top-center (-12deg) | 7 |
| Yellow circle stamp | CSS div | Bottom-right | 8 |

### Files modified

| File | Lines | Change |
|---|---|---|
| `index.html` | ~150 lines hero | Rebuild thành 2-col grid + 8 PNG `<img>` tags |
| `css/style.css` | +180 lines (v3.0) | `.hero-grid`, `.hero-visual`, `.hv-*` assets, statbar, CTA banner, footmeta |

### Files added

- `img/brand/` — 17 brand assets (~1.8MB optimized)
- `templates/` — 9 file editorial templates standalone

---

## 🔍 Test local trước khi push

```bash
cd /Users/huymelon/Desktop/javicotaiwan
python3 -m http.server 8000
```

Mở browser:
- `http://localhost:8000/` ← Hero v3.0 với PNG visuals
- `http://localhost:8000/templates/` ← Gallery preview

Kiểm tra checklist:
- [ ] Hero 2-col đẹp trên desktop (≥1024px)
- [ ] Hero stack 1-col đẹp trên mobile (<720px)
- [ ] Tất cả 8 PNG load không lỗi (check DevTools Network)
- [ ] Taipei 101 + Chiang Kai-shek silhouette nằm đáy phải/trái khung visual
- [ ] Yellow stamp "ĐỔI ĐỜI" nằm góc dưới phải visual
- [ ] Black stat bar dưới hero (10/2000+/98%/20+)
- [ ] Coral CTA banner có arrow → hover animate
- [ ] Footer metadata 1 dòng (📅 📍 🌐)

Nếu OK → push. Nếu lỗi → báo Claude.

---

## ⚠️ Nếu gặp lỗi push

```bash
# Rejected (đã có commit khác trên main)
git pull --rebase origin main
git push origin main

# Authentication — dùng PAT
git remote set-url origin https://YOUR_USERNAME:YOUR_PAT@github.com/huymelon/javicotaiwan.git
git push origin main
```

---

*Có thể xoá file này sau khi commit xong: `rm COMMIT_INSTRUCTIONS.md`*
