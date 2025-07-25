import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgXk = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="xk_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#xk_svg__a)">
            <Path fill="#0052b4" d="M0 0h512v512H0z" />
            <Path
                fill="#eee"
                d="m112.4 155.8 5.6 17h17.9l-14.5 10.5 5.5 17-14.5-10.5L98 200.3l5.5-17L89 172.8h18zm55.7-16.7 5.5 17h18L177 166.6l5.6 17-14.5-10.5-14.5 10.6 5.6-17-14.5-10.6h17.9zm55.7-16.7 5.5 17h17.9L232.7 150l5.5 17-14.4-10.6-14.5 10.6 5.5-17-14.5-10.6h18zm175.8 33.4-5.6 17h-17.9l14.5 10.5-5.5 17 14.5-10.5 14.4 10.5-5.5-17 14.5-10.5h-18zm-55.7-16.7-5.5 17h-18l14.6 10.5-5.6 17 14.5-10.5 14.5 10.6-5.6-17 14.5-10.6h-17.9zm-55.7-16.7-5.5 17h-17.9l14.5 10.6-5.5 17 14.4-10.6 14.5 10.6-5.5-17 14.5-10.6h-18z"
            />
            <Path
                fill="#ffda44"
                d="M300.5 267.1 256 211.5l-22.3 11.1V245l-33.4 22h-22.2v29a89 89 0 0 1 55.6 82.5H256v-22.2l22.3-22.3 22.2 22.3 22.3-22.3v-22.2l22.2-33.4-44.5-11.2z"
            />
        </G>
    </Svg>
)
export default SvgXk
