import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgTibet = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="tibet_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#tibet_svg__a)">
            <Path fill="#eee" d="m12.4 481.9 491.1.6-247-247.3z" />
            <Path
                fill="#d80027"
                d="M45 467.4 193.1 319l63-107.5 80.2 105.1L512 362.1V256l-27.8-50 27.8-56V44.7l-260-28-252 28 38.5 58.8L0 150v106.1l37 50.7-37 55.4v105.2l23.6 15.8z"
            />
            <Path
                fill="#0052b4"
                d="m512 362-206.4-85.4L319 319l148.3 148.4 23 18.1 21.6-18.1zm0-105.9v-106l-255.8 106zM467.7 44.6l-60.9-17.8-63 17.8-87.6 211.5zm-211.5 0L214.7 27l-46.1 17.7 87.6 211.5zm-211.5 0L23.9 28.8 0 44.6V150l256.2 106.1zM0 256.1v106.1l256.2-106z"
            />
            <Path
                fill="#ffda44"
                d="m256.2 256.1 63 63a89 89 0 1 0-126 0zm39 128-38.8 19.5-39.2-19.5a39 39 0 1 1 78 0z"
            />
            <Path fill="#0052b4" d="M295.2 384.1a39 39 0 0 1-78 0" />
            <Path
                fill="#ffda44"
                d="M0 0v44.6h512V0H0zm0 467.4V512h512v-44.6H0z"
            />
        </G>
    </Svg>
)
export default SvgTibet
