const express = require('express');
const router  = express.Router();
const { products, categories } = require('../data/products');

// All products (with optional filter)
router.get('/', (req, res) => {
  const { category, brand, q } = req.query;
  let filtered = [...products];

  if (category) filtered = filtered.filter(p => p.category === category);
  if (brand)    filtered = filtered.filter(p => p.brandId === brand);
  if (q)        filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.compat.toLowerCase().includes(q.toLowerCase())
  );

  res.render('pages/products', {
    title: 'All Products – Patel Auto Parts',
    products: filtered,
    categories,
    filters: { category, brand, q },
    activePage: 'products',
  });
});

// Single product
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.redirect('/products');

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  res.render('pages/product-detail', {
    title: `${product.name} – Patel Auto Parts`,
    product,
    related,
    activePage: 'products',
  });
});

module.exports = router;
