import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgUr = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ur_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ur_svg__a)">
            <Path fill="#eee" d="M0 0h133.6l50.2 252.5L133.6 512H0z" />
            <Path fill="#496e2d" d="M133.6 0H512v512H133.6z" />
            <Path
                fill="#eee"
                d="M365.5 298.3A72.3 72.3 0 1 1 313.7 168a89 89 0 1 0 74.6 103.2 72 72 0 0 1-22.8 27.2zM364 167l18.2 19.6 24.3-11.3-13 23.5 18.2 19.6-26.3-5.1-13 23.4-3.3-26.7-26.1-5 24.4-11.3z"
            />
        </G>
    </Svg>
)
export default SvgUr
