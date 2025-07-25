import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgTorresStraitIslands = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="torres_strait_islands_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#torres_strait_islands_svg__a)">
            <Path fill="#0052b4" d="m0 128 256-32 256 32v256l-256 32L0 384Z" />
            <Path fill="#333" d="m0 96 256-32 256 32v32H0Z" />
            <Path fill="#6da544" d="M0 0h512v96H0Z" />
            <Path fill="#333" d="m0 416 256 32 256-32v-32H0Z" />
            <Path fill="#6da544" d="M0 512h512v-96H0Z" />
            <Path
                fill="#eee"
                d="M245 144c-106 32-101 112-67 186l-40 38 73-27v-98c24-35 66-35 90 0v98l73 27-40-38c34-74 39-154-67-186l-11 46-11-46zm11 83-9 27h-28l23 17-9 28 23-17 23 17-9-28 24-17h-29l-9-27z"
            />
        </G>
    </Svg>
)
export default SvgTorresStraitIslands
