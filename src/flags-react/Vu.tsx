import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgVu = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="vu_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#vu_svg__a)">
            <Path fill="#d80027" d="M512 222.6V0H0l215.6 239.4z" />
            <Path fill="#6da544" d="M512 289.4V512H0l216.5-240z" />
            <Path
                fill="#333"
                d="m0 0 222.6 222.6H512v22.2l-10.9 11.8L512 267v22.4H222.6L0 512v-31.5l8-23-8-8.6V63l9.5-10.4-9.5-21z"
            />
            <G fill="#ffda44">
                <Path d="M512 244.8H213.2L0 31.7V63l192.8 193L0 449v31.5L213.2 267H512z" />
                <Path d="M62.2 310.6V289a38.8 38.8 0 0 0 38.8-38.8A27.5 27.5 0 0 0 73.5 223a18.7 18.7 0 0 0-18.7 18.7 12 12 0 0 0 12 12c3.7 0 6.8-3 6.8-6.8H95A28.2 28.2 0 0 1 66.8 275c-18.4 0-33.4-15-33.4-33.4 0-22.2 18-40.2 40-40.2a49 49 0 0 1 49 49c0 33.1-27 60.2-60.2 60.2z" />
            </G>
        </G>
    </Svg>
)
export default SvgVu
