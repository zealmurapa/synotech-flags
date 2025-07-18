import * as fs from 'fs'
import * as path from 'path'

const srcDir = path.join(__dirname, '../../src/flags')
const outputDir = path.join(__dirname, '../../src/flags-react')

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Convert React Native SVG imports to React web SVG
function convertToReactSvg(content: string): string {
  return content
    .replace(/import Svg, { ([^}]+) } from 'react-native-svg'/g, 'import { $1 } from "../components/CrossPlatformSvg"')
    .replace(/import type { SvgProps } from 'react-native-svg'/g, 'import type { SvgProps } from "../components/CrossPlatformSvg"')
    .replace(/from 'react-native-svg'/g, 'from "../components/CrossPlatformSvg"')
}

// Process all flag files
function processDirectory(dir: string, outputDir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const srcPath = path.join(dir, entry.name)
    const outputPath = path.join(outputDir, entry.name)
    
    if (entry.isDirectory()) {
      // Create subdirectory and process recursively
      if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true })
      }
      processDirectory(srcPath, outputPath)
    } else if (entry.name.endsWith('.tsx') && entry.name !== 'index.ts') {
      // Process flag component file
      const content = fs.readFileSync(srcPath, 'utf-8')
      const convertedContent = convertToReactSvg(content)
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
    content = content.replace(/from 'react-native-svg'/g, 'from "../components/CrossPlatformSvg"')
    fs.writeFileSync(reactIndexPath, content)
    console.log('Generated React index file')
  }
}

// Run the conversion
console.log('Converting React Native flags to React web flags...')
processDirectory(srcDir, outputDir)
generateReactIndex()
console.log('Conversion complete!')
