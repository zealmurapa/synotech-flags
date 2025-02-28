import * as React from 'react'
import Svg, { Mask, Circle, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SvgKa = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ka_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ka_svg__a)">
            <Path
                fill="#eee"
                d="M0 0h224l32 32 32-32h224v224l-32 32 32 32v224H288l-32-32-32 32H0V288l32-32-32-32Z"
            />
            <Path
                fill="#d80027"
                d="M224 0v224H0v64h224v224h64V288h224v-64H288V0h-64zm-96 96v32H96v32h32v32h32v-32h32v-32h-32V96h-32zm224 0v32h-32v32h32v32h32v-32h32v-32h-32V96h-32zM128 320v32H96v32h32v32h32v-32h32v-32h-32v-32h-32zm224 0v32h-32v32h32v32h32v-32h32v-32h-32v-32h-32z"
            />
        </G>
    </Svg>
)
export default SvgKa
