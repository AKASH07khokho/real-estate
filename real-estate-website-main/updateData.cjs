const fs = require('fs');
let data = fs.readFileSync('src/data.jsx', 'utf8');

data = data.replace(/type: '(House|Apartament)'/g, "type: 'Land Property'");
data = data.replace(/name: '(House|Apartament) (\\d+)'/g, "name: 'Land $2'");
data = data.replace(/name: '[^']+',\\s*phone: '[^']+',/g, "name: 'S. V. Radhakrishnan',\\n      phone: '90473 35599',");

fs.writeFileSync('src/data.jsx', data);
