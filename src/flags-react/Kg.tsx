import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgKg = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="kg_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#kg_svg__a)">
            <Path fill="#d80027" d="M0 0h512v512H0z" />
            <Path
                fill="#ffda44"
                d="M381.2 256 330 280l27.3 49.6-55.6-10.6-7 56.1-38.7-41.3-38.7 41.3-7-56.1-55.6 10.6 27.3-49.5-51.2-24.1 51.2-24-27.3-49.6 55.6 10.6 7-56.1 38.7 41.3 38.7-41.3 7 56.1 55.6-10.6-27.3 49.5z"
            />
            <Circle cx={256} cy={256} r={77.9} fill="#d80027" />
            <Path
                fill="#ffda44"
                d="M217 256c-1.8 0-3.7.1-5.5.3a44.3 44.3 0 0 0 10.4 28.3 78 78 0 0 1 15-24.9A55.4 55.4 0 0 0 217 256zm24 42a44.4 44.4 0 0 0 30 0c-2.6-10-7.8-19-15-26-7.2 7-12.4 16-15 26zm53.6-64.3a44.5 44.5 0 0 0-77.2 0 77.4 77.4 0 0 1 38.6 10.5 77.4 77.4 0 0 1 38.6-10.5zm-19.6 26a78 78 0 0 1 15.1 25 44.3 44.3 0 0 0 10.4-28.4 55.8 55.8 0 0 0-5.5-.3 55.3 55.3 0 0 0-20 3.7z"
            />
        </G>
    </Svg>
)
export default SvgKg
