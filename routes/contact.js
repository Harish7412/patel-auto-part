const express = require('express');
const router  = express.Router();
const { contactInfo } = require('../data/contact');

router.get('/', (req, res) => {
  res.render('pages/contact', {
    title: 'Contact Us – Patel Auto Parts',
    activePage: 'contact',
    contactInfo: contactInfo,
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
    contactInfo: contactInfo,
    success: true,
  });
});

module.exports = router;
