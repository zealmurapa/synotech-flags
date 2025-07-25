import * as React from 'react'
import { Svg, Defs, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgIt36 = (props: SvgProps) => (
    <Svg width={24} height={24} data-name="Layer 1" {...props}>
        <Defs>
            <Mask
                id="it-36_svg__a"
                width={512}
                height={512}
                x={0}
                y={0}
                maskUnits="userSpaceOnUse"
            >
                <Circle cx={256} cy={256} r={256} fill="#fff" />
            </Mask>
        </Defs>
        <G mask="url(#it-36_svg__a)">
            <Path fill="#338af3" d="M0 0h512v512H0V0Z" />
            <Path
                fill="#eee"
                d="M304 344v16h-32v-16h-32v16h-32v-16h-32v64h160v-64h-32z"
            />
            <Path
                fill="#333"
                d="M248 352h-2.3l24-24-5.7-5.7-29.7 29.7H224a8 8 0 0 0-8 8h10.3a8 8 0 0 0 0 11.3l11.4-11.3H256a8 8 0 0 0-8-8Zm56 8a8 8 0 0 0-8-8h-8v-24h-8v24h-8a8 8 0 0 0-8 8h18.3l11.4 11.3a8 8 0 0 0 0-11.3H304Z"
            />
            <Path
                fill="#ffda44"
                d="M304 256a24 24 0 0 0 24-24 24 24 0 0 0 24-24 24 24 0 0 0 24-24h-80c-9 0-17.3 3-24 8v-8a24 24 0 0 0-24-24 24 24 0 0 0-24-24 24 24 0 0 0-24-24v80a40 40 0 0 0 4.5 18.5A84.2 84.2 0 0 0 184 208a32 32 0 0 0-32 32c9.4-5.5 20.3-8 32-8l72 80a24 24 0 1 0 48 0l16-16 40 40a16 16 0 0 0 16-16 16 16 0 0 0 16-16l-88-48Z"
            />
        </G>
    </Svg>
)
export default SvgIt36
