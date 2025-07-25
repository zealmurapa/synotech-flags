import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgTl = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="tl_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#tl_svg__a)">
            <Path fill="#ffda44" d="m0 0 214 251.8L0 512l418-256z" />
            <Path fill="#d80027" d="M512 0H0l367.3 256L0 512h512z" />
            <Path fill="#333" d="M0 0v512l256-256z" />
            <Path
                fill="#eee"
                d="m71 197.4 39 36.8 47-25.6-23 48.4 39 36.9-53.2-7-23 48.5-9.9-52.7-53.2-7 47.1-25.6z"
            />
        </G>
    </Svg>
)
export default SvgTl
