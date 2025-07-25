import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAq = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="aq_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#aq_svg__a)">
            <Path fill="#338af3" d="M0 0h512v512H0z" />
            <Path
                fill="#eee"
                d="m135 343-41-70 17-38-40-51-9-37 74 51 45-11 19-67 50-29 75 11 87 45 4 74 28 10v76l-53 94-64 20-59-14 15-25-7-26-8 7z"
            />
        </G>
    </Svg>
)
export default SvgAq
