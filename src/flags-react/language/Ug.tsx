import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgUg = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ug_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ug_svg__a)">
            <Path fill="#338af3" d="M0 0h512v512H0Z" />
            <Path
                fill="#eee"
                d="m312 256 116-38-72 99V195l72 99zm8 69a128 128 0 1 1 0-137 102 102 0 1 0 0 137z"
            />
        </G>
    </Svg>
)
export default SvgUg
