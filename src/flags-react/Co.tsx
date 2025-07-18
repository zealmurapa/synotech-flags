import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgCo = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="co_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#co_svg__a)">
            <Path fill="#d80027" d="m0 384 255.8-29.7L512 384v128H0z" />
            <Path fill="#0052b4" d="m0 256 259.5-31L512 256v128H0z" />
            <Path fill="#ffda44" d="M0 0h512v256H0z" />
        </G>
    </Svg>
)
export default SvgCo
