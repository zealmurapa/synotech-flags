import React from 'react'
import { Flag } from '../dist/react-native'

// Test React Native version
function TestApp() {
  return (
    <>
      <Flag code="us" width={48} height={48} />
      <Flag code="gb" width={48} height={48} />
      <Flag code="ca" width={48} height={48} />
    </>
  )
}

export default TestApp
