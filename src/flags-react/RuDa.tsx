import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgRuDa = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ru-da_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ru-da_svg__a)">
            <Path fill="#0052b4" d="m0 167 256-32 256 32v178l-256 32L0 345Z" />
            <Path fill="#d80027" d="M0 345h512v167H0Z" />
            <Path fill="#6da544" d="M0 0h512v167H0Z" />
        </G>
    </Svg>
)
export default SvgRuDa
