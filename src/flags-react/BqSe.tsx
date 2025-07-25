import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgBqSe = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="bq-se_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#bq-se_svg__a)">
            <Path
                fill="#0052b4"
                d="M0 44.6 255.3 18 512 44.6v194.7L493.7 256l18.3 16.7v194.7l-255.5 27.5L0 467.4V272.7l17.5-17.3L0 239.3z"
            />
            <Path fill="#eee" d="m100.2 256.1 155.8-98 155.8 98-155.8 98z" />
            <Path
                fill="#6da544"
                d="M167 300.6h200.3l-44.5-66.8-22.3 22.3-22.2-11-22.3 33.3h-44.5l-22.3-22.3z"
            />
            <Path
                fill="#ffda44"
                d="m256 189.3 5.5 17h18l-14.6 10.5 5.6 17-14.5-10.5-14.5 10.5 5.6-17-14.5-10.5h17.9z"
            />
            <Path
                fill="#d80027"
                d="M0 0v44.6h239.4v96l-157 98.7H0v33.4h82l157.3 99v95.7H0V512h512v-44.6H272.7v-95.8L430 272.7h82v-33.4h-82.4l-156.9-98.6v-96H512V0H0zm256 169.6 137.6 86.5L256 342.6l-137.6-86.5L256 169.6z"
            />
        </G>
    </Svg>
)
export default SvgBqSe
