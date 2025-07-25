import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgDm = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="dm_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#dm_svg__a)">
            <Path
                fill="#496e2d"
                d="M0 0h208l48 32 48-32h208v208l-32 48 32 48v208H304l-48-32-48 32H0V304l32-48-32-48Z"
            />
            <Path fill="#333" d="M512 240v32l-256 32L0 272v-32l256-32z" />
            <Path fill="#ffda44" d="M512 208v32H0v-32z" />
            <Path fill="#333" d="M240 0h32l32 256-32 256h-32l-32-256Z" />
            <Path fill="#ffda44" d="M208 0h32v512h-32z" />
            <Path fill="#eee" d="M272 0h32v512h-32z" />
            <Path fill="#eee" d="M512 272v32H0v-32z" />
            <Circle cx={256} cy={256} r={122.4} fill="#d80027" />
            <Path
                fill="#496e2d"
                d="M284 270c-9-19-21-37-21-37v-13a14 14 0 0 0-27-2 11 11 0 0 0-4 21 16 16 0 0 1 9-9 14 14 0 0 0 2 2h2s-7 19-7 29c0 27 19 36 19 36l-10 9h19v-18l9 9s17-11 9-27zm-28-114 4 13h14l-11 8 4 12-11-8-11 8 4-12-11-8h14Zm-59 19 11 8 11-8-4 13 11 8h-14l-4 12-4-12h-14l11-8zm-36 50h13l4-13 4 13h14l-11 8 4 13-11-8-11 8 5-13zm0 62 11-8-5-13 11 8 11-8-4 13 11 8h-14l-4 13-4-13Zm36 50 4-13-11-8h14l4-12 4 12h13l-10 8 4 13-11-8zm59 19-4-13h-14l11-8-4-12 11 8 11-8-4 12 11 9h-14Zm59-19-11-8-11 8 4-13-10-8h13l4-12 4 12h14l-11 8zm36-50h-13l-4 13-4-13h-14l11-8-4-13 11 8 11-8-5 13zm0-62-11 8 5 13-11-8-11 8 4-13-11-8h14l4-13 4 13zm-36-50-4 13 11 8h-14l-4 12-4-12h-14l11-8-4-13 11 8z"
            />
        </G>
    </Svg>
)
export default SvgDm
