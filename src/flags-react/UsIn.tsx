import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgUsIn = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="us-in_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#us-in_svg__a)">
            <Path fill="#0052b4" d="M0 0h512v512H0z" />
            <Path
                fill="#ffda44"
                d="M224 361h64l-52 37.5 20-61 20 61zm-79.2-32.8h64l-52 37.5 20-61 20 61zM112 249h64l-52 37.5 20-61 20 61zm144 145-12 8.6V451l12 21 12-21v-48.4zm6.7-207.7c-14.3 5.2-18.9 17.4-17.5 30.5a20.7 20.7 0 0 1-6.3-11.5 26 26 0 0 0-6 15.9 27.8 27.8 0 0 0 8.3 19.8H216v16h16l12 31h-12v16h12v44.4l12-36.6 12 36.6V304h12v-16h-12l12-31h16v-16h-23.3c7.6-8.5 8.6-23.3 1.9-34-.3 6.4-3.5 11.2-5.6 14.8-.9-11.8-11.2-18.8-6.3-35.5ZM224 63.5h64L236 101l20-61 20 61zm92.1 29.9h64l-52 37.5 20-61 20 61zm63.5 63.5h64l-52 37.5 20-61 20 61zm29.9 92.1h64l-52 37.5 20-61 20 61zm-29.9 92.1h64l-52 37.5 20-61 20 61zm-63.5 63.5h64l-52 37.5 20-61 20 61zm-184.2 0h64l-52 37.5 20-61 20 61zm-63.5-63.5h64l-52 37.5 20-61 20 61zM38.5 249h64l-52 37.5 20-61 20 61zm29.9-92.1h64l-52 37.5 20-61 20 61zm63.5-63.5h64l-52 37.5 20-61 20 61zM224 137h64l-52 37.5 20-61 20 61zm112 112h64l-52 37.5 20-61 20 61zm-32.8 79.2h64l-52 37.5 20-61 20 61z"
            />
        </G>
    </Svg>
)
export default SvgUsIn
