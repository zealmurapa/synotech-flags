import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgIq = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="iq_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#iq_svg__a)">
            <Path
                fill="#eee"
                d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
            />
            <Path fill="#a2001d" d="M0 0h512v167H0z" />
            <Path fill="#333" d="M0 345h512v167H0z" />
            <Path
                fill="#496e2d"
                d="M194.8 239.3h-49.4a22.3 22.3 0 0 1 21.6-16.7v-33.4c-30.7 0-55.7 25-55.7 55.7v27.8h83.5a5.6 5.6 0 0 1 5.5 5.6v11H89v33.5h144.7v-44.5a39 39 0 0 0-39-39zm83.5 50v-100h-33.4v133.5h55.6v-33.4zm111.3 0v-100h-33.4v100H345V256h-33.3v66.8h100.1v-33.4z"
            />
        </G>
    </Svg>
)
export default SvgIq
