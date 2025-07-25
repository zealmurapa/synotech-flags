import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAz = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="az_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#az_svg__a)">
            <Path
                fill="#d80027"
                d="m0 166.9 253-31.8 259 31.8v178l-257.5 37.4L0 345z"
            />
            <Path fill="#338af3" d="M0 0h512v166.9H0z" />
            <Path fill="#6da544" d="M0 344.9h512V512H0z" />
            <G fill="#eee">
                <Path d="M261.6 328.2a72.3 72.3 0 1 1 34.4-136 89 89 0 1 0 0 127.3 72 72 0 0 1-34.4 8.7z" />
                <Path d="m317.2 206 9.6 26.8 25.8-12.3-12.2 25.8 26.9 9.6-27 9.6 12.3 25.8-25.8-12.3-9.6 27-9.6-27-25.8 12.3 12.3-25.8-27-9.6 27-9.6-12.3-25.8 25.8 12.3z" />
            </G>
        </G>
    </Svg>
)
export default SvgAz
