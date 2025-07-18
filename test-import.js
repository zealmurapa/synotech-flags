// Test import to debug the issue
const { Flag } = require('./dist/react/index.js');
console.log('Flag imported:', Flag);
console.log('Type of Flag:', typeof Flag);

if (Flag) {
  console.log('Flag.name:', Flag.name);
  console.log('Flag.displayName:', Flag.displayName);
}
