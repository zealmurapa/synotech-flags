import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgKn = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="kn_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#kn_svg__a)">
            <Path
                fill="#ffda44"
                d="m0 401.9 173.6-225.3L401.9 0H449l63 63-.1 47.3-167.3 223.5L110.3 512H63L0 449z"
            />
            <Path fill="#6da544" d="M0 0v401.9L401.9 0z" />
            <Path fill="#d80027" d="M512 512V110.3L110.3 512z" />
            <Path fill="#333" d="M0 512h63L512 63V0h-63L0 449z" />
            <Path
                fill="#eee"
                d="m162.8 302 24 12.2 19-19-4.4 26.5 24 12.2-26.6 4.2-4.2 26.5-12-24L156 345l19-19zM302 162.8l24 12.1 19-19-4.3 26.6 24 12.1-26.6 4.2-4.2 26.5-12.2-23.9-26.5 4.2 19-19z"
            />
        </G>
    </Svg>
)
export default SvgKn
