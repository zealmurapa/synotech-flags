import { defineConfig } from 'tsup'

export default defineConfig([
  // React Native build (using react-native-svg)
  {
    entry: {
      'index': 'src/index.tsx'
    },
    format: ['cjs', 'esm'],
    target: 'es2017',
    outDir: 'dist/react-native',
    dts: true,
    clean: true,
    external: ['react', 'react-native', 'react-native-svg'],
    outExtension: ({ format }) => ({
      js: format === 'cjs' ? '.cjs' : '.js'
    }),
    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      }
    },
  },
  // React.js build (using regular SVG elements)
  {
    entry: {
      'index': 'src/index.react.tsx'
    },
    format: ['cjs', 'esm'],
    target: 'es2017',
    outDir: 'dist/react',
    dts: true,
    clean: false,
    external: ['react', 'react-dom'],
    outExtension: ({ format }) => ({
      js: format === 'cjs' ? '.cjs' : '.js'
    }),
    esbuildOptions(options) {
      options.banner = {
        js: '"use client";',
      }
    },
  },
])
