import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAx = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ax_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ax_svg__a)">
            <Path
                fill="#0052b4"
                d="M0 0h100.2l68.3 40.7L233.7 0H512v189.2l-45.5 66 45.5 68.6V512H233.7l-65.8-39.2-67.7 39.2H0V322.8l45.6-67.5L0 189.2z"
            />
            <Path
                fill="#ffda44"
                d="M100.2 0v189.2H0v33.4l23 34-23 32.8v33.4h100.2V512h33.4l33.9-22.6 32.8 22.6h33.4V323.8H512v-34.4l-24.2-32.2 24.2-34.6v-33.4H233.7V0h-33.4l-32.6 20-34.1-20z"
            />
            <Path
                fill="#d80027"
                d="M133.6 0v222.6H0v66.8h133.6V512h66.7V289.4H512v-66.8H200.3V0h-66.7z"
            />
        </G>
    </Svg>
)
export default SvgAx
