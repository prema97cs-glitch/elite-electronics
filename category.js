/* =============================================
   ELITE ELECTRONICS — CATEGORY.JS
   Full filtering: category, brand, price, rating, sort
   Fixed: null-safety guards, REMOTE_IMG fallback
   ============================================= */

// ── STATE ──────────────────────────────────────
let activeCat    = 'all';
let activeBrands = new Set();
let minP = 0, maxP = Infinity;
let minRating = 0;
let sortMode  = 'default';
let searchStr = '';

// ── BOOT ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Safety: wait for products-data.js to be available
  if (typeof PRODUCTS === 'undefined' || typeof CAT_META === 'undefined') {
    console.error('Elite Electronics: products-data.js not loaded');
    return;
  }
  parseURLParams();
  buildPage();
});

function parseURLParams() {
  const params = new URLSearchParams(location.search);
  activeCat = params.get('cat') || 'all';
  searchStr = params.get('search') || '';
  const inp = document.getElementById('searchInput');
  if (searchStr && inp) inp.value = searchStr;
}

// ── BUILD PAGE ─────────────────────────────────
function buildPage() {
  const meta  = (typeof CAT_META !== 'undefined' && CAT_META[activeCat]) ? CAT_META[activeCat] : { label: 'All Products' };
  const title = meta.label;

  document.title = `${title} — Elite Electronics`;

  const catTitleEl = document.getElementById('catTitle');
  if (catTitleEl) catTitleEl.textContent = title;

  const bcEl = document.getElementById('breadcrumbCat');
  if (bcEl) bcEl.textContent = title;

  buildBrandList();
  buildBrandChips();
  applyAndRender();
}

// ── BRAND LIST (sidebar) ───────────────────────
function buildBrandList() {
  const el = document.getElementById('brandList');
  if (!el) return;
  const pool   = getBasePool();
  const brands = [...new Set(pool.map(p => p.brand))].sort();
  const counts = {};
  pool.forEach(p => counts[p.brand] = (counts[p.brand] || 0) + 1);

  el.innerHTML = brands.map(b => `
    <div class="brand-check ${activeBrands.has(b) ? 'active' : ''}" onclick="toggleBrand('${b}')">
      <span>${b}</span>
      <span class="brand-count">${counts[b]}</span>
    </div>`).join('');
}

// ── BRAND CHIPS (top strip) ─────────────────────
function buildBrandChips() {
  const el = document.getElementById('brandChips');
  if (!el) return;
  const pool   = getBasePool();
  const brands = [...new Set(pool.map(p => p.brand))].sort();
  if (brands.length <= 1) { el.style.display = 'none'; return; }
  el.style.display = '';
  el.innerHTML =
    `<span class="bchip ${activeBrands.size === 0 ? 'active' : ''}" onclick="clearBrands()">All Brands</span>` +
    brands.map(b =>
      `<span class="bchip ${activeBrands.has(b) ? 'active' : ''}" onclick="toggleBrand('${b}')">${b}</span>`
    ).join('');
}

// ── POOL HELPERS ───────────────────────────────
function getBasePool() {
  if (typeof PRODUCTS === 'undefined') return [];
  if (searchStr) {
    const q = searchStr.toLowerCase();
    return PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q)  ||
      p.brand.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q)
    );
  }
  if (activeCat === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.cat === activeCat);
}

function getFiltered() {
  let pool = getBasePool();
  if (activeBrands.size > 0) pool = pool.filter(p => activeBrands.has(p.brand));
  pool = pool.filter(p => p.price >= minP && p.price <= maxP);
  pool = pool.filter(p => p.rating >= minRating);
  switch (sortMode) {
    case 'price_asc':  pool = [...pool].sort((a, b) => a.price   - b.price);   break;
    case 'price_desc': pool = [...pool].sort((a, b) => b.price   - a.price);   break;
    case 'rating':     pool = [...pool].sort((a, b) => b.rating  - a.rating);  break;
    case 'discount':   pool = [...pool].sort((a, b) => (b.discount||0) - (a.discount||0)); break;
  }
  return pool;
}

// ── APPLY & RENDER ─────────────────────────────
function applyAndRender() {
  const filtered = getFiltered();
  const grid    = document.getElementById('catGrid');
  const none    = document.getElementById('noresult');
  const countEl = document.getElementById('resultCount');

  if (countEl) countEl.textContent = `${filtered.length} product${filtered.length !== 1 ? 's' : ''}`;

  if (!filtered.length) {
    if (grid) grid.innerHTML = '';
    if (none) none.style.display = 'flex';
    return;
  }
  if (none) none.style.display = 'none';
  if (grid) {
    grid.innerHTML = filtered.map(p => buildCard(p)).join('');
  }
}

// ── BRAND TOGGLE ───────────────────────────────
function toggleBrand(brand) {
  if (activeBrands.has(brand)) activeBrands.delete(brand);
  else activeBrands.add(brand);
  refreshBrandUI();
  applyAndRender();
}

function clearBrands() {
  activeBrands.clear();
  refreshBrandUI();
  applyAndRender();
}

function refreshBrandUI() {
  document.querySelectorAll('.brand-check').forEach(el => {
    const nameEl = el.querySelector('span');
    if (nameEl) el.classList.toggle('active', activeBrands.has(nameEl.textContent));
  });
  document.querySelectorAll('.bchip').forEach(el => {
    if (el.textContent === 'All Brands') {
      el.classList.toggle('active', activeBrands.size === 0);
    } else {
      el.classList.toggle('active', activeBrands.has(el.textContent));
    }
  });
}

// ── PRICE FILTER ───────────────────────────────
function applyPriceFilter() {
  const mn = document.getElementById('minPrice')?.value;
  const mx = document.getElementById('maxPrice')?.value;
  minP = mn ? +mn : 0;
  maxP = mx ? +mx : Infinity;
  applyAndRender();
}

// ── RATING FILTER ──────────────────────────────
function applyRatingFilter(val) {
  minRating = +val;
  applyAndRender();
}

// ── SORT ───────────────────────────────────────
function applySort(val) {
  sortMode = val;
  applyAndRender();
}

// ── CLEAR ALL ──────────────────────────────────
function clearFilters() {
  activeBrands.clear();
  minP = 0; maxP = Infinity; minRating = 0; sortMode = 'default';
  const mn = document.getElementById('minPrice');
  const mx = document.getElementById('maxPrice');
  if (mn) mn.value = '';
  if (mx) mx.value = '';
  document.querySelectorAll('input[name="rating"]').forEach(r => r.checked = false);
  const ss = document.getElementById('sortSelect');
  if (ss) ss.value = 'default';
  refreshBrandUI();
  applyAndRender();
}

// ── MOBILE FILTER TOGGLE ───────────────────────
function toggleMobileFilter() {
  const fs = document.getElementById('filterSidebar');
  if (!fs) return;
  const isOpen = fs.classList.toggle('open');
  let ov = document.getElementById('filterOverlay');
  if (isOpen && !ov) {
    ov = document.createElement('div');
    ov.id = 'filterOverlay';
    ov.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1190;';
    ov.onclick = () => { fs.classList.remove('open'); ov.remove(); };
    document.body.appendChild(ov);
  } else if (!isOpen && ov) {
    ov.remove();
  }
}

