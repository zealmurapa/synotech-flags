import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgSr = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="sr_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#sr_svg__a)">
            <Path
                fill="#6da544"
                d="M0 0h512v111.3l-85.3 143.1L512 400.7V512H0V400.7l87-149L0 111.3z"
            />
            <Path
                fill="#eee"
                d="M0 111.3h512V167l-41 84.7 41 93.3v55.7H0V345l44.2-86.6L0 167z"
            />
            <Path fill="#a2001d" d="M0 167h512v178H0z" />
            <Path
                fill="#ffda44"
                d="m256 167 22.1 68h71.5l-57.8 42 22 68-57.8-42-57.9 42 22.1-68-57.8-42h71.5z"
            />
        </G>
    </Svg>
)
export default SvgSr
