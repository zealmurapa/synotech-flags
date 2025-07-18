import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgMu = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="mu_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#mu_svg__a)">
            <Path fill="#6da544" d="m0 378.3 254-37.1 258 37V512H0z" />
            <Path fill="#ffda44" d="m0 256.1 252.2-33.3L512 256v122.4H0z" />
            <Path fill="#0052b4" d="M0 133.7 249.7 97 512 133.7v122.4H0z" />
            <Path fill="#d80027" d="M0 0h512v133.7H0z" />
        </G>
    </Svg>
)
export default SvgMu
