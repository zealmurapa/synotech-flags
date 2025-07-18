// Test the flags object and individual flag components
const { Flag, flags, Us } = require('./dist/react/index.js');

console.log('=== Flag Component ===');
console.log('Flag:', Flag);
console.log('Type:', typeof Flag);

console.log('\n=== flags Object ===');
console.log('flags:', typeof flags);
console.log('flags keys length:', Object.keys(flags).length);
console.log('First 5 flags:', Object.keys(flags).slice(0, 5));

console.log('\n=== Direct Flag Components ===');
console.log('Us component:', Us);
console.log('Type:', typeof Us);

console.log('\n=== Testing flags["us"] ===');
console.log('flags["us"]:', flags["us"]);
console.log('flags["US"]:', flags["US"]);
