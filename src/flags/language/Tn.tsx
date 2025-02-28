import * as React from 'react'
import Svg, { Mask, Circle, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SvgTn = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="tn_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#tn_svg__a)">
            <Path
                fill="#338af3"
                d="M0 0h512v178l-31 76.9 31 79.1v178H0V334l37-80.7L0 178z"
            />
            <Path
                fill="#333"
                d="m0 211.5 256-19.2 256 19.2v89l-254.6 20.7L0 300.5z"
            />
            <Path fill="#eee" d="M0 178h512v33.5H0zm0 122.5h512V334H0z" />
        </G>
    </Svg>
)
export default SvgTn
