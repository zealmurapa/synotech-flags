import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgSg = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="sg_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#sg_svg__a)">
            <Path
                fill="#ffda44"
                d="m0 378.4 252.9-28.8L512 378.4V512H322.8L256 481l-66.8 31H0z"
            />
            <Path fill="#6da544" d="m0 256 249.8-28L512 256v122.4H0z" />
            <Path fill="#eee" d="m0 133.6 255.3-28.3L512 133.6V256H0z" />
            <Path fill="#0052b4" d="M0 0h189.2L256 30l66.8-30H512v133.6H0z" />
            <Path
                fill="#ffda44"
                d="m137.7 55.7 6.9 21.2H167L148.9 90l6.9 21.3-18.1-13.1-18 13.1 6.8-21.3-18-13h22.3z"
            />
            <Path fill="#d80027" d="M189.2 0h133.6v512H189.2z" />
        </G>
    </Svg>
)
export default SvgSg
