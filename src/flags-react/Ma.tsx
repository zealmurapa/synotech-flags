import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgMa = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ma_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ma_svg__a)">
            <Path fill="#d80027" d="M0 0h512v512H0z" />
            <Path
                fill="#496e2d"
                d="M407.3 210H291.7L256 100.3 220.3 210H104.7l93.5 68-35.7 109.8L256 320l93.5 68-35.7-110zm-183 59.5 12.2-37.1h39l12.1 37.1-31.6 23-31.6-23zm44-59.4h-24.6l12.3-37.9zm38.3 45.7-7.7-23.4h39.9zM213 232.4l-7.7 23.4-32.2-23.4zm-8.3 97.3 12.3-38 20 14.5zm70.1-23.4 20-14.5 12.3 37.9z"
            />
        </G>
    </Svg>
)
export default SvgMa
