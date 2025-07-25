import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgRw = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="rw_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#rw_svg__a)">
            <Path fill="#496e2d" d="m0 378.5 254.1-22.1L512 378.5V512H0z" />
            <Path fill="#ffda44" d="m0 256.1 255-30.3 257 30.3v122.4H0z" />
            <Path fill="#338af3" d="M0 0h512v256H0z" />
            <Path
                fill="#ffda44"
                d="m289.4 150 31.3 14.6L304 195l34-6.5 4.3 34.3 23.6-25.2 23.7 25.2 4.3-34.3 34 6.5-16.7-30.3 31.2-14.7-31.2-14.7 16.6-30.3-34 6.5-4.2-34.3-23.7 25.3-23.6-25.3-4.3 34.3-34-6.5 16.7 30.3z"
            />
        </G>
    </Svg>
)
export default SvgRw
