import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgNa = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="na_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#na_svg__a)">
            <Path
                fill="#eee"
                d="m0 401.9 160.6-237.1L401.9 0H449l63 63v47.3L350.3 339.2 110.3 512H63L0 449z"
            />
            <Path fill="#a2001d" d="M0 512h63L512 63V0h-63L0 449z" />
            <Path fill="#0052b4" d="M0 0v401.9L401.9 0z" />
            <Path fill="#496e2d" d="M512 512V110.3L110.3 512z" />
            <Path
                fill="#ffda44"
                d="m211.5 144.7-28.7 13.5L198 186l-31.2-6-4 31.5-21.6-23.2-21.7 23.2-4-31.5-31 6 15.2-27.8L71 144.7l28.7-13.5-15.3-27.8 31.1 6 4-31.5 21.7 23.2L163 78l4 31.5 31-6-15.2 27.8z"
            />
        </G>
    </Svg>
)
export default SvgNa
