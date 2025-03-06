#!/usr/bin/env node

/**
 * Design Token Validation Script
 * 
 * This script validates that CSS files and component files are using
 * design tokens correctly instead of hardcoded values.
 */

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Patterns that might indicate hardcoded values
const COLOR_PATTERNS = [
  /#[0-9a-fA-F]{3,8}\b/g, // Hex colors
  /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/g, // RGB
  /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*[\d.]+\s*\)/g, // RGBA
  /hsl\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*\)/g, // HSL
  /hsla\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*,\s*[\d.]+\s*\)/g, // HSLA
]

// Allowed exceptions (values that are okay to hardcode)
const ALLOWED_VALUES = [
  '#000000', '#000', '#ffffff', '#fff', 'rgba(0,0,0,0)', 'rgba(0, 0, 0, 0)', 
  'transparent', 'currentColor', 'inherit', 'initial',
  'rgb(0, 0, 0)', 'rgb(255, 255, 255)',
];

// Extensions to check
const FILE_EXTENSIONS = ['.css', '.scss', '.ts', '.tsx', '.js', '.jsx'];

// Directories to scan
const SCAN_DIRS = [
  path.resolve(__dirname, '../../web/src'),
  path.resolve(__dirname, '../src'),
];

// CSS variables that should be used
const DESIGN_TOKENS = [
  '--background', '--foreground', '--primary', '--secondary', 
  '--accent', '--muted', '--card', '--border', '--input',
  '--ring', '--destructive', '--popover'
];

console.log('🔍 Validating design token usage...');

let totalFiles = 0;
let filesWithIssues = 0;
let totalIssues = 0;

function scanDirectory(dir) {
  SCAN_DIRS.forEach(scanDir => {
    const pattern = path.join(scanDir, '**/*+(' + FILE_EXTENSIONS.join('|') + ')');
    
    const files = glob.sync(pattern);
    totalFiles += files.length;
    
    files.forEach(file => {
      const content = fs.readFileSync(file, 'utf8');
      let fileHasIssues = false;
      
      // Check for potentially hardcoded color values
      COLOR_PATTERNS.forEach(pattern => {
        const matches = content.match(pattern) || [];
        
        // Filter out allowed values
        const issues = matches.filter(match => !ALLOWED_VALUES.includes(match));
        
        if (issues.length > 0) {
          if (!fileHasIssues) {
            console.log(`\n⚠️  ${path.relative(process.cwd(), file)}`);
            fileHasIssues = true;
            filesWithIssues++;
          }
          
          console.log(`  Potential hardcoded colors: ${issues.join(', ')}`);
          totalIssues += issues.length;
        }
      });
      
      // Optional: Check for CSS custom property usage in components
      if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
        // Advanced check for inline styles with hardcoded values
        // (simplified implementation)
      }
    });
  });
}

scanDirectory();

console.log('\n---------------------------------------');
if (totalIssues > 0) {
  console.log(`❌ Found ${totalIssues} potential issues in ${filesWithIssues} files (scanned ${totalFiles} files)`);
  console.log('\nRecommendation: Replace hardcoded values with design tokens from the design system.');
  console.log('For example, use "var(--primary)" instead of hex/rgb values.');
  process.exit(1);
} else {
  console.log(`✅ No issues found! Scanned ${totalFiles} files.`);
  process.exit(0);
}
