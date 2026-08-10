const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'src/components/Pages');
const globalsPath = path.join(__dirname, '..', 'src/styles/globals.css');

// Read existing globals.css
const existingGlobals = fs.readFileSync(globalsPath, 'utf-8');

// Collect all JSX files
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx'));

// Consolidated @import (all unique Google Fonts families combined)
const consolidatedImport = `@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Inter:wght@400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap');
`;

// CSS that should be removed from component styles (already in globals.css)
const removePatterns = [
  /@import url\('https:\/\/fonts\.googleapis\.com\/css2\?family=[^']+'\);?\s*/g,
  /\*,\s*\*::before,\s*\*::after\s*\{\s*box-sizing:\s*border-box;\s*margin:\s*0;\s*padding:\s*0;\s*\}\s*/g,
  /\*\s*\{\s*box-sizing:\s*border-box;\s*margin:\s*0;\s*padding:\s*0;\s*\}\s*/g,
  /html\s*\{\s*scroll-behavior:\s*smooth;\s*\}\s*/g,
  /body\s*\{[^}]*font-family:\s*'DM Sans'[^}]*\}\s*/g,
];

// Template variable replacements (from const declarations in each file)
const templateVars = {
  LOAN_COLOR: '#1a4a2e',
  LOAN_ACCENT: '#2d6a4f',
  SAVINGS_COLOR: '#1a4a2e',
  SAVINGS_ACCENT: '#c1440e',
  ACCOUNT_COLOR: '#214f66',
  ACCOUNT_ACCENT: '#214f66',
  ACCENT: '#214f66',
  GREEN: '#287C3D',
  GREEN_DARK: '#1f6030',
  GREEN_LIGHT: '#eaf3de',
  ORANGE: '#E87722',
};

// Files and their JS template variables (reading from the files)
function getFileVars(content) {
  const vars = {};
  const constRe = /const\s+(\w+)\s*=\s*["']([^"']+)["']/g;
  let m;
  while ((m = constRe.exec(content)) !== null) {
    if (m[1] !== 'API_BASE' && m[1] !== 'API_ORIGIN') {
      vars[m[1]] = m[2];
    }
  }
  // Also handle hex variables
  const hexRe = /const\s+(\w+)\s*=\s*"#([0-9a-fA-F]+)"/g;
  while ((m = hexRe.exec(content)) !== null) {
    vars[m[1]] = '#' + m[2];
  }
  return vars;
}

function resolveVars(css, fileVars) {
  return css.replace(/\$\{(\w+)\}/g, (match, varName) => {
    return fileVars[varName] || templateVars[varName] || match;
  });
}

function cleanCSS(css) {
  let cleaned = css;
  for (const pattern of removePatterns) {
    cleaned = cleaned.replace(pattern, '');
  }
  return cleaned.trim();
}

function extractCSS(content) {
  let cssBlocks = [];

  // Extract const STYLES = `...` or const SECTION_STYLES = `...`
  const styleConstRe = /const\s+(?:STYLES|SECTION_STYLES)\s*=\s*`([\s\S]*?)`\s*;/g;
  let m;
  while ((m = styleConstRe.exec(content)) !== null) {
    cssBlocks.push(m[1]);
  }

  // Extract inline <style>{`...`}</style>
  const inlineStyleRe = /<style>\{`([\s\S]*?)`\}\s*<\/style>/g;
  while ((m = inlineStyleRe.exec(content)) !== null) {
    cssBlocks.push(m[1]);
  }

  // Extract one-liner <style>{`...`}</style> 
  const inlineOneLinerRe = /<style>\{`([^`]+)`\}\s*<\/style>/g;
  while ((m = inlineOneLinerRe.exec(content)) !== null) {
    // Avoid duplicates if already captured by the multi-line pattern
    if (!cssBlocks.some(b => b.includes(m[1].substring(0, 30)))) {
      cssBlocks.push(m[1]);
    }
  }

  return cssBlocks;
}

// Known @keyframes that appear in multiple files - keep only first occurrence
function matchBalancedBraces(str, startIdx) {
  let depth = 0;
  let i = startIdx;
  for (; i < str.length; i++) {
    if (str[i] === '{') depth++;
    else if (str[i] === '}') {
      depth--;
      if (depth === 0) return str.slice(startIdx, i + 1);
    }
  }
  return str.slice(startIdx);
}

function globalDeduplicateKeyframes(css) {
  const seen = new Set();
  const keyframeRe = /@keyframes\s+(\w+)\s*\{/g;
  let result = '';
  let lastIdx = 0;
  let m;
  while ((m = keyframeRe.exec(css)) !== null) {
    const braceIdx = m.index + m[0].length - 1;
    const balanced = matchBalancedBraces(css, braceIdx);
    const fullMatch = css.slice(m.index, braceIdx) + balanced;
    result += css.slice(lastIdx, m.index);
    if (!seen.has(m[1])) {
      seen.add(m[1]);
      result += fullMatch;
    }
    lastIdx = m.index + fullMatch.length;
    keyframeRe.lastIndex = lastIdx;
  }
  result += css.slice(lastIdx);
  return result;
}

let allAppendedCSS = '';

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  const content = fs.readFileSync(filePath, 'utf-8');
  const fileVars = getFileVars(content);
  const blocks = extractCSS(content);

  if (blocks.length === 0) continue;

  let fileCSS = blocks.join('\n');
  fileCSS = resolveVars(fileCSS, fileVars);
  fileCSS = cleanCSS(fileCSS);

  if (fileCSS.trim().length > 0) {
    allAppendedCSS += `\n\n/* ==== ${file} ==== */\n${fileCSS}`;
  }
}

// Global deduplicate keyframes across all appended CSS
const beforeCount = (allAppendedCSS.match(/@keyframes/g) || []).length;
allAppendedCSS = globalDeduplicateKeyframes(allAppendedCSS);
const afterCount = (allAppendedCSS.match(/@keyframes/g) || []).length;
console.log(`   Keyframes: ${beforeCount} → ${afterCount}`);

// Now write the final file
// Start with consolidated @import
let finalCSS = consolidatedImport;

// Add existing globals.css content (but remove the *, *::before rule, html rule since they are duplicates)
let existing = existingGlobals;
// Remove existing @import none if present
existing = existing.replace(/@import.*;\s*/, '');
finalCSS += existing.trim() + '\n';

// Append all component CSS
finalCSS += allAppendedCSS;

fs.writeFileSync(globalsPath, finalCSS, 'utf-8');
console.log(`✅ Wrote ${globalsPath}`);
console.log(`   Total lines: ${finalCSS.split('\n').length}`);
console.log(`   Total size: ${Buffer.byteLength(finalCSS, 'utf-8')} bytes`);
