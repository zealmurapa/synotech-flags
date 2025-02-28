import * as React from 'react'
import Svg, { Mask, Circle, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SvgUk = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="uk_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#uk_svg__a)">
            <Path fill="#ffda44" d="m0 256 258-39.4L512 256v256H0z" />
            <Path fill="#338af3" d="M0 0h512v256H0z" />
        </G>
    </Svg>
)
export default SvgUk
