const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://satvikhavan.com';
const TODAY = new Date().toISOString().split('T')[0];

// All herb slugs — keep in sync with src/data/products.js
const HERB_SLUGS = [
  'mulethi-licorice-root',
  'ashwagandha-root',
  'amla-reetha-shikakai-mix',
  'neem-powder',
  'dry-rose-petals',
  'ratanjot-alkanet-root',
  'kapoor-kachri',
  'jatamansi-root',
  'kamarkas-palash-gond',
  'manjistha-powder',
  'brahmi-powder',
  'amalaki-amla-whole',
  'musta-powder',
  'guduchi-giloy-powder',
  'choti-pippali',
  'trikatu-churna',
  'dashmool-powder',
  'kutaj-chaal',
  'nagarmotha-root',
  'vidanga',
  'hadjod',
  'arjun-chal',
  'varun-chal',
  'gokhru',
  'chot-sajji-sajji-kali',
  'amba-haldi-powder',
];

const STATIC_PAGES = [
  { url: '/',         priority: '1.0', changefreq: 'weekly'  },
  { url: '/herbs',    priority: '0.9', changefreq: 'weekly'  },
  { url: '/booking',  priority: '0.8', changefreq: 'monthly' },
  { url: '/about',    priority: '0.6', changefreq: 'monthly' },
  { url: '/contact',  priority: '0.6', changefreq: 'monthly' },
];

const HERB_PAGES = HERB_SLUGS.map(slug => ({
  url: `/herbs/${slug}`,
  priority: '0.8',
  changefreq: 'monthly',
}));

const ALL_PAGES = [...STATIC_PAGES, ...HERB_PAGES];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${ALL_PAGES.map(page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap);
console.log(`Sitemap generated: ${ALL_PAGES.length} URLs → public/sitemap.xml`);
