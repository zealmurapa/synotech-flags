import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgEr = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="er_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#er_svg__a)">
            <Path fill="#6da544" d="M0 0h512v256H62z" />
            <Path fill="#338af3" d="M62 256h450v256H0z" />
            <Path fill="#d80027" d="M0 0v512l512-256z" />
            <Path
                fill="#ffda44"
                d="M133.6 150.3c-49.1 0-89 40-89 89v33.4a89.1 89.1 0 0 0 178 0v-33.4c0-49-40-89-89-89zm55.6 122.4c0 24.9-16.4 46-39 53v-36.3l23.7-23.6-23.6-23.6v-19.6h-33.4V256l-23.6 23.6 23.6 23.6v22.6a55.7 55.7 0 0 1-39-53.1v-33.4a55.7 55.7 0 0 1 111.3 0z"
            />
        </G>
    </Svg>
)
export default SvgEr
