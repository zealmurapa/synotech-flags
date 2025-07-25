import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAuNsw = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="au-nsw_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#au-nsw_svg__a)">
            <Path fill="#0052b4" d="M256 0h256v512H0V256Z" />
            <Path
                fill="#eee"
                d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
            />
            <Path
                fill="#d80027"
                d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
            />
            <Path
                fill="#eee"
                d="M402 185h-40a74 74 0 0 0-51 51v40a74 74 0 0 0 51 51h40a74 74 0 0 0 51-51v-40a74 74 0 0 0-51-51z"
            />
            <Path
                fill="#d80027"
                d="M382 182a74 74 0 0 0-20 3v51h-51a74 74 0 0 0-3 20 74 74 0 0 0 3 20h51v51a74 74 0 0 0 20 3 74 74 0 0 0 20-3v-51h51a74 74 0 0 0 3-20 74 74 0 0 0-3-20h-51v-51a74 74 0 0 0-20-3z"
            />
            <Path
                fill="#ffda44"
                d="m382 295-3 8-8-4 4 8-8 3 8 3-4 8 8-4 3 8 3-8 8 4-4-8 8-3-8-3 4-8-8 4zm54-54-3 8-8-4 4 8-8 3 8 3-4 8 8-4 3 8 3-8 8 4-4-8 8-3-8-3 4-8-8 4zm-108 0-3 8-8-4 4 8-8 3 8 3-4 8 8-4 3 8 3-8 8 4-4-8 8-3-8-3 4-8-8 4zm54-54-3 8-8-4 4 8-8 3 8 3-4 8 8-4 3 8 3-8 8 4-4-8 8-3-8-3 4-8-8 4zm-10 52a7 7 0 0 0-6 6v5h-3v-2c0-3-3-6-6-6l-1 2v12l2 1h8a6 6 0 0 0 6 7v2h-3a5 5 0 0 0-5 6l1 1h12l2-1v-8l17-1v3h-3a5 5 0 0 0-5 5l1 2h13l1-2v-16c3 0 5-2 5-5 0-2-2-5-5-5h-16l-2-1 2-2h16v-3h-16a5 5 0 0 0-5 5c0 2 2 5 5 5h16l2 1-2 2h-18a6 6 0 0 1-6-7 7 7 0 0 0-7-6z"
            />
        </G>
    </Svg>
)
export default SvgAuNsw
