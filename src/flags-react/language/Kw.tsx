import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgKw = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="kw_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#kw_svg__a)">
            <Path
                fill="#333"
                d="M0 0h208l48 32 48-32h208v208l-32 48 32 48v208H304l-48-32-48 32H0V304l32-48-32-48Z"
            />
            <Path
                fill="#eee"
                d="M208 0v208H0v96h208v208h96V304h208v-96H304V0h-96z"
            />
        </G>
    </Svg>
)
export default SvgKw
