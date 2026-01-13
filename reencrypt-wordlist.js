// Re-encrypt wordlist using REACT_APP_ENCRYPTION_KEY from env
const fs = require('fs');
const path = require('path');

const KEY = process.env.REACT_APP_ENCRYPTION_KEY;
if (!KEY) {
  console.error('Missing REACT_APP_ENCRYPTION_KEY');
  process.exit(1);
}

function xorEncrypt(text, key) {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return result;
}

function encrypt(text) {
  const encrypted = xorEncrypt(text, KEY);
  return Buffer.from(encrypted, 'binary').toString('base64');
}

const inputPath = path.join(__dirname, 'src', 'wordlist-new.json');
const outputPath = path.join(__dirname, 'src', 'wordlist-new.encrypted.json');

const wordlist = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
const encrypted = encrypt(JSON.stringify(wordlist));
fs.writeFileSync(outputPath, JSON.stringify({ encrypted, version: '3.0' }, null, 2));

console.log('Re-encrypted wordlist to', outputPath);
