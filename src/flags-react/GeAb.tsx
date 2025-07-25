import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgGeAb = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ge-ab_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ge-ab_svg__a)">
            <Path
                fill="#eee"
                d="M256.6 28.8 512 73v73.2l-30.6 37 30.6 36.1v73.2l-37.5 35.9 37.5 37.2v73.2l-242 36.7L0 438.9v-73.2l28.2-35.3L0 292.6v-73.2z"
            />
            <Path
                fill="#6da544"
                d="m256 0-56.1 73.1H512V0zm-56.1 146.3 56.1 73.1h256v-73.1zM0 292.6v73.1h512v-73.1zm0 146.3V512h512v-73.1z"
            />
            <Path fill="#d80027" d="M0 0h256v219.4H0z" />
            <Path
                fill="#eee"
                d="M128 196.3 116.9 174v-44.5l27.8-22.3 27.8 22.3v33.4l11.2-11.2V174l-22.3 22.3zM68.1 128l3 9h9.5l-7.7 5.7 3 9-7.8-5.6-7.7 5.6 3-9-7.7-5.6h9.5zm22.3-22.3 3 9.1h9.5l-7.7 5.6 3 9-7.8-5.5-7.7 5.6 3-9-7.8-5.7h9.5zm22.3-22.2 2.9 9h9.5l-7.7 5.7 3 9-7.7-5.6-7.8 5.6 3-9-7.7-5.7h9.5zM221.3 128l-3 9h-9.5l7.7 5.7-3 9 7.8-5.6 7.7 5.6-3-9 7.7-5.6h-9.5zM199 105.7l-3 9.1h-9.5l7.7 5.6-3 9 7.8-5.5 7.7 5.6-3-9 7.8-5.7h-9.6zm-22.3-22.2-3 9h-9.4l7.7 5.7-3 9 7.7-5.6 7.8 5.6-3-9 7.7-5.7h-9.5zm-32-11.2-3 9.1h-9.5L140 87l-3 9 7.8-5.5 7.7 5.6-3-9 7.8-5.7h-9.6z"
            />
        </G>
    </Svg>
)
export default SvgGeAb
