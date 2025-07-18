import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgKg = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="kg_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#kg_svg__a)">
            <Path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352Z" />
            <Path fill="#d80027" d="M0 0h512v160H0Z" />
            <Path fill="#ffda44" d="M0 352h512v160H0Z" />
            <Path fill="#333" d="M144 423 256 79l112 344L75 211h362z" />
            <Path fill="#eee" d="m175 381 81-250 81 250-213-154h264z" />
        </G>
    </Svg>
)
export default SvgKg
