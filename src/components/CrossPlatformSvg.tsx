import * as React from 'react'

// React Native SVG types
export interface ReactNativeSvgProps {
  width?: number | string
  height?: number | string
  viewBox?: string
  fill?: string
  stroke?: string
  style?: any
  children?: React.ReactNode
}

// React Web SVG props
export interface ReactWebSvgProps extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode
}

// Common SVG props that work for both platforms
export interface SvgProps {
  width?: number | string
  height?: number | string
  viewBox?: string
  fill?: string
  stroke?: string
  style?: any
  children?: React.ReactNode
}

// Cross-platform SVG wrapper
export const Svg: React.FC<SvgProps> = ({ children, ...props }) => {
  // In React Native, this will be replaced by react-native-svg
  // In React web, this will use the native SVG element
  return React.createElement('svg', props, children)
}

// Cross-platform components
export const Circle: React.FC<any> = (props) => React.createElement('circle', props)
export const Path: React.FC<any> = (props) => React.createElement('path', props)
export const G: React.FC<any> = (props) => React.createElement('g', props)
export const Mask: React.FC<any> = (props) => React.createElement('mask', props)
export const Defs: React.FC<any> = (props) => React.createElement('defs', props)
export const Rect: React.FC<any> = (props) => React.createElement('rect', props)
export const Polygon: React.FC<any> = (props) => React.createElement('polygon', props)
export const Ellipse: React.FC<any> = (props) => React.createElement('ellipse', props)
export const Line: React.FC<any> = (props) => React.createElement('line', props)
