import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgMe = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="me_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#me_svg__a)">
            <Path
                fill="#ffda44"
                d="M0 0h512v44.5l-43.6 209.7L512 467.5V512H0v-44.5l46.6-212L0 44.5z"
            />
            <Path fill="#a2001d" d="M0 44.5h512v423H0z" />
            <Path
                fill="#ffda44"
                d="M200.3 189.2h111.4v-44.5l-22.3 11.1-33.4-33.4-33.4 33.4-22.3-11.1zM356.2 256h-55.7a25.5 25.5 0 0 0 3.5-12.8 25.7 25.7 0 0 0-48.3-12.1 25.7 25.7 0 1 0-45 24.9h-54.9c0 17 14.9 30.8 31.9 30.8h-1c0 14 9.2 25.8 22 29.6l-25 25 23.6 23.6 33.5-33.5c1.3.5 2.6.9 4 1.1l-20.2 45.7a83.2 83.2 0 0 0 31.4 6.2 83.2 83.2 0 0 0 31.4-6.2l-20.2-45.7a25.4 25.4 0 0 0 4-1.1l33.5 33.5 23.6-23.6-25-25a30.8 30.8 0 0 0 22-29.6h-1c17 0 31.9-13.8 31.9-30.8z"
            />
            <Path
                fill="#6da544"
                d="m256 272.7-36.2 16.7v33.4L256 345l36.2-22.2v-33.4z"
            />
            <Path fill="#0052b4" d="M219.8 256h72.4v44.5h-72.4z" />
        </G>
    </Svg>
)
export default SvgMe
