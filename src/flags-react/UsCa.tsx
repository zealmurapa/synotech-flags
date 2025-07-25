import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgUsCa = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="us-ca_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#us-ca_svg__a)">
            <Path fill="#eee" d="M0 0h512v416l-256 32L0 416Z" />
            <Path
                fill="#6da544"
                d="m396 280-67-8-34 3-24-2-54-2-93 13-8 12h299z"
            />
            <Path
                fill="#584528"
                d="m389 273-10-33-9-44-23-23-32-13-50 3-41-8-50 24-29 9-9 20-7 15 11 19 10 2 16-1 6-7 28-8-12 31-11 14-19 9 13 3 15 1 19-12 26-24 11 3 14 13-16 12 16 1 10-3 9-16-4-19 11 1 10 3 1 23-14 8 1 6h26l34-30 15 12 12 4-6 8 1 5h17l10-7zM84 340h178v32H84z"
            />
            <Path fill="#d80027" d="M0 416h512v96H0Z" />
            <Path fill="#584528" d="M288 340h140v32H288z" />
            <Path fill="#d80027" d="m71 182 69-50H55l69 50-26-81z" />
        </G>
    </Svg>
)
export default SvgUsCa
