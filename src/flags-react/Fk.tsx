import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgFk = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="fk_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#fk_svg__a)">
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
                d="M411.8 300.5v11.2h-89v-11.2h-33.4V345h22.3v11.2H423V345h22.2v-44.5z"
            />
            <Path
                fill="#338af3"
                d="M289.4 133.6V256c0 59.6 77.9 78 77.9 78s78-18.4 78-78V133.6h-156z"
            />
            <Path
                fill="#eee"
                d="M367.3 224.9c-19.5 0-19.5 17.8-39 17.8s-19.4-17.8-39-17.8V256c19.6 0 19.6 17.8 39 17.8s19.5-17.8 39-17.8 19.5 17.8 39 17.8 19.4-17.8 39-17.8v-31.2c-19.6 0-19.6 17.8-39 17.8-19.5 0-19.5-17.8-39-17.8zm0-62.4c-19.5 0-19.5 17.8-39 17.8s-19.4-17.8-39-17.8v31.2c19.6 0 19.6 17.8 39 17.8s19.5-17.8 39-17.8 19.5 17.8 39 17.8 19.4-17.8 39-17.8v-31.2c-19.6 0-19.6 17.8-39 17.8-19.5 0-19.5-17.8-39-17.8z"
            />
        </G>
    </Svg>
)
export default SvgFk
