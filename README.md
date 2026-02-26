# 🏍️ Patel Auto Parts – Full Node.js Website

A complete, production-ready website for Patel Auto Parts built with **Node.js + Express + EJS**.

---

## 📁 Project Structure

```
patel-auto-parts/
├── server.js                  ← Main Express server (entry point)
├── package.json
├── data/
│   └── products.js            ← All data: brands, products, categories, testimonials
├── routes/
│   ├── home.js                ← GET /
│   ├── products.js            ← GET /products, GET /products/:id
│   ├── brands.js              ← GET /brands, GET /brands/:id
│   ├── contact.js             ← GET/POST /contact
│   └── cart.js                ← GET /cart, POST /cart/add, POST /cart/remove
├── views/
│   ├── partials/
│   │   ├── head.ejs           ← HTML <head> (loads all CSS)
│   │   ├── navbar.ejs         ← Navigation component
│   │   ├── footer.ejs         ← Footer component
│   │   ├── scripts.ejs        ← Bottom scripts
│   │   └── product-card.ejs   ← Reusable product card component
│   └── pages/
│       ├── home.ejs           ← Homepage (hero, brands, categories, products, etc.)
│       ├── products.ejs       ← Products listing with filters
│       ├── product-detail.ejs ← Single product page
│       ├── brands.ejs         ← All brands grid
│       ├── brand-detail.ejs   ← Products filtered by brand
│       ├── contact.ejs        ← Contact form
│       ├── cart.ejs           ← Cart page
│       └── 404.ejs            ← 404 error page
└── public/
    ├── css/
    │   ├── variables.css      ← CSS custom properties (design tokens)
    │   ├── base.css           ← Reset + typography + utility classes
    │   ├── navbar.css         ← Navigation styles
    │   ├── components.css     ← All reusable component styles
    │   ├── pages.css          ← Page-specific layouts
    │   ├── footer.css         ← Footer styles
    │   └── responsive.css     ← Media queries
    └── js/
        ├── main.js            ← Navbar scroll, reveal animations, hamburger
        └── cart.js            ← AJAX add-to-cart + toast notifications
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
cd patel-auto-parts
npm install
```

### 2. Start the server
```bash
# Production
npm start

# Development (with auto-reload)
npm run dev
```

### 3. Open in browser
```
http://localhost:3000
```

---

## 📄 Pages

| URL                      | Description                          |
|--------------------------|--------------------------------------|
| `/`                      | Homepage with hero, brands, products |
| `/products`              | All products (filterable)            |
| `/products?category=engine` | Filter by category               |
| `/products?q=piston`     | Search products                      |
| `/products/:id`          | Product detail page                  |
| `/brands`                | All 16 bike brands                   |
| `/brands/ktm`            | Products for a specific brand        |
| `/contact`               | Contact form                         |
| `/cart`                  | Shopping cart                        |

---

## 🎨 Design System

| Token          | Value                    |
|----------------|--------------------------|
| Primary color  | `#e81b1b` (Red)          |
| Background     | `#0a0a0a` (Near-black)   |
| Display font   | Bebas Neue               |
| Body font      | Barlow + Barlow Condensed|
| Grid gap       | 3px (mosaic-style)       |

---

## 🛠 Tech Stack

- **Runtime**: Node.js v18+
- **Framework**: Express 4
- **Templating**: EJS
- **CSS**: Vanilla CSS with custom properties (6 modular files)
- **JS**: Vanilla JS (no frameworks)
- **Fonts**: Google Fonts (Bebas Neue, Barlow)

---

## 🔧 Customisation

### Add a new product
Edit `data/products.js` and add an entry to the `products` array.

### Add a new brand
Edit `data/products.js` and add an entry to the `brands` array.

### Change colours
Edit `public/css/variables.css` — all colours are CSS custom properties.

### Add a database
Replace the in-memory data arrays in `data/products.js` with your DB queries. The route handlers are already structured for async/await.

---

## 📞 Contact

**Patel Auto Parts**  
Shop No. 14–16, Sindhi Camp Spare Parts Market  
Jaipur, Rajasthan – 302001  
Email: parts@patelauto.in
