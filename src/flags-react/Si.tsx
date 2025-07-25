import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgSi = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="si_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#si_svg__a)">
            <Path
                fill="#0052b4"
                d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
            />
            <Path fill="#eee" d="M0 0h512v167H0z" />
            <Path fill="#d80027" d="M0 345h512v167H0z" />
            <Path fill="#0052b4" d="M222.7 167v-66.8H89V167l67 82.6z" />
            <Path
                fill="#eee"
                d="M89 167v22.2c0 51.1 66.8 66.8 66.8 66.8s66.8-15.7 66.8-66.8V167l-22.3 22.2-44.5-33.4-44.5 33.4z"
            />
        </G>
    </Svg>
)
export default SvgSi
