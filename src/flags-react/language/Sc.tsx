import * as React from 'react'
import { Svg, Defs, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgSc = (props: SvgProps) => (
    <Svg width={24} height={24} data-name="Layer 1" {...props}>
        <Defs>
            <Mask
                id="sc_svg__a"
                width={512}
                height={512}
                x={0}
                y={0}
                maskUnits="userSpaceOnUse"
            >
                <Circle cx={256} cy={256} r={256} fill="#fff" />
            </Mask>
        </Defs>
        <G mask="url(#sc_svg__a)">
            <Path
                fill="#eee"
                d="M0 0h222.6l31 23.4L289.4 0H512v222.6l-21.5 31 21.5 35.8V512H289.4l-34.2-20.5-32.6 20.5H0V289.4l22.7-32.6L0 222.6V0Z"
            />
            <Path
                fill="#d80027"
                d="M222.6 0v222.6H0v66.8h222.6V512h66.8V289.4H512v-66.8H289.4V0h-66.8Z"
            />
            <Path
                fill="#333"
                d="M378.4 89c-20.3 0-38 13.8-43 33.4l43 11.2 43.2-11.2A44.5 44.5 0 0 0 378.4 89ZM334 189.2l55.7 11.1v-23.6c15.6-4 28-16.4 32-32l-43.2-11.1h-55.6L334 167v22.2Z"
            />
            <Path
                fill="#acabb1"
                d="M421.6 122.4h-98.8V167h11.1v-22.3h87.7a44.6 44.6 0 0 0 0-22.3Z"
            />
            <Path
                fill="#333"
                d="M144.7 89c-20.3 0-38 13.7-43.1 33.4l43.1 11.2 43.1-11.2A44.5 44.5 0 0 0 144.7 89Zm-44.5 100.2 55.6 11.1v-23.6c15.7-4 28-16.4 32-32l-43.1-11.1H89l11.2 33.4v22.2Z"
            />
            <Path
                fill="#acabb1"
                d="M187.8 122.4H89V167h11.2v-22.3h87.6a44.6 44.6 0 0 0 0-22.3Z"
            />
            <Path
                fill="#333"
                d="M378.4 311.7c-20.2 0-38 13.7-43 33.3l43 11.2 43.2-11.2a44.5 44.5 0 0 0-43.2-33.3ZM334 411.8l55.7 11.2v-23.7c15.6-4 28-16.4 32-32l-43.2-11.1h-55.6l11.1 33.4v22.2Z"
            />
            <Path
                fill="#acabb1"
                d="M421.6 345h-98.8v44.6h11.1v-22.3h87.7a44.6 44.6 0 0 0 0-22.3Z"
            />
            <Path
                fill="#333"
                d="M144.7 311.7c-20.3 0-38 13.7-43.1 33.3l43.1 11.2 43.1-11.2a44.5 44.5 0 0 0-43.1-33.3Zm-44.5 100.1 55.6 11.2v-23.7c15.7-4 28-16.4 32-32l-43.1-11.1H89l11.2 33.4v22.2Z"
            />
            <Path
                fill="#acabb1"
                d="M187.8 345H89v44.6h11.2v-22.3h87.6a44.6 44.6 0 0 0 0-22.3Z"
            />
        </G>
    </Svg>
)
export default SvgSc
