import React from 'react'
import { Flag } from '../dist/react'

// Test React.js version
function TestApp() {
  return (
    <div>
      <h1>React.js Flag Test</h1>
      <Flag code="us" width={48} height={48} />
      <Flag code="gb" width={48} height={48} />
      <Flag code="ca" width={48} height={48} />
    </div>
  )
}

export default TestApp
