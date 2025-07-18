const fs = require('fs')
const path = require('path')

const srcDir = path.join(__dirname, '../src/flags')
const outputDir = path.join(__dirname, '../src/flags-react')

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Convert React Native SVG imports to React web SVG
function convertToReactSvg(content, depth = 0) {
  const upLevels = '../'.repeat(depth + 1)
  return content
    .replace(/import Svg, { ([^}]+) } from 'react-native-svg'/g, `import { Svg, $1 } from "${upLevels}components/CrossPlatformSvg"`)
    .replace(/import type { SvgProps } from 'react-native-svg'/g, `import type { SvgProps } from "${upLevels}components/CrossPlatformSvg"`)
    .replace(/from 'react-native-svg'/g, `from "${upLevels}components/CrossPlatformSvg"`)
}

// Process all flag files
function processDirectory(dir, outputDir, depth = 0) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const srcPath = path.join(dir, entry.name)
    const outputPath = path.join(outputDir, entry.name)
    
    if (entry.isDirectory()) {
      // Create subdirectory and process recursively
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true })
      }
      processDirectory(srcPath, outputPath, depth + 1)
    } else if (entry.name.endsWith('.tsx') || entry.name === 'index.ts') {
      // Process flag component file or index file
      const content = fs.readFileSync(srcPath, 'utf-8')
      const convertedContent = convertToReactSvg(content, depth)
      fs.writeFileSync(outputPath, convertedContent)
      console.log(`Converted: ${entry.name}`)
    }
  }
}

// Generate the main index file for React flags
function generateReactIndex() {
  const indexPath = path.join(srcDir, 'index.ts')
  const reactIndexPath = path.join(outputDir, 'index.ts')
  
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf-8')
    content = convertToReactSvg(content, 0)
    fs.writeFileSync(reactIndexPath, content)
    console.log('Generated React index file')
  }
}

// Run the conversion
console.log('Converting React Native flags to React web flags...')
processDirectory(srcDir, outputDir)
generateReactIndex()
console.log('Conversion complete!')
