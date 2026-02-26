const express = require('express');
const router  = express.Router();
const { brands, products } = require('../data/products');

router.get('/', (req, res) => {
  res.render('pages/brands', {
    title: 'All Bike Brands – Patel Auto Parts',
    brands,
    activePage: 'brands',
  });
});

router.get('/:id', (req, res) => {
  const brand = brands.find(b => b.id === req.params.id);
  if (!brand) return res.redirect('/brands');

  const brandProducts = products.filter(p => p.brandId === brand.id);
  res.render('pages/brand-detail', {
    title: `${brand.name} Parts – Patel Auto Parts`,
    brand,
    brandProducts,
    activePage: 'brands',
  });
});

module.exports = router;
