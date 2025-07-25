import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgHr = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="hr_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#hr_svg__a)">
            <Path
                fill="#eee"
                d="m0 167 253.8-19.3L512 167v178l-254.9 32.3L0 345z"
            />
            <Path fill="#d80027" d="M0 0h512v167H0z" />
            <Path fill="#0052b4" d="M0 345h512v167H0z" />
            <Path
                fill="#338af3"
                d="M322.8 178h-44.5l7.4-55.7 29.7-22.2 29.6 22.2V167zm-133.6 0h44.5l-7.4-55.7-29.7-22.2-29.6 22.2V167z"
            />
            <Path
                fill="#0052b4"
                d="M285.7 178h-59.4v-55.7l29.7-22.2 29.7 22.2z"
            />
            <Path
                fill="#eee"
                d="M167 167v122.3a89 89 0 0 0 35.8 71.3l15.5-3.9 19.7 19.8a89.1 89.1 0 0 0 18 1.8 89 89 0 0 0 17.9-1.8l22.4-18.7 13 2.8a89 89 0 0 0 35.7-71.3V167z"
            />
            <Path
                fill="#d80027"
                d="M167 167h35.6v35.5H167zm71.2 0h35.6v35.5h-35.6zm71.2 0H345v35.5h-35.6zm-106.8 35.5h35.6v35.6h-35.6zm71.2 0h35.6v35.6h-35.6zM167 238.1h35.6v35.6H167zm35.6 35.6h35.6v35.6h-35.6zm35.6-35.6h35.6v35.6h-35.6zm71.2 0H345v35.6h-35.6zm-35.6 35.6h35.6v35.6h-35.6zm-35.6 35.6h35.6V345h-35.6zm-35.6 0h-33.3c3 13.3 9 25.4 17.3 35.6h16zM309.4 345h16a88.8 88.8 0 0 0 17.3-35.6h-33.3zm-106.8 0v15.6a88.7 88.7 0 0 0 35.6 16V345zm71.2 0v31.6a88.7 88.7 0 0 0 35.6-16V345z"
            />
        </G>
    </Svg>
)
export default SvgHr
