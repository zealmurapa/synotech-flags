import * as React from 'react'
import { Svg, Mask, Circle, G, Path, Rect } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgInAs = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="in-as_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#in-as_svg__a)">
            <Path fill="#eee" d="M0 0h512v512H0z" />
            <Path
                fill="#333"
                d="M256 112c-22 0-40 18-40 40-7-12-20-20-34-20a40 40 0 1 0 0 80h6v126h-2c-10 0-20 8-20 20v16c0 10 10 20 20 20h2v2c0 12 10 20 20 20h96c12 0 20-8 20-20v-2h2c12 0 20-10 20-20v-16c0-12-8-20-20-20h-2V212h6a40 40 0 1 0 0-80c-14 1-27 9-34 22v-2c0-22-18-40-40-40z"
            />
            <Rect
                width={224}
                height={32}
                x={144}
                y={448}
                fill="#acabb1"
                rx={16}
                ry={16}
            />
            <Rect
                width={192}
                height={48}
                x={160}
                y={32}
                fill="#acabb1"
                rx={24}
                ry={24}
            />
        </G>
    </Svg>
)
export default SvgInAs
