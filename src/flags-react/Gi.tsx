import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgGi = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="gi_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#gi_svg__a)">
            <Path fill="#d80027" d="m0 345 256.3-31.3L512 345v167H0z" />
            <Path fill="#eee" d="M0 0h512v345H0z" />
            <Path
                fill="#d80027"
                d="M356.2 211.5V178h11.1v-22.3H345V167h-22.2v-11.2h-22.3v22.3h11.2v33.4h-22.3v-78h11.1v-22.2h-22.2v11.1H267v-11h-22v11h-11.2v-11h-22.2v22.2h11.1v77.9h-22.3V178h11.2v-22.3h-22.3V167H167v-11.2h-22.3v22.3h11.1v33.4h-22.2v89h244.8v-89z"
            />
            <Path
                fill="#ffda44"
                d="M256 289.4a33.4 33.4 0 0 0-11.1 64.9v46.4h-33.4v44.5H267v-91a33.4 33.4 0 0 0-11.1-64.8zm0 44.5a11.1 11.1 0 1 1 0-22.2 11.1 11.1 0 0 1 0 22.2z"
            />
        </G>
    </Svg>
)
export default SvgGi
