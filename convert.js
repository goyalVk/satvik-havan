const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let c = fs.readFileSync(filePath, 'utf8');
  
  // Add Link import if missing
  if (c.includes('<Link') && !c.includes("import Link from 'next/link'")) {
    c = "import Link from 'next/link';\n" + c;
  }

  // Add useRouter import if missing
  if ((c.includes('useRouter') || c.includes('router.query')) && !c.includes("import { useRouter }")) {
    c = "import { useRouter } from 'next/router';\n" + c;
  }

  // Fix useSearchParams → useRouter
  c = c.replace(
    /const \[searchParams, setSearchParams\] = useSearchParams\(\);/g,
    'const router = useRouter();\n  const searchParams = { get: (key) => router.query[key] || null };'
  );
  c = c.replace(
    /setSearchParams\(\s*\(prev\)\s*=>\s*\{[^}]*\}\s*\)/g,
    ''
  );
  c = c.replace(
    /setSearchParams\(\{([^}]*)\}\)/g,
    (match, params) => {
      const key = params.match(/(\w+):/)?.[1];
      return key ? `router.push({ query: {${params}} })` : match;
    }
  );

  // Remove react-router-dom imports
  c = c.replace(/import\s*\{[^}]*useSearchParams[^}]*\}\s*from\s*['"]react-router-dom['"];?\n?/g, '');
  c = c.replace(/import\s*\{[^}]*\}\s*from\s*['"]react-router-dom['"];?\n?/g, '');

  fs.writeFileSync(filePath, c, 'utf8');
  console.log(`✅ Fixed: ${path.basename(filePath)}`);
}

const dirs = ['src/pages-src', 'src/components'];
dirs.forEach(dir => {
  fs.readdirSync(dir).forEach(file => {
    if (file.endsWith('.jsx') || file.endsWith('.js')) {
      fixFile(path.join(dir, file));
    }
  });
});

console.log('\n✨ All fixed!');