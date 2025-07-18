import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAuQld = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="au-qld_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#au-qld_svg__a)">
            <Path fill="#0052b4" d="M256 0h256v512H0V256Z" />
            <Path
                fill="#eee"
                d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
            />
            <Path
                fill="#d80027"
                d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
            />
            <Circle cx={382} cy={256} r={74} fill="#eee" />
            <Path
                fill="#338af3"
                d="M405 322.1 382 312l-23 10.2 23-66.1zm0-132.2L382 200l-23-10.2 23 66.1zM315.9 279l10.2-23-10.2-23 66.1 23zm132.2 0L438 256l10.2-23-66.1 23z"
            />
            <Path
                fill="#ffda44"
                d="M377 228v5h-5v10h5v9.4a15.2 15.2 0 0 0-20.7 22.2v9.4H408v-9.4a15.2 15.2 0 0 0-20.7-22.2V243h5v-10h-5v-5z"
            />
        </G>
    </Svg>
)
export default SvgAuQld
