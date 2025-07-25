import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgGm = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="gm_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#gm_svg__a)">
            <Path
                fill="#eee"
                d="m0 155.8 255-30.6 257 30.6v33.4l-27.7 67.2 27.7 66.4v33.4l-256 32.4L0 356.2v-33.4l28.8-68.5L0 189.2z"
            />
            <Path fill="#a2001d" d="M0 0h512v155.8H0z" />
            <Path fill="#0052b4" d="M0 189.2h512v133.6H0z" />
            <Path fill="#496e2d" d="M0 356.2h512V512H0z" />
        </G>
    </Svg>
)
export default SvgGm
