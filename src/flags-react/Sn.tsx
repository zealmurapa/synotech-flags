import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgSn = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="sn_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#sn_svg__a)">
            <Path
                fill="#ffda44"
                d="M144.8 0h222.4l32 260-32 252H144.8l-32.1-256z"
            />
            <Path fill="#496e2d" d="M0 0h144.8v512H0z" />
            <Path fill="#d80027" d="M367.2 0H512v512H367.2z" />
            <Path
                fill="#496e2d"
                d="m256.1 167 22.1 68h71.5L292 277l22 68-57.8-42-57.9 42 22.1-68-57.8-42H234z"
            />
        </G>
    </Svg>
)
export default SvgSn
