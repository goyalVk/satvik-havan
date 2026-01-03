const fs = require('fs');
const path = require('path');

const siteUrl = 'https://www.satvikhavan.com';

const appJsPath = path.join(__dirname, 'src', 'App.js');
const appJs = fs.readFileSync(appJsPath, 'utf8');

const routeRegex = /<Route\s+path=["']([^"']*)["']/g;
let match;
const routes = new Set();

while ((match = routeRegex.exec(appJs)) !== null) {
  let routePath = match[1];

  if (!routePath || routePath.includes(':')) continue;

  // Normalize
  routePath =
    routePath !== '/' && routePath.endsWith('/')
      ? routePath.slice(0, -1)
      : routePath;

  routes.add(routePath);
}

const lastmod = new Date().toISOString().split('T')[0];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...routes]
  .map(route => {
    const url = route === '/' ? siteUrl : `${siteUrl}${route}`;
    const priority = route === '/' ? '1.0' : '0.8';
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap);

console.log('✅ Sitemap generated at public/sitemap.xml');
