import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgChGr = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ch-gr_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ch-gr_svg__a)">
            <Path fill="#eee" d="M128 0h128l256 256v256H0V256Z" />
            <Path
                fill="#338af3"
                d="M256 0h64l32 32 32-32h64l64 64v64l-32 32 32 32v64h-64l-32-32-32 32h-64l-64-64v-64l32-32-32-32Z"
            />
            <Path fill="#333" d="M0 0h128v256H0z" />
            <Path
                fill="#ffda44"
                d="M320 0v64h-64v64h128V0h-64zm64 128v128h64v-64h64v-64H384zm-128 64h64v64h-64zM448 0h64v64h-64z"
            />
            <Path
                fill="#333"
                d="M291 291c-32 0-68 8-82 19-5 4-7 10-7 16 0 10 7 18 17 20l-25 7a99 99 0 0 0-77-44 9 9 0 0 0-3 18c33 12 45 13 57 37-21-7-35 24-48 37-3 1-4 4-4 7 0 5 4 9 9 9l6-2c13-10 26-33 44-28 57 16 66 13 105 7-31 9-30 21-8 36-11 17-25 17-41 22-4 1-7 5-7 9 0 5 4 9 9 9l5-1c19-9 40-18 60-33-1-8-13-17 8-24 9 8 14 19 41 16 4 7 10 12 7 28l-12 3c-5 0-8 4-8 9s4 9 9 9c3 0 6-2 7-4l18-14c2-15-2-29-8-42-14-2-17-15-23-29 12 6 22 12 32-3-14-5-28-13-39-4-39-24-55-19-80-24 9-8 11-20 8-37 26-7 69-23 96 26 3-41-30-54-66-55z"
            />
        </G>
    </Svg>
)
export default SvgChGr
