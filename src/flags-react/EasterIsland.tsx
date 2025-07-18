import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgEasterIsland = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="easter_island_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#easter_island_svg__a)">
            <Path fill="#eee" d="M0 0h512v512H0z" />
            <Path
                fill="#d80027"
                d="M334 211.5v22.2h30.5a134.2 134.2 0 0 1-49.5 42 27.7 27.7 0 0 0-47.2 13.2 134.8 134.8 0 0 1-23.6 0 27.8 27.8 0 0 0-47.2-13.2 134.2 134.2 0 0 1-49.5-42h30.6v-22.2h-78a155.8 155.8 0 0 0 311.7 0H334z"
            />
        </G>
    </Svg>
)
export default SvgEasterIsland
