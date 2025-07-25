import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgGn = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="gn_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#gn_svg__a)">
            <Path
                fill="#ffda44"
                d="M167 0h178l25.9 252.3L345 512H167l-29.8-253.4z"
            />
            <Path fill="#d80027" d="M0 0h167v512H0z" />
            <Path fill="#6da544" d="M345 0h167v512H345z" />
        </G>
    </Svg>
)
export default SvgGn
