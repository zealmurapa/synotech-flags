import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgBr = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="br_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#br_svg__a)">
            <Path fill="#6da544" d="M0 0h512v512H0z" />
            <Path fill="#ffda44" d="M256 100.2 467.5 256 256 411.8 44.5 256z" />
            <Path
                fill="#eee"
                d="M174.2 221a87 87 0 0 0-7.2 36.3l162 49.8a88.5 88.5 0 0 0 14.4-34c-40.6-65.3-119.7-80.3-169.1-52z"
            />
            <Path
                fill="#0052b4"
                d="M255.7 167a89 89 0 0 0-41.9 10.6 89 89 0 0 0-39.6 43.4 181.7 181.7 0 0 1 169.1 52.2 89 89 0 0 0-9-59.4 89 89 0 0 0-78.6-46.8zM212 250.5a149 149 0 0 0-45 6.8 89 89 0 0 0 10.5 40.9 89 89 0 0 0 120.6 36.2 89 89 0 0 0 30.7-27.3A151 151 0 0 0 212 250.5z"
            />
        </G>
    </Svg>
)
export default SvgBr
