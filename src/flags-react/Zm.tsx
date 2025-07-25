import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgZm = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="zm_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#zm_svg__a)">
            <Path fill="#496e2d" d="M0 0h512v256L256 512H0z" />
            <Path
                fill="#ff9811"
                d="M473 167h-66.7a22.3 22.3 0 0 0-44.6 0H295a23 23 0 0 0 23 22.2h-.8c0 12.3 10 22.3 22.3 22.3 0 12.3 10 22.2 22.2 22.2h44.6c12.3 0 22.2-10 22.2-22.2 12.3 0 22.3-10 22.3-22.3h-.8a23 23 0 0 0 23-22.2z"
            />
            <Path
                fill="#333"
                d="M341.3 256h85.4l21.1 126.3L426.7 512h-85.4l-23.5-128z"
            />
            <Path fill="#d80027" d="M256 256h85.3v256H256z" />
            <Path fill="#ff9811" d="M426.7 256H512v256h-85.3z" />
        </G>
    </Svg>
)
export default SvgZm
