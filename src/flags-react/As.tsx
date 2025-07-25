import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAs = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="as_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#as_svg__a)">
            <Path fill="#eee" d="M512 20.4V490L23.8 255.8z" />
            <Path
                fill="#a2001d"
                d="M445.2 246.5h-30.5c8-9.6 7.5-23.7-1.5-32.7a24.2 24.2 0 0 0 0-34.2l-.5.5a25 25 0 0 0 .5-34.8l-137 137a23.9 23.9 0 0 0 34 0l2.6-2.5 65.6-6v28.3h22.3v-30.2l33.4-3z"
            />
            <Path
                fill="#ffda44"
                d="M278.3 311.7 256 300.5l22.3-11.1H423v22.3z"
            />
            <Path fill="#0052b4" d="M0 0v512h512L28.7 256.2 512 0z" />
            <Path
                fill="#d80027"
                d="M512 0 0 256l512 256v-22L43.8 256 512 20.4z"
            />
        </G>
    </Svg>
)
export default SvgAs
