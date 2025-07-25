import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgGg = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="gg_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#gg_svg__a)">
            <Path
                fill="#eee"
                d="M0 0h222.6l31 23.4L289.4 0H512v222.6l-21.5 31 21.5 35.8V512H289.4l-34.2-20.5-32.6 20.5H0V289.4l22.7-32.6L0 222.6z"
            />
            <Path
                fill="#d80027"
                d="M222.6 0v222.6H0v66.8h222.6V512h66.8V289.4H512v-66.8H289.4V0z"
            />
            <Path
                fill="#ffda44"
                d="m328.3 267 16.7 11.3v-44.7L328.3 245h-61.2v-61.2l11.2-16.8h-44.6l11.2 16.8v61.1h-61.2L167 233.6v44.7l16.7-11.3h61.2v61.3l-11.2 16.6h44.6L267 328.3V267z"
            />
        </G>
    </Svg>
)
export default SvgGg
