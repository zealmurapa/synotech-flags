import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgJm = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="jm_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#jm_svg__a)">
            <Path
                fill="#333"
                d="M23.3 488.6 0 465V47.1l23.4-23.7 464 464 24.6-22.6V47.1l-24.5-22.7z"
            />
            <Path
                fill="#6da544"
                d="M23.3 23.3 47.1 0h417.7l23.8 23.4-464 464L47 512h418l22.6-24.5z"
            />
            <Path
                fill="#ffda44"
                d="M0 0v47.1L208.8 256 0 464.9V512h47.1L256 303.2 464.9 512H512v-47L303.1 256 512 47.2V0h-47.2L256 208.9 47 0z"
            />
        </G>
    </Svg>
)
export default SvgJm
