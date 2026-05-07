// data/contact.js – Central contact information store

const contactInfo = {
  owner: {
    name: 'Bharat Choudhary',
    city: 'Chandrapur',
    title: 'Proprietor',
  },
  shopAddress: {
    shopNo: '14–16',
    area: 'Sindhi Camp Spare Parts Market',
    city: 'Chandrapur',
    state: 'Maharashtra',
    country: 'India',
    fullAddress: 'Shop No. 14–16, Sindhi Camp Spare Parts Market, Chandrapur, Maharashtra – 442401',
  },
  phone: [
    { label: 'Primary', number: '+91 98290 XXXXX', icon: '📞' },
    { label: 'Secondary', number: '+91 94130 XXXXX', icon: '📱' },
  ],
  email: [
    { label: 'Orders', address: 'parts@patelauto.in', icon: '✉️' },
    { label: 'Support', address: 'support@patelauto.in', icon: '💬' },
  ],
  businessHours: {
    weekday: { day: 'Mon – Sat', hours: '9 AM – 8 PM', icon: '🕐' },
    sunday: { day: 'Sunday', hours: '10 AM – 6 PM', icon: '🕑' },
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/patel_auto.parts__chandrapur/',
    instagram_handle: '@patel_auto.parts__chandrapur',
  },
  description: 'Premium motorcycle components and spare parts for all major brands.',
  tagline: 'Your trusted source for authentic auto parts since 1998',
};

module.exports = { contactInfo };
