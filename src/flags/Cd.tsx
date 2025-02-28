import * as React from 'react'
import Svg, { Mask, Circle, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SvgCd = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="cd_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#cd_svg__a)">
            <Path fill="#338af3" d="M0 0h401.9L512 110.3V512H110.3L0 401.9z" />
            <Path
                fill="#ffda44"
                d="M401.9 0 0 401.9V449l63 63h47.3L512 110.3V63L449 0z"
            />
            <Path fill="#d80027" d="M449 0 0 449v63h63L512 63V0h-63z" />
            <Path
                fill="#ffda44"
                d="m136.4 78 13.8 42.4H195l-36 26.3 13.7 42.5-36.2-26.3-36 26.3 13.7-42.5L78 120.4h44.7z"
            />
        </G>
    </Svg>
)
export default SvgCd
