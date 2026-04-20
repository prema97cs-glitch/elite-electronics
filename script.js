/* =============================================
   ELITE ELECTRONICS — SCRIPT.JS (Enhanced)
   ============================================= */

// ── STATE ──────────────────────────────────────
let cart     = JSON.parse(localStorage.getItem('ee_cart')     || '[]');
let wishlist = JSON.parse(localStorage.getItem('ee_wishlist') || '[]');

// ── INIT ───────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  syncBadges();
  initNavScroll();
  initSearchSuggestions();
  renderCartSidebar();
  renderWishlistSidebar();
  initMobileDropdown();

  if (document.getElementById('productsGrid')) {
    renderHomePage();
  }
});

// ── NAV SCROLL ─────────────────────────────────
function initNavScroll() {
  const nb = document.getElementById('navbar');
  if (!nb) return;
  window.addEventListener('scroll', () => nb.classList.toggle('scrolled', scrollY > 60), { passive: true });
}

// ── HAMBURGER ──────────────────────────────────
function toggleMenu() {
  const links = document.getElementById('navLinks');
  const ham   = document.getElementById('hamburger');
  const isOpen = links?.classList.toggle('open');
  ham?.classList.toggle('open', isOpen);
  // Overlay to close on outside click
  if (isOpen) {
    document.addEventListener('click', closeMobileNavOnOutside, true);
  }
}
function closeMobileNavOnOutside(e) {
  const links = document.getElementById('navLinks');
  const ham   = document.getElementById('hamburger');
  if (links && !links.contains(e.target) && ham && !ham.contains(e.target)) {
    links.classList.remove('open');
    ham.classList.remove('open');
    document.removeEventListener('click', closeMobileNavOnOutside, true);
  }
}

// Mobile dropdown toggle (tap to open on mobile)
function initMobileDropdown() {
  if (window.innerWidth > 768) return;
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', e => {
      e.preventDefault();
      const parent = toggle.closest('.dropdown');
      parent?.classList.toggle('open');
    });
  });
}

// ── SEARCH SUGGESTIONS ─────────────────────────
function initSearchSuggestions() {
  const inp = document.getElementById('searchInput');
  const box = document.getElementById('searchSuggestions');
  if (!inp || !box) return;

  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (q.length < 2) { box.classList.remove('show'); return; }

    const hits = PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.cat.toLowerCase().includes(q)
    ).slice(0, 7);

    if (!hits.length) { box.classList.remove('show'); return; }

    box.innerHTML = hits.map(p => `
      <div class="ss-item" onclick="window.location.href='category.html?cat=${p.cat}#p${p.id}'">
        <i class="fas fa-search"></i>
        <img src="${p.img}" alt="${p.name}" style="width:32px;height:28px;object-fit:cover;border-radius:4px;flex-shrink:0" onerror="this.style.display='none'"/>
        <span>${p.brand} ${p.name}</span>
        <span style="margin-left:auto;color:var(--primary);font-weight:600;font-size:.78rem;white-space:nowrap">₹${p.price.toLocaleString('en-IN')}</span>
      </div>`).join('');
    box.classList.add('show');
  });

  document.addEventListener('click', e => {
    if (!inp.contains(e.target) && !box.contains(e.target)) box.classList.remove('show');
  });

  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
    if (e.key === 'Escape') box.classList.remove('show');
  });
}

function doSearch() {
  const q = document.getElementById('searchInput')?.value?.trim();
  if (!q) return;
  window.location.href = `category.html?search=${encodeURIComponent(q)}`;
}

// ── HOME PAGE PRODUCTS ─────────────────────────
const HOME_SHOW = 12;
let homeVisible = HOME_SHOW;
let homeFilter  = 'all';
let homeSort    = 'default';

function renderHomePage() {
  bindFilterBtns();
  bindSortSel();
  renderHomeGrid();
}

function bindFilterBtns() {
  document.querySelectorAll('.flt').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.flt').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      homeFilter  = btn.dataset.f;
      homeVisible = HOME_SHOW;
      renderHomeGrid();
    });
  });
}

function bindSortSel() {
  const sel = document.getElementById('sortSel');
  if (sel) sel.addEventListener('change', () => {
    homeSort = sel.value;
    homeVisible = HOME_SHOW;
    renderHomeGrid();
  });
}

function sortProducts() {
  const sel = document.getElementById('sortSel');
  if (sel) { homeSort = sel.value; homeVisible = HOME_SHOW; renderHomeGrid(); }
}

