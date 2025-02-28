import * as React from 'react'
import Svg, { Mask, Circle, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SvgSovietUnion = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="soviet_union_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#soviet_union_svg__a)">
            <Path fill="#d80027" d="M0 0h512v512H0z" />
            <Path
                fill="#ffda44"
                d="m90 243 25 25 21-21 115 115 18-18-115-115 29-29-44-6z"
            />
            <Path
                fill="#ffda44"
                d="M173 166a93 93 0 0 1 44 40c22 38 16 83-14 100-22 13-52 7-75-15l-58 53 18 18 42-46c27 24 63 30 90 14 36-21 45-73 20-116a95 95 0 0 0-67-48zm-43-6 105-77H105l105 77-40-124z"
            />
            <Path fill="#d80027" d="m153 129 45-34h-56l45 34-17-54z" />
        </G>
    </Svg>
)
export default SvgSovietUnion
