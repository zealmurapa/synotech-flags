import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAd = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ad_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ad_svg__a)">
            <Path fill="#0052b4" d="M0 0h144.7l36 254.6-36 257.4H0z" />
            <Path fill="#d80027" d="M367.3 0H512v512H367.3l-29.7-257.3z" />
            <Path fill="#ffda44" d="M144.7 0h222.6v512H144.7z" />
            <Path
                fill="#d80027"
                d="M256 354.5V256h66.8v47.3zm-66.8-165.3H256V256h-66.8z"
            />
            <Path
                fill="#ff9811"
                d="M289.4 167a22.3 22.3 0 0 0-33.4-19.3 22.1 22.1 0 0 0-11.1-3c-12.3 0-22.3 10-22.3 22.3H167v111.3c0 41.4 32.9 65.4 58.7 77.8a22.1 22.1 0 0 0-3 11.2 22.3 22.3 0 0 0 33.3 19.3 22.1 22.1 0 0 0 11.1 3 22.3 22.3 0 0 0 19.2-33.5c25.8-12.4 58.7-36.4 58.7-77.8V167zm22.3 111.3c0 5.8 0 23.4-27.5 40.9a136.5 136.5 0 0 1-28.2 13.3c-7-2.4-17.8-6.7-28.2-13.3-27.5-17.5-27.5-35.1-27.5-41v-77.9h111.4z"
            />
        </G>
    </Svg>
)
export default SvgAd
