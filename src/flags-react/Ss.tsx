import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgSs = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ss_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ss_svg__a)">
            <Path
                fill="#eee"
                d="M74.1 115 512 156.9v31.5l-42.4 70.3 42.4 64.2v31.5L74.1 386.8z"
            />
            <Path fill="#333" d="M0 0h512v156.8H50z" />
            <Path fill="#a2001d" d="M150.6 188.3H512v134.5H150.6z" />
            <Path fill="#496e2d" d="M50 354.3h462V512H0z" />
            <Path fill="#0052b4" d="M0 0v512l256-256z" />
            <Path
                fill="#ffda44"
                d="m83.4 192.4 31.2 43.6 51.2-16.3-31.9 43.2 31.3 43.6-51-16.9-31.7 43.2.3-53.7L32 262.2 83 246z"
            />
        </G>
    </Svg>
)
export default SvgSs
