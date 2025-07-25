import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgYorubaland = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="yorubaland_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#yorubaland_svg__a)">
            <Path
                fill="#eee"
                d="M384 0h128v128L352 352 128 512H0V384l160-224Z"
            />
            <Path fill="#338af3" d="M0 384 384 0H0Z" />
            <Path fill="#6da544" d="M512 128 128 512h384z" />
            <Path
                fill="#ffda44"
                d="m432 234-6 11h-13l6 11-6 11h13l6 11 6-11h13l-6-11 6-11h-13zm-14-68-6 11h-13l6 11-6 10h13l6 12 6-12h13l-6-10 6-11h-12zm-37-56-7 11h-12l6 11-6 10h12l7 12 6-12h13l-7-10 7-11h-13zm-56-38-7 11h-12l6 11-6 11h12l7 11 6-11h13l-7-11 7-11h-13zm-69-14-6 11h-13l6 11-6 11h13l6 11 6-11h13l-6-11 6-11h-13zm-68 14-7 11h-13l7 11-6 11h12l7 11 6-11h13l-7-11 7-11h-13zm-56 38-7 11h-13l7 11-7 10h13l7 12 6-12h13l-7-10 7-11h-13zm-38 56-7 11H75l6 11-6 10h12l7 12 6-12h13l-7-10 7-11h-13zm-14 68-6 11H61l6 11-6 11h13l6 11 6-11h13l-6-11 6-11H86Zm14 69-7 11H75l6 11-6 10h12l7 11 6-11h13l-7-11 7-10h-13zm38 56-7 11h-13l7 11-7 10h13l7 11 6-11h13l-7-11 7-10h-13zm56 37-7 11h-13l7 11-6 11h12l7 11 6-11h13l-7-11 7-11h-13zm68 14-6 11h-13l6 11-6 11h13l6 11 6-11h13l-6-11 6-11h-13zm69-14-7 11h-12l6 11-6 11h12l7 11 6-11h13l-7-11 7-11h-13zm56-37-7 11h-12l6 11-6 10h12l7 11 6-11h13l-7-11 7-10h-13zm37-56-6 11h-13l6 11-6 10h13l6 11 6-11h13l-6-11 6-10h-13zM256 165c-3 0-6 3-6 6v20a38 28 0 0 0-32 28 38 28 0 0 0 1 5l3 23a34 54 0 0 0 17 47v22h34v-22a34 54 0 0 0 17-47l3-23a38 28 0 0 0 1-5 38 28 0 0 0-32-28v-20c0-3-3-6-6-6z"
            />
            <Path
                fill="#d80027"
                d="M199 199a80 80 0 1 0 114 0l-17 17a56 56 0 0 1 16 40 56 56 0 0 1-56 56 56 56 0 0 1-56-56 56 56 0 0 1 16-40l-17-17z"
            />
        </G>
    </Svg>
)
export default SvgYorubaland
