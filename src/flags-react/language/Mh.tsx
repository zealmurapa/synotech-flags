import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgMh = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="mh_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#mh_svg__a)">
            <Path fill="#0052b4" d="M0 0h397.6L512 114.2V512H0z" />
            <Path fill="#eee" d="M512 0H397.6L0 512 493.4 53.7z" />
            <Path fill="#ff9811" d="m0 512 512-397.8V0z" />
            <Path
                fill="#eee"
                d="M222.2 150.1 191 164.8l16.7 30.3-34-6.5-4.3 34.3-23.6-25.2-23.7 25.2-4.3-34.3-33.9 6.5 16.6-30.3-31.2-14.7 31.2-14.7L84 105.1l34 6.5 4.2-34.3 23.7 25.3 23.6-25.3 4.3 34.3 34-6.5-16.7 30.3z"
            />
        </G>
    </Svg>
)
export default SvgMh
