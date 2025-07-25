import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAm = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="am_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#am_svg__a)">
            <Path
                fill="#0052b4"
                d="m0 166.9 253-26.7L512 167v178l-261.1 26L0 344.8z"
            />
            <Path fill="#d80027" d="M0 0h512v166.9H0z" />
            <Path fill="#ff9811" d="M0 344.9h512V512H0z" />
        </G>
    </Svg>
)
export default SvgAm
