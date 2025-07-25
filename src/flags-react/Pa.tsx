import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgPa = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="pa_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#pa_svg__a)">
            <Path fill="#eee" d="M0 0h256l256 256v256H256L0 256z" />
            <Path fill="#0052b4" d="M0 256v256h256V256z" />
            <Path fill="#d80027" d="M256 0h256v256H256z" />
            <Path
                fill="#0052b4"
                d="m152.4 89 16.6 51h53.6l-43.4 31.6 16.6 51-43.4-31.5-43.4 31.5 16.6-51L82.2 140h53.6z"
            />
            <Path
                fill="#d80027"
                d="m359.6 289.4 16.6 51h53.6L386.4 372l16.6 51-43.4-31.5-43.4 31.6 16.6-51-43.4-31.6H343z"
            />
        </G>
    </Svg>
)
export default SvgPa
