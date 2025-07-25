import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgKp = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="kp_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#kp_svg__a)">
            <Path
                fill="#0052b4"
                d="M0 0h512v89l-61.2 165.6L512 423v89H0v-89l62.5-174.6L0 89z"
            />
            <Path
                fill="#eee"
                d="M0 89h512v33.4l-28.1 130L512 389.7V423H0v-33.4L30 255 0 122.4z"
            />
            <Path fill="#d80027" d="M0 122.4h512v267.2H0z" />
            <Circle cx={157.5} cy={256} r={98.5} fill="#eee" />
            <Path
                fill="#d80027"
                d="m157.5 157.5 22.1 68h71.6l-58 42 22.3 68.3-58-42.3-58 42.2 22.2-68.1-57.9-42h71.6z"
            />
        </G>
    </Svg>
)
export default SvgKp
