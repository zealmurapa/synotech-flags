// Platform detection utility
export const isReactNative = () => {
  try {
    // Check if we're in React Native environment
    return typeof (global as any).window === 'undefined' && 
           typeof (global as any).navigator !== 'undefined' && 
           (global as any).navigator.product === 'ReactNative'
  } catch {
    // If navigator is not available, check for other RN indicators
    try {
      require('react-native')
      return true
    } catch {
      return false
    }
  }
}

export const isWeb = () => {
  return typeof (global as any).window !== 'undefined' && 
         typeof (global as any).document !== 'undefined'
}
