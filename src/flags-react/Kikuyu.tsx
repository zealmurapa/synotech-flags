import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgKikuyu = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="kikuyu_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#kikuyu_svg__a)">
            <Path fill="#eee" d="m228 0 32 211-32 211h-32l-32-211L196 0Z" />
            <Path fill="#496e2d" d="M196 0v450H0V0Z" />
            <Path
                fill="#eee"
                d="m178 87-31-14-49 112L49 73 18 87l62 138-62 138 31 14 49-112 49 112 31-14-62-138Z"
            />
            <Path
                fill="#eee"
                d="M98 80 81 96 65 224l16 130 17 16 17-16 15-131-15-127-17-16Z"
            />
            <Path
                fill="#333"
                d="m154 148-10 76 10 78a159 159 0 0 0 22-77c0-28-10-54-22-77zm-112 0 9 74-9 80a159 159 0 0 1-22-77c0-28 10-54 22-77z"
            />
            <Path
                fill="#a2001d"
                d="M42 148v154a269 269 0 0 0 39 52V96c-11 12-26 30-39 52zm112 0a269 269 0 0 0-39-52v258c11-12 26-30 39-52V148Z"
            />
            <Path fill="#d80027" d="M512 0v422H228V0Z" />
            <Path
                fill="#333"
                d="m0 450 86-17 75 8 55-51 41 18 106-56 149 70v90H0Z"
            />
        </G>
    </Svg>
)
export default SvgKikuyu
