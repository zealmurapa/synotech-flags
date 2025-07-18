import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgNc = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="nc_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#nc_svg__a)">
            <Path fill="#496e2d" d="M0 352h512v160H0z" />
            <Path fill="#d80027" d="M0 160h512v192H0z" />
            <Path fill="#0052b4" d="M0 0h512v160H0z" />
            <Path
                fill="#ffda44"
                d="M398 256a168 168 0 1 1-336 0 168 168 0 0 1 336 0z"
            />
            <Path
                fill="#333"
                d="M230 80a176 176 0 1 0 0 352 176 176 0 0 0 0-352zm-8 16v34c-8 4-14 8-15 16l-1 16 6-3 10-4v8a24 24 0 0 0-16 23 24 24 0 0 0 16 22v8h-20v16h20v8a24 24 0 0 0-16 22 24 24 0 0 0 16 23v7h-20v17h20v7a24 24 0 0 0-16 23 24 24 0 0 0 16 22v8c-10 0-18 3-23 7-7 5-22 20-30 28a160 160 0 0 1 53-308zm16 0a160 160 0 0 1 51 309l-30-29c-5-4-12-6-21-7v-8a24 24 0 0 0 16-22 24 24 0 0 0-16-23v-7h21v-16h-21v-8a24 24 0 0 0 16-23 24 24 0 0 0-16-22v-8h21v-16h-21v-7a24 24 0 0 0 16-23 24 24 0 0 0-16-23v-20c6-5 11-13 17-23 4-8 2-11 2-11l-2 3-17 11V96z"
            />
        </G>
    </Svg>
)
export default SvgNc
