import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgEa = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="ea_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#ea_svg__a)">
            <Path
                fill="#eee"
                d="m0 0 140.5 27.8L256 0h256l-26.3 132.8L512 256v256l-138.7-30.5L256 512H0l30-139.9L0 256z"
            />
            <Path
                fill="#333"
                d="m0 0 256 256V0H0zm256 256h256V0L256 256zm0 0v256h256L256 256zm0 0H0v256l256-256z"
            />
            <Path
                fill="#ffda44"
                d="m167 178 89 11.2 89-11.1v-53.4l-35.6 17.8L256 89l-53.4 53.5-35.6-17.8z"
            />
            <Path
                fill="#d80027"
                d="M256 389.6c-49.1 0-89-40-89-89v-89.1l33.3-33.4h111.4l33.3 33.4v89a89 89 0 0 1-89 89z"
            />
            <Path
                fill="#eee"
                d="M256 356.2c-30.7 0-55.7-25-55.7-55.7v-89h111.4v89c0 30.7-25 55.7-55.7 55.7z"
            />
            <Path
                fill="#ffda44"
                d="M167 178h33.3v33.5H167zm144.7 0H345v33.5h-33.3zm0 72.4H345v33.4h-33.3zm-144.7 0h33.3v33.4H167zm89 105.8c-5.8 0-11.4-1-16.7-2.6V388a89 89 0 0 0 33.4 0v-34.4a55.5 55.5 0 0 1-16.7 2.6zm-55-46.6-26.6 26.6a89.4 89.4 0 0 0 19.4 28l23.6-23.7a55.5 55.5 0 0 1-16.3-31zm136.6 26.6-26.7-26.6c-2 12-7.8 22.8-16.3 31l23.6 23.5a89.4 89.4 0 0 0 19.4-27.9z"
            />
            <Path
                fill="#0052b4"
                d="M244.9 230v18.6a11.1 11.1 0 0 0 22.2 0V230H245zm0 74.2v18.6a11.1 11.1 0 0 0 22.2 0v-18.6H245zm33.4-37v18.5a11.1 11.1 0 0 0 22.2 0V267h-22.2zm-33.4 0v18.5a11.1 11.1 0 0 0 22.2 0V267H245zm-33.4 0v18.5a11.1 11.1 0 0 0 22.2 0V267h-22.2z"
            />
        </G>
    </Svg>
)
export default SvgEa
