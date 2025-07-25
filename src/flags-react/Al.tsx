import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAl = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="al_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#al_svg__a)">
            <Path fill="#d80027" d="M0 0h512v512H0z" />
            <Path
                fill="#333"
                d="M400.7 190H308a33.3 33.3 0 0 0-24.2-56.4 33.3 33.3 0 0 0-27.8 14.9 33.4 33.4 0 1 0-52 41.5h-92.7a45.8 45.8 0 0 0 46 44.5h-1.5c0 24.6 20 44.6 44.5 44.6 0 8 2.1 15.4 5.8 21.8l-37 37 28.4 28.3 40.2-40.2a30.5 30.5 0 0 0 4.9 1.4l-24.3 54.8L256 423l37.7-40.8-24.3-54.8a30.4 30.4 0 0 0 4.9-1.4l40.2 40.2 28.3-28.3-37-37a44.2 44.2 0 0 0 5.9-21.8c24.5 0 44.5-20 44.5-44.6h-1.5c24.6 0 46-19.9 46-44.5z"
            />
        </G>
    </Svg>
)
export default SvgAl
