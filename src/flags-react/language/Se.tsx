import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgSe = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="se_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#se_svg__a)">
            <Path fill="#ffda44" d="M199 0h32l32 256-32 256h-32l-32-256Z" />
            <Path fill="#496e2d" d="M167 0h32v512h-32l-32-256Z" />
            <Path fill="#0052b4" d="M231 0h281v512H231Z" />
            <Path
                fill="#d80027"
                d="M0 0h167v512H0Zm199 132-32 16 32 16a92 92 0 1 1 0 184l-32 16 32 16a124 124 0 0 0 0-248z"
            />
            <Path
                fill="#0052b4"
                d="M199 132a124 124 0 0 0 0 248v-32a92 92 0 1 1 0-184z"
            />
        </G>
    </Svg>
)
export default SvgSe
