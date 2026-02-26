/* ── cart.js ── */

document.addEventListener('DOMContentLoaded', () => {

  const cartCountEl = document.getElementById('cartCount');

  /* ─── ADD TO CART (product cards) ─── */
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('.btn-add-cart');
    if (!btn) return;

    const id = btn.dataset.id;
    if (!id) return;

    btn.disabled = true;

    try {
      const res  = await fetch('/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();

      if (data.success) {
        // Visual feedback
        const orig = btn.innerHTML;
        btn.classList.add('added');
        btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';

        // Update cart badge
        if (cartCountEl) cartCountEl.textContent = data.cartCount;

        setTimeout(() => {
          btn.classList.remove('added');
          btn.innerHTML = orig;
          btn.disabled = false;
        }, 1200);

        // Toast notification
        showToast('Added to cart!');
      }
    } catch (err) {
      console.error('Cart error:', err);
      btn.disabled = false;
    }
  });

  /* ─── ADD TO CART (product detail big button) ─── */
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('.btn-add-cart-big');
    if (!btn) return;

    const id  = btn.dataset.id;
    const qty = document.getElementById('qtyInput')?.value || 1;
    if (!id) return;

    btn.disabled = true;
    const origText = btn.textContent;
    btn.textContent = 'Adding...';

    try {
      // Add qty times
      for (let i = 0; i < parseInt(qty); i++) {
        await fetch('/cart/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id }),
        });
      }
      // Get final count
      const res  = await fetch('/cart/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (cartCountEl && data.cartCount) cartCountEl.textContent = data.cartCount;

      btn.textContent = '✓ Added!';
      btn.style.background = '#16a34a';
      showToast(`${qty}× added to cart!`);

      setTimeout(() => {
        btn.textContent = origText;
        btn.style.background = '';
        btn.disabled = false;
      }, 2000);
    } catch (err) {
      btn.textContent = origText;
      btn.disabled = false;
    }
  });

  /* ─── TOAST NOTIFICATION ─── */
  function showToast(msg) {
    // Remove existing
    document.querySelectorAll('.toast').forEach(t => t.remove());

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    toast.style.cssText = `
      position: fixed;
      bottom: 28px;
      right: 28px;
      background: var(--red);
      color: #fff;
      font-family: var(--font-cond, 'Barlow Condensed', sans-serif);
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 14px 24px;
      z-index: 9999;
      clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
      animation: toastIn 0.35s ease both;
      box-shadow: 0 8px 32px rgba(0,0,0,0.5);
    `;

    // Inject keyframe once
    if (!document.getElementById('toastStyle')) {
      const style = document.createElement('style');
      style.id = 'toastStyle';
      style.textContent = `
        @keyframes toastIn  { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:none; } }
        @keyframes toastOut { from { opacity:1; transform:none; } to { opacity:0; transform:translateY(16px); } }
      `;
      document.head.appendChild(style);
    }

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.animation = 'toastOut 0.35s ease both';
      setTimeout(() => toast.remove(), 350);
    }, 2500);
  }

});
