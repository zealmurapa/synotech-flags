import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgXx = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="xx_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#xx_svg__a)">
            <Path fill="#eee" d="M0 0h512v512H0z" />
            <Circle cx={253} cy={380} r={32} fill="#acabb1" />
            <Path
                fill="#acabb1"
                d="M322.4 135.5c-15.6-13.6-37.4-20.3-65.5-20.3-27.9 0-49.9 7.2-66 21.4a74.9 74.9 0 0 0-24.3 55.4h-.2v12.8H224l.1-9a35.2 35.2 0 0 1 9.3-24.8c5.8-6.1 13.7-9 23.5-9 20.7 0 31 11 31 33.4 0 7.4-2 14.5-6 21.1a124.2 124.2 0 0 1-23.9 26 90.4 90.4 0 0 0-24.8 32.3c-4.5 11-6.8 26.7-6.8 45.2h51l.8-13.1a54 54 0 0 1 17.3-33.9l16.2-15.2a131.4 131.4 0 0 0 26.4-33.2 69.5 69.5 0 0 0 7.6-31.8c-.1-24.7-7.8-43.7-23.3-57.3z"
            />
        </G>
    </Svg>
)
export default SvgXx
