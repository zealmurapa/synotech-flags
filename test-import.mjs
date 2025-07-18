// Test the Flag component with ES modules
import { Flag } from './dist/react/index.js';

console.log('Flag imported:', Flag);
console.log('Type of Flag:', typeof Flag);

// Try to render it
if (typeof window === 'undefined') {
  // Node.js environment - just check structure
  console.log('Flag keys:', Object.keys(Flag));
  console.log('Flag prototype:', Flag.type?.name || 'anonymous function');
} else {
  // Browser environment - would actually render
  console.log('Ready to render with React');
}
