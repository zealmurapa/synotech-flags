import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgKy = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ky_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ky_svg__a)">
            <Path fill="#0052b4" d="M256 0h256v512H0V256Z" />
            <Path
                fill="#eee"
                d="M0 0v32l32 32L0 96v160h32l32-32 32 32h32v-83l83 83h45l-8-16 8-15v-14l-83-83h83V96l-32-32 32-32V0H96L64 32 32 0Z"
            />
            <Path
                fill="#d80027"
                d="M32 0v32H0v64h32v160h64V96h160V32H96V0Zm96 128 128 128v-31l-97-97z"
            />
            <Circle cx={367.3} cy={144.7} r={44.5} fill="#6da544" />
            <Path
                fill="#d80027"
                d="M289.4 133.5h155.8l.1 29-76.9 79.7-79.1-79.7z"
            />
            <Path fill="#496e2d" d="M445.2 256zm-155.8 0z" />
            <Path
                fill="#ffda44"
                d="M289.4 300.5V345h23.4a77.6 77.6 0 0 0 109 0h23.4v-44.5z"
            />
            <Path
                fill="#338af3"
                d="M289.3 193.7v31.2l8 16.6-7.9 14.5c.1 59.6 77.9 78 77.9 78s78-18.4 78-78l-7.7-13.2 7.7-18v-31.1l-78-10.2z"
            />
            <Path
                fill="#eee"
                d="M367.3 224.9c-19.5 0-19.5 17.8-39 17.8s-19.4-17.8-39-17.8V256c19.7 0 19.6 17.8 39 17.8s19.5-17.8 39-17.8 19.5 17.8 39 17.8 19.4-17.8 39-17.8v-31.2c-19.6 0-19.6 17.8-39 17.8-19.5 0-19.5-17.8-39-17.8zm0-62.4c-19.5 0-19.5 17.8-39 17.8s-19.4-17.8-39-17.8v31.2c19.7 0 19.6 17.8 39 17.8s19.5-17.8 39-17.8 19.5 17.8 39 17.8 19.4-17.8 39-17.8v-31.2c-19.6 0-19.6 17.8-39 17.8-19.5 0-19.5-17.8-39-17.8z"
            />
        </G>
    </Svg>
)
export default SvgKy
