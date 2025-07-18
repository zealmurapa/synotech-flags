import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgPt = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="pt_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#pt_svg__a)">
            <Path fill="#6da544" d="M0 512h167l37.9-260.3L167 0H0z" />
            <Path fill="#d80027" d="M512 0H167v512h345z" />
            <Circle cx={167} cy={256} r={89} fill="#ffda44" />
            <Path
                fill="#d80027"
                d="M116.9 211.5V267a50 50 0 1 0 100.1 0v-55.6H117z"
            />
            <Path
                fill="#eee"
                d="M167 283.8c-9.2 0-16.7-7.5-16.7-16.7V245h33.4v22c0 9.2-7.5 16.7-16.7 16.7z"
            />
        </G>
    </Svg>
)
export default SvgPt
