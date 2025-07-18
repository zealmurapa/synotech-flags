import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgGq = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="gq_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#gq_svg__a)">
            <Path fill="#eee" d="M41.3 121.9 512 167v178L43.8 391.3z" />
            <Path fill="#6da544" d="M0 0h512v167H111z" />
            <Path fill="#d80027" d="M111 345h401v167H0z" />
            <Path fill="#0052b4" d="M0 0v512l256-256z" />
            <Path fill="#ff9811" d="M334 257.1h22.2v32.3h-22.3z" />
            <Path
                fill="#6da544"
                d="M367.3 245a22.3 22.3 0 1 0-44.5 0 11.1 11.1 0 1 0 0 22.1h44.5a11.1 11.1 0 1 0 0-22.2z"
            />
        </G>
    </Svg>
)
export default SvgGq
