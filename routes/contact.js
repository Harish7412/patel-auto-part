const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  res.render('pages/contact', {
    title: 'Contact Us – Patel Auto Parts',
    activePage: 'contact',
    success: false,
  });
});

router.post('/', (req, res) => {
  const { name, email, phone, message } = req.body;
  // In production: send email / save to DB here
  console.log('Contact form:', { name, email, phone, message });
  res.render('pages/contact', {
    title: 'Contact Us – Patel Auto Parts',
    activePage: 'contact',
    success: true,
  });
});

module.exports = router;