function getPool() {
  let pool = homeFilter === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.group === homeFilter);

  // Sort
  if (homeSort === 'price-asc')  pool.sort((a,b) => a.price - b.price);
  if (homeSort === 'price-desc') pool.sort((a,b) => b.price - a.price);
  if (homeSort === 'discount')   pool.sort((a,b) => (b.discount||0) - (a.discount||0));
  if (homeSort === 'rating')     pool.sort((a,b) => b.rating - a.rating);

  return pool;
}

function renderHomeGrid() {
  const grid    = document.getElementById('productsGrid');
  const loadBtn = document.getElementById('loadMoreBtn');
  const countEl = document.getElementById('productCount');
  if (!grid) return;

  const pool  = getPool();
  const slice = pool.slice(0, homeVisible);

  grid.innerHTML = slice.map(p => buildCard(p)).join('');

  if (countEl) countEl.textContent = `Showing ${slice.length} of ${pool.length} products`;
  if (loadBtn) loadBtn.style.display = homeVisible >= pool.length ? 'none' : 'inline-flex';

  // Re-animate new cards
  grid.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity .4s ${i*.04}s ease, transform .4s ${i*.04}s ease, box-shadow .25s ease, border-color .25s ease`;
    requestAnimationFrame(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    });
  });
}

function loadMore() {
  homeVisible += HOME_SHOW;
  renderHomeGrid();
}

// ── ADD TO CART ─────────────────────────────────
function addToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const ex = cart.find(c => c.id === id);
  if (ex) ex.qty = (ex.qty || 1) + 1;
  else cart.push({ id: p.id, name: p.name, brand: p.brand, price: p.price, img: p.img, qty: 1 });
  saveCart();
  renderCartSidebar();

  // Animate badge
  const badge = document.getElementById('cartCount');
  if (badge) {
    badge.classList.add('pop');
    setTimeout(() => badge.classList.remove('pop'), 300);
  }

  toast(`🛒 ${p.name.split(' ').slice(0,3).join(' ')} added to cart!`);
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  saveCart();
  renderCartSidebar();
  toast('Item removed from cart');
}

function saveCart() { localStorage.setItem('ee_cart', JSON.stringify(cart)); syncBadges(); }

function renderCartSidebar() {
  const body = document.getElementById('cartItems');
  const foot = document.getElementById('cartFoot');
  const tot  = document.getElementById('cartTotal');
  if (!body) return;

  if (!cart.length) {
    body.innerHTML = `<div class="empty-state"><i class="fas fa-box-open"></i><p>Your cart is empty</p><a href="#products" onclick="toggleCart()" class="btn-outline" style="margin-top:8px;font-size:.8rem;padding:8px 16px">Start Shopping</a></div>`;
    if (foot) foot.style.display = 'none';
    return;
  }

  body.innerHTML = cart.map(c => {
    // Always use category-correct fallback
    const cat    = (PRODUCTS.find(p => p.id === c.id)?.cat) || 'tv';
    const fbImg  = REMOTE_IMG[cat] || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100';
    return `
    <div class="cart-item">
      <div class="ci-img">
        <img src="${c.img}" alt="${c.name}"
          onerror="this.onerror=null;this.src='${fbImg}'" />
      </div>
      <div class="ci-info">
        <div class="ci-brand">${c.brand}</div>
        <div class="ci-name">${c.name}</div>
        <div class="ci-price">₹${(c.price * (c.qty||1)).toLocaleString('en-IN')} × ${c.qty||1}</div>
      </div>
      <button class="ci-remove" onclick="removeFromCart(${c.id})" title="Remove">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>`;
  }).join('');

  const total = cart.reduce((s, c) => s + c.price * (c.qty||1), 0);
  if (tot)  tot.textContent  = `₹${total.toLocaleString('en-IN')}`;
  if (foot) foot.style.display = 'block';
}

function toggleCart() {
  document.getElementById('cartSidebar')?.classList.toggle('open');
  document.getElementById('cartOverlay')?.classList.toggle('active');
}

function checkout() {
  toast('🚀 Redirecting to checkout…');
  toggleCart();
}

// ── WISHLIST ───────────────────────────────────
function isInWishlist(id) { return wishlist.some(w => w.id === id); }

function toggleWishlistItem(id, e) {
  if (e) e.stopPropagation();
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const idx = wishlist.findIndex(w => w.id === id);
  if (idx === -1) { wishlist.push(p); toast(`❤️ Added to wishlist!`); }
  else            { wishlist.splice(idx, 1); toast(`💔 Removed from wishlist`); }
  saveWishlist();
  renderWishlistSidebar();

  // Update heart icon in product card
  const btn = document.querySelector(`.product-card[data-id="${id}"] .wl-btn`);
  if (btn) {
    const inW = isInWishlist(id);
    btn.classList.toggle('active', inW);
    btn.querySelector('i').className = `fa${inW ? 's' : 'r'} fa-heart`;
  }
}

function saveWishlist() { localStorage.setItem('ee_wishlist', JSON.stringify(wishlist)); syncBadges(); }

function renderWishlistSidebar() {
  const body = document.getElementById('wishlistItems');
  if (!body) return;
  if (!wishlist.length) {
    body.innerHTML = `<div class="empty-state"><i class="fas fa-heart-broken"></i><p>Nothing saved yet</p></div>`;
    return;
  }
  body.innerHTML = wishlist.map(p => {
    const cat   = p.cat || 'tv';
    const fbImg = REMOTE_IMG[cat] || 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100';
    return `
    <div class="cart-item">
      <div class="ci-img">
        <img src="${p.img}" alt="${p.name}"
          onerror="this.onerror=null;this.src='${fbImg}'" />
      </div>
      <div class="ci-info">
        <div class="ci-brand">${p.brand}</div>
        <div class="ci-name">${p.name}</div>
        <div class="ci-price">₹${p.price.toLocaleString('en-IN')}</div>
      </div>
      <button class="ci-remove" style="color:var(--primary)" onclick="addToCart(${p.id})" title="Move to cart">
        <i class="fas fa-cart-plus"></i>
      </button>
    </div>`;
  }).join('');
}

function toggleWishlist() {
  document.getElementById('wishlistSidebar')?.classList.toggle('open');
  document.getElementById('wishlistOverlay')?.classList.toggle('active');
}

// ── BADGES ─────────────────────────────────────
function syncBadges() {
  const cc = cart.reduce((s, c) => s + (c.qty||1), 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = cc);
  document.querySelectorAll('#wishlistCount').forEach(el => el.textContent = wishlist.length);
}

// ── LOGIN MODAL ────────────────────────────────
function toggleModal() { document.getElementById('modalBg')?.classList.toggle('active'); }
function closeModalOutside(e) { if (e.target === document.getElementById('modalBg')) toggleModal(); }
function switchTab(tab, btn) {
  document.querySelectorAll('.mtab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById('loginTab').style.display  = tab === 'login'  ? 'block' : 'none';
  document.getElementById('signupTab').style.display = tab === 'signup' ? 'block' : 'none';
}
function loginUser()  { toast('✅ Logged in successfully!'); toggleModal(); }
function signupUser() { toast('🎉 Account created! Welcome to Elite Electronics.'); toggleModal(); }

// ── FORMS ──────────────────────────────────────
function submitForm(e) {
  e.preventDefault();
  toast('✅ Message sent! We\'ll get back to you within 24 hours.');
  e.target.reset();
}

function subscribeNewsletter(btn) {
  const inp = btn.previousElementSibling;
  if (inp?.value && inp.value.includes('@')) {
    toast(`🎉 Subscribed with ${inp.value}! Check your inbox.`);
    inp.value = '';
  } else {
    toast('⚠️ Please enter a valid email address.');
  }
}

// ── TOAST ──────────────────────────────────────
let _toastTimer;
function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

// ── ESC KEY ────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  document.getElementById('cartSidebar')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('active');
  document.getElementById('wishlistSidebar')?.classList.remove('open');
  document.getElementById('wishlistOverlay')?.classList.remove('active');
  document.getElementById('modalBg')?.classList.remove('active');
  document.getElementById('navLinks')?.classList.remove('open');
  document.getElementById('hamburger')?.classList.remove('open');
});

// ── SCROLL REVEAL ──────────────────────────────
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.why-card, .offer-card, .cat-tile, .hcard').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(22px)';
  el.style.transition = `opacity .5s ${i * .06}s ease, transform .5s ${i * .06}s ease`;
  revealObs.observe(el);
});

// ── BADGE POP ANIMATION (add via CSS) ──────────
const badgeStyle = document.createElement('style');
badgeStyle.textContent = `
  .badge.pop { animation: badgePop .3s ease; }
  @keyframes badgePop { 0%{transform:scale(1);}50%{transform:scale(1.6);}100%{transform:scale(1);} }
`;
document.head.appendChild(badgeStyle);
