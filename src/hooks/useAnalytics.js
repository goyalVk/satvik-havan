// src/hooks/useAnalytics.js
// Call this hook to track custom events in GA4

export const GA_ID = 'G-XXXXXXXXXX'; // Replace with your Measurement ID

/**
 * Track a custom GA4 event
 * Usage: trackEvent('herb_view', { herb_name: 'Ashwagandha' })
 *        trackEvent('whatsapp_click', { source: 'herb_detail' })
 *        trackEvent('order_intent', { product: 'Brahmi Powder', price: 99 })
 */
export function trackEvent(eventName, params = {}) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

/**
 * Track WhatsApp click (most important conversion event)
 * Use this on every WhatsApp link/button
 */
export function trackWhatsApp(source, productName = '') {
  trackEvent('whatsapp_click', {
    event_category: 'conversion',
    event_label: source,
    product_name: productName,
  });
}

/**
 * Track herb page view
 */
export function trackHerbView(herbName, price) {
  trackEvent('view_item', {
    currency: 'INR',
    value: price,
    items: [{ item_name: herbName, item_category: 'Ayurvedic Herbs' }],
  });
}
