import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAuNt = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="au-nt_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#au-nt_svg__a)">
            <Path fill="#333" d="M0 0h171l64 256-64 256H0Z" />
            <Path fill="#ff9811" d="M171 0h341v512H171z" />
            <Path
                fill="#333"
                d="M341 282c6-3 13-3 18 0-5-3-6-11-5-17 2-6 7-13 13-14-6 1-13-3-17-7-4-5-6-13-4-19-2 6-10 9-16 9s-13-3-16-9c2 6 0 14-4 19-3 4-10 8-16 7 6 1 10 8 12 14 1 6 0 14-5 17 5-3 13-3 18 0 6 2 11 8 11 15 0-7 5-13 11-15z"
            />
            <Path
                fill="#eee"
                d="M358 237c14 18 75 0 45-37-29-37-60 18-45 37z"
            />
            <Path fill="#eee" d="M330 224c23 0 47-59 0-59s-23 59 0 59z" />
            <Path
                fill="#eee"
                d="M303 237c14-19-17-74-46-37-30 37 31 55 45 37zm42 53c-21 11-17 73 26 53 42-20-5-63-26-53z"
            />
            <Path
                fill="#eee"
                d="M315 290c-21-10-68 33-26 53 43 20 47-42 26-53zm49-23c-5 22 47 58 57 13 11-46-52-36-57-13z"
            />
            <Path
                fill="#eee"
                d="M296 267c-6-23-68-33-57 13 10 45 62 9 57-13zm-160-78 7 15 16-4-7 15 12 10-15 3v17l-13-11-13 11v-17l-16-3 13-10-7-15 16 4zm-45-43 7 15 16-4-7 15 12 10-15 3v17l-13-11-13 11v-17l-16-3 13-10-7-15 16 4zm19 92 6 17h17l-14 11 5 17-14-11-14 11 5-17-14-11h18zm-70-34 7 15 16-4-7 15 12 10-16 3v17l-12-11-13 11v-17l-16-3 13-10-7-15 16 4zm51 99-6 17-17-8 8 17-17 6 17 6-8 17 17-8 6 17 6-17 17 8-8-17 17-6-17-6 8-17-17 8z"
            />
        </G>
    </Svg>
)
export default SvgAuNt
