#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const pkgPath = path.join(__dirname, '..', 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const parts = String(pkg.version || '0.0.0').split('.').map(n=>parseInt(n,10)||0);
parts[2] += 1;
pkg.version = parts.join('.');
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
try {
  require('child_process').execSync('git add ' + pkgPath, { stdio: 'inherit' });
} catch {}
