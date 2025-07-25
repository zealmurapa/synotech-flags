import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgBe = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="be_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#be_svg__a)">
            <Path fill="#eee" d="M0 0h155.8l35 254.6-35 257.4H0z" />
            <Path fill="#a2001d" d="M155.8 0H512v345.1l-183 37.4-173.2-37.4z" />
            <Path fill="#6da544" d="M155.8 345.1H512V512H155.8z" />
            <Path
                fill="#a2001d"
                d="M50 .2 22.3 50l27.8 50.4L77.9 50zm55.8 0L78 50l27.7 50.4 28-50.4zM50 137.5l-27.7 49.6 27.8 50.5 27.7-50.5zm55.8 0L78 187.1l27.7 50.5 28-50.5zM50 274.7l-27.7 49.7 27.8 50.4 27.8-50.4zm55.8 0L78 324.4l27.7 50.4 28-50.4zM50 412l-27.7 49.6 27.8 50.5 27.7-50.5zm55.8 0L78 461.6l27.7 50.5 28-50.5z"
            />
        </G>
    </Svg>
)
export default SvgBe
