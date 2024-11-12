import { gtag } from '@types/gtag.js';

// const initGA4 = () => {
//   const trackingId = 'YOUR_TRACKING_ID';
//   gtag('create', { trackingId, cookieDomain: 'auto' });
//   gtag('send', 'pageview', '/');
// };


  const trackingId = 'YOUR_TRACKING_ID';
  gtag('init', trackingId);
