import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAi = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ai_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ai_svg__a)">
            <Path fill="#0052b4" d="M256 0h256v512H0V256Z" />
            <Path
                fill="#eee"
                d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
            />
            <Path
                fill="#d80027"
                d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
            />
            <Path fill="#496e2d" d="M445.2 256.1zm-155.8 0z" />
            <Path
                fill="#eee"
                d="M433 293.6a62.4 62.4 0 0 0 12.2-37.5V144.8a55.4 55.4 0 0 1-33.4 11.1 55.6 55.6 0 0 1-44.5-22.2 55.6 55.6 0 0 1-44.5 22.2 55.4 55.4 0 0 1-33.4-11.1v111.3c0 15 5 27.3 12.3 37.5h131.2z"
            />
            <Path
                fill="#ff9811"
                d="M409.8 235.5a91 91 0 0 0 6.3-27.6c0-10.1-13.2-18.3-13.2-18.3s-13.2 8.2-13.2 18.3a91 91 0 0 0 6.3 27.6l-7.6 17.1a38.3 38.3 0 0 0 29 0zm-51.5-55.6a91 91 0 0 0-27 8.3c-8.8 5-9.3 20.5-9.3 20.5s13.7 7.4 22.4 2.3c5.5-3.1 15-11.8 20.8-19.2l18.6-2a38.4 38.4 0 0 0-4.7-14 38.4 38.4 0 0 0-9.7-11.1zm-22.4 72.2a91 91 0 0 0 20.7 19.3c8.8 5 22.5-2.3 22.5-2.3s-.6-15.5-9.3-20.5a91 91 0 0 0-27-8.4l-11.1-15.1a38.4 38.4 0 0 0-9.7 11 38.4 38.4 0 0 0-4.8 14z"
            />
            <Path
                fill="#338af3"
                d="M299 289.5c20.7 33.3 68.3 44.5 68.3 44.5s47.6-11.2 68.4-44.5H298.9Z"
            />
        </G>
    </Svg>
)
export default SvgAi
