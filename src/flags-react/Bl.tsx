import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgBl = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="bl_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#bl_svg__a)">
            <Path fill="#eee" d="M0 0h512v512H0z" />
            <Path
                fill="#acabb1"
                d="M167 178a28 28 0 0 0-28 28H55a28 28 0 0 0 28 28 28 28 0 0 0 28 28 28 28 0 0 0 28 28h234a28 28 0 0 0 28-28 28 28 0 0 0 28-28 28 28 0 0 0 28-28h-84a28 28 0 0 0-28-28z"
            />
            <Path
                fill="#ffda44"
                d="M123 357h44v44h-44zm222 0h44v44h-44zm-178 11h178v44H167zm67-268v33.5L223 145l-12-6v-17h-44v56l89 14 89-14v-56h-44v17l-12 6-11-11.5V100z"
            />
            <Path
                fill="#0052b4"
                d="M167 178v112c0 68 89 88.5 89 88.5s89-20.4 89-88.5V178z"
            />
            <Path fill="#d80027" d="M167 222.1h178v69H167z" />
        </G>
    </Svg>
)
export default SvgBl
