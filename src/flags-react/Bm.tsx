import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgBm = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="bm_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#bm_svg__a)">
            <Path fill="#d80027" d="M256 0h256v512H0V256z" />
            <Path
                fill="#eee"
                d="M0 0h33.4l31.8 16.4 35-16.4H256v133.6l-9.3 33.7 9.3 41.5V256h-47.2l-39.3-7-35.9 7.1L0 256V100.2l15.4-34.5L0 33.4z"
            />
            <Path fill="#496e2d" d="M445.2 256.1zm-155.8 0z" />
            <Path fill="#d80027" d="m267 235.5-102-102h-31.4L267 267z" />
            <Path
                fill="#d80027"
                d="M33.4 0v33.4H0v66.8h33.4v170.6h66.8V100.2h170.2V33.4H100.2V0z"
            />
            <Path
                fill="#0052b4"
                d="M180.8 133.6H256v75.2zm-47.2 47.2v75.3l75.2-.1z"
            />
            <Path
                fill="#eee"
                d="M289.4 133.6V256c0 59.6 155.8 59.6 155.8 0V133.6z"
            />
            <Path
                fill="#6da544"
                d="M289.4 256c0 59.6 77.9 78 77.9 78s78-18.4 78-78h-156z"
            />
            <Path
                fill="#a2001d"
                d="m367.3 207-36.2 15.6V256l36.2 22.3 36.2-22.3v-33.4z"
            />
            <Path fill="#338af3" d="M331.1 189.2h72.4v33.4H331z" />
        </G>
    </Svg>
)
export default SvgBm
