import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgMk = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="mk_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#mk_svg__a)">
            <Path
                fill="#ffda44"
                d="M0 0h68.2l86 33.6L216.5 0h78.8l61.2 34.8L443.8 0H512v68.3l-31.4 88 31.4 60.2v78.8L477.4 356l34.6 87.8V512h-68.2l-77-37.3-71.3 37.3h-78.8l-61-39.7L68.2 512H0v-68l40.3-88.2L0 295.5v-78.8L40.3 157 0 68.2z"
            />
            <Path
                fill="#d80027"
                d="M295.5 512h148.3L256 256zm-79-512H68.2L256 256zm.2 512L256 256 68.2 512zM0 216.7 256 256 0 68.2zm0 227.2L256 256 0 295.5zM512 68.3 256 256l256-39.5zM443.8 0H295.3L256 256zM512 443.8V295.3L256 256z"
            />
            <Circle cx={256} cy={256} r={89} fill="#d80027" />
            <Circle cx={256} cy={256} r={66.8} fill="#ffda44" />
        </G>
    </Svg>
)
export default SvgMk
