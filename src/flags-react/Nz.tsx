import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgNz = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="nz_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#nz_svg__a)">
            <Path fill="#0052b4" d="M256 0h256v512H0V256Z" />
            <Path
                fill="#eee"
                d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Zm382 92-11 35h-37l30 21-12 35 30-22 30 22-12-35 30-21h-37l-11-35Zm61 72-11 35h-37l30 21-11 35 29-21 30 21-12-35 30-21h-37Zm-123 10-11 35h-37l30 22-11 35 29-22 30 22-11-35 29-22h-36zm59 130-11 35h-37l30 21-11 35 29-21 30 21-11-35 29-21h-36z"
            />
            <Path
                fill="#d80027"
                d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97zm251 201-5 18h-19l15 10-6 18 15-11 15 11-5-18 14-10h-18Zm-59-129-5 17h-19l15 11-6 17 15-11 15 11-6-17 15-11h-18l-6-17zm123-11-6 18h-18l15 11-6 17 15-11 15 11-6-17 15-11h-18l-6-18zm-61-72-6 17h-18l15 11-6 17 15-10 15 10-6-17 15-11h-18z"
            />
        </G>
    </Svg>
)
export default SvgNz
