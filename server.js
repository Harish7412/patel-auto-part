const express = require('express');
const path    = require('path');
const morgan  = require('morgan');

const homeRouter     = require('./routes/home');
const productsRouter = require('./routes/products');
const brandsRouter   = require('./routes/brands');
const contactRouter  = require('./routes/contact');
const cartRouter     = require('./routes/cart');

const app  = express();
const PORT = process.env.PORT || 3000;

// ── View engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ── Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

// ── Routes
app.use('/',         homeRouter);
app.use('/products', productsRouter);
app.use('/brands',   brandsRouter);
app.use('/contact',  contactRouter);
app.use('/cart',     cartRouter);

// ── 404
app.use((req, res) => {
  res.status(404).render('pages/404', { title: '404 – Page Not Found' });
});

// ── Start
app.listen(PORT, () => {
  console.log(`\n  🏍️  Patel Auto Parts running at http://localhost:${PORT}\n`);
});
