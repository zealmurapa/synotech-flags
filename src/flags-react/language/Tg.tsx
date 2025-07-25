import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgTg = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="tg_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#tg_svg__a)">
            <Path
                fill="#eee"
                d="m0 144.7 255.3-36.5L512 144.7v222.6L250.5 407 0 367.3z"
            />
            <Path fill="#d80027" d="M0 0h512v144.7H0z" />
            <Path fill="#6da544" d="M0 367.3h512V512H0z" />
            <Path
                fill="#ffda44"
                d="M211.5 323h89v-38l-17.8 9-26.7-26.9-26.7 26.7-17.8-8.9zm-51-44.6 4.2 12.7H178l-10.9 8 4.2 12.7-10.9-8-10.8 8 4.1-12.8-10.7-7.9h13.4zm12.9-44.6 4.1 12.8H191l-10.8 8 4.1 12.6-10.8-7.9-10.9 8 4.2-12.8-10.9-8h13.4zm36.7-33.4 4.2 12.8h13.4l-10.9 8 4.2 12.6-11-7.7-10.8 7.8 4.1-12.7-10.8-7.9H206zm141.4 78-4.2 12.7H334l10.9 8-4.2 12.7 10.9-8 10.8 8-4.1-12.8 10.7-7.9h-13.4zm-12.9-44.6-4.1 12.8H321l10.8 8-4.1 12.6 10.8-7.9 10.9 8-4.2-12.8 10.9-8h-13.4zM302 200.4l-4.2 12.8h-13.4l10.9 8-4.2 12.6 10.9-7.7 10.8 7.8-4.1-12.7 10.8-7.9H306zm-46-16.6 4.1 12.7h13.5l-10.9 8 4.1 12.6-10.8-7.8-10.8 7.8 4.1-12.7-10.9-7.9H252z"
            />
        </G>
    </Svg>
)
export default SvgTg
