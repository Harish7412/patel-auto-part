const express = require('express');
const router  = express.Router();
const { brands, categories, products, testimonials } = require('../data/products');

router.get('/', (req, res) => {
  res.render('pages/home', {
    title: 'Patel Auto Parts – Premium Motorcycle Components',
    brands,
    categories,
    featuredProducts: products.slice(0, 8),
    testimonials,
    activePage: 'home',
  });
});

module.exports = router;
