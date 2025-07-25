import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgFr20R = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="fr-20r_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#fr-20r_svg__a)">
            <Path fill="#eee" d="M0 0h512v512H0z" />
            <Path
                fill="#333"
                d="M345.1 216.8A98 98 0 0 0 157.5 177l-12 43.8 11 11.2-22.2 44.5 22.3 11.1-11.2 11.1V310l11.2 11.1v22.3l11.1 11 33.4-11s0 11 11.1 22.2 22.3 33.4 22.3 33.4 33.4 11.1 55.6-22.2c22.3-33.4 44.6-44.6 44.6-44.6l-21.5-42.9a98 98 0 0 0 32-72.4z"
            />
            <Path
                fill="#acabb1"
                d="M353.1 254.3c45.3-7.6 52.8-96.2 52.8-96.2h-62.3c32.2 78-1.5 83.2-1.5 83.2a8110 8110 0 0 0-173.6-83c-1.3 1.7-5.9 6-11.5 19.8-5.6 13.7-7 26-7 26a6870 6870 0 0 0 181.2 63c9.2 5.9 20.4 23.7 14.1 76.6l60-16.9s-20.4-54.1-52.2-72.5z"
            />
        </G>
    </Svg>
)
export default SvgFr20R
