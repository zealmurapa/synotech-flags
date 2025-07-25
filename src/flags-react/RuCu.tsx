import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgRuCu = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ru-cu_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ru-cu_svg__a)">
            <Path fill="#ffda44" d="M0 0h512v385l-256 64L0 385z" />
            <Path
                fill="#a2001d"
                d="m375 97 23-24v24h23l-23 23 23 23h-23v23l-23-23-24 23v-23h-22l22-23-22-23h22V73zm-238 0 23-24v24h24l-24 23 24 23h-24v23l-23-23-23 23v-23H91l23-23-23-23h23V73zm119-50 23-23v23h23l-23 23 23 24h-23v23l-23-23-23 23V94h-23l23-24-23-23h23V24Z"
            />
            <Path
                fill="#a2001d"
                d="m218 103-35 35v28h-28l-35 35 29 29h20v38l17 17 32-32 11 11v121H0v127h512V385H282V264l11-11 32 32 17-17v-38h21l29-29-35-35-29 1v-29l-34-35-29 29v23l26 26-35 35-35-35 26-26v-23z"
            />
        </G>
    </Svg>
)
export default SvgRuCu
