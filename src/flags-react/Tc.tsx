import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgTc = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="tc_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#tc_svg__a)">
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
                fill="#ffda44"
                d="M289.4 133.6V256c0 59.6 77.9 78 77.9 78s78-18.4 78-78V133.6h-156z"
            />
            <Path
                fill="#ff9811"
                d="M356.2 178c0 12.4-10 44.6-22.3 44.6s-22.2-32.2-22.2-44.5c0-12.3 22.2-22.3 22.2-22.3s22.3 10 22.3 22.3z"
            />
            <Path
                fill="#a2001d"
                d="M415.2 202.3a92.2 92.2 0 0 0 6.4-28c0-10.2-13.3-18.5-13.3-18.5s-13.4 8.3-13.4 18.6c0 6.4 2.8 19.2 6.4 28l-7.7 17.3a38.9 38.9 0 0 0 14.7 3 38.9 38.9 0 0 0 14.7-3z"
            />
            <Path
                fill="#6da544"
                d="M350.6 256s-11.1 22.3-11.1 44.5H395c0-22.2-11.1-44.5-11.1-44.5l-16.7-11.1-16.7 11.1Z"
            />
            <Path
                fill="#d80027"
                d="M384 256v-5.6a16.7 16.7 0 0 0-33.4 0v5.6z"
            />
        </G>
    </Svg>
)
export default SvgTc
