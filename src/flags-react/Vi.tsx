import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgVi = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="vi_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#vi_svg__a)">
            <Path fill="#eee" d="M0 0h512v512H0z" />
            <G fill="#ffda44">
                <Path d="M299.5 178.8a43.5 43.5 0 1 0-87 0H117a44 44 0 0 0 44.2 42.9h-1.4a42.8 42.8 0 0 0 42.8 42.8l53.5 42 53.5-42a42.8 42.8 0 0 0 42.8-42.8H351a44 44 0 0 0 44.2-42.9h-95.6z" />
                <Path d="m236.9 302.3-27 60.9a122 122 0 0 0 46.1 9 122 122 0 0 0 46-9l-26.9-60.9H237z" />
            </G>
            <Path
                fill="#eee"
                d="m255.3 214-55 21.5v39.7a49.1 49.1 0 0 0 22.3 40l11.3-2.3 11 14.3a98.2 98.2 0 0 0 11.1 3.6s4.6-1.1 11.1-3.6l9.4-14.1 13 2.1a49.2 49.2 0 0 0 22.2-40.1v-39.6z"
            />
            <Path
                fill="#338af3"
                d="M62 257.8 92.3 342l29.8-84.2h22.7l-43.4 111.3H83L39.3 257.8h22.8zm349.8 111.3V257.8h21.7v111.3z"
            />
            <Path
                fill="#d80027"
                d="M222.6 224.4v90.8a96 96 0 0 0 22.3 12V224.3zm66.8 0v90.8a98 98 0 0 1-22.3 12V224.3z"
            />
            <Path fill="#0052b4" d="M200.3 200.2h111.4v35.3H200.3z" />
        </G>
    </Svg>
)
export default SvgVi
