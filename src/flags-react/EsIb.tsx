import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgEsIb = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="es-ib_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#es-ib_svg__a)">
            <Path
                fill="#ffda44"
                d="M0 256 256 0h256v56.8l-14.7 29.8 14.7 27.2v56.8L496.2 199l15.8 28.6v56.8l-18.4 29.4 18.4 27.5v56.9L495.3 427l16.7 28.1V512H0v-56.9l24.2-27.4L0 398.2v-56.9l21-27.7-21-29.2z"
            />
            <Path
                fill="#d80027"
                d="M242 56.8v57h270v-57zm0 113.8v57h270v-57zM0 284.4v56.9h512v-56.9zm0 113.8v56.9h512v-56.9z"
            />
            <Path fill="#4a1f63" d="M0 0h256v256H0z" />
            <Path
                fill="#eee"
                d="M211.5 133.6v22.2h-11.2v-22.2h-22.2v22.2H167v-44.5h-44.6v44.5h-11v-22.2H89v22.2H78v-22.2H55.6v66.7h178v-66.7z"
            />
        </G>
    </Svg>
)
export default SvgEsIb
