const fs = require('fs');
const filePath = 'd:\\development\\react\\paces-backoffice\\src\\app\\layouts\\backend\\MasterLayout.tsx';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split(/\r?\n/);
const targetLines = lines.slice(15, 20); // 0-indexed, so 15 is line 16
fs.writeFileSync('debug_output.txt', JSON.stringify(targetLines, null, 2));
