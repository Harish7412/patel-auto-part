const express = require('express');
const router  = express.Router();
const { products } = require('../data/products');

// Simple in-memory cart (per process — replace with sessions or DB in production)
let cart = [];

router.get('/', (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  res.render('pages/cart', {
    title: 'Cart – Patel Auto Parts',
    cart,
    total,
    activePage: 'cart',
  });
});

router.post('/add', (req, res) => {
  const { id } = req.body;
  const product = products.find(p => p.id === parseInt(id));
  if (!product) return res.json({ success: false, message: 'Product not found' });

  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  res.json({ success: true, cartCount: cart.reduce((s, i) => s + i.qty, 0) });
});

router.post('/remove', (req, res) => {
  const { id } = req.body;
  cart = cart.filter(i => i.id !== parseInt(id));
  res.json({ success: true, cartCount: cart.reduce((s, i) => s + i.qty, 0) });
});

router.post('/clear', (req, res) => {
  cart = [];
  res.redirect('/cart');
});

module.exports = router;
