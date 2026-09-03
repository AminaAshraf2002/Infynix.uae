const fs = require('fs');
const file = 'src/components/InsightsPage.jsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/fontFamily:\s*['"`][^'"`]+['"`]/g, `fontFamily: "'Montserrat', sans-serif"`);

fs.writeFileSync(file, content);
console.log('Replaced all font families in InsightsPage.jsx with Montserrat');
