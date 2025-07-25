import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgEnAu = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="en-au_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#en-au_svg__a)">
            <Path
                fill="#0052b4"
                d="M512 0v512H0l16-34-16-34V336l64-80-64-80V68L68 0h108l80 64 80-64h108l34 16z"
            />
            <Path
                fill="#eee"
                d="m0 0 8 22-8 23v23l108 108H0v32l32 48-32 48v32h108L0 444v68L512 0l-23 8-22-8h-23L336 108V0h-32l-48 32-48-32h-32v108L68 0H0zm399 159-7 15-16-4 7 15-12 10 16 4v16l12-10 13 10v-16l16-4-13-10 7-15-16 4-7-15zm57 51-7 15-15-4 7 15-13 10 16 3v17l12-10 13 10v-17l16-3-13-10 7-15-16 4-7-15zm-122 22-7 15-16-4 7 15-13 10 16 4v16l13-10 13 10v-16l15-4-12-10 7-15-16 4-7-15zm82 56-6 17h-18l15 10-6 17 15-10 14 10-5-17 14-10h-18l-5-17zm-214 60-14 30-31-8 14 30-26 20 32 7v33l25-21 26 21v-33l32-7-26-20 14-30-32 8-14-30zm197 24-7 15-16-4 7 15-12 10 16 3v17l12-10 13 10v-17l16-3-13-10 7-15-16 4-7-15z"
            />
            <Path
                fill="#d80027"
                d="m208 304 96-96V0h-96v208H0v96zm128-128L512 0h-45L336 131Zm-160 0L0 0v45l131 131z"
            />
        </G>
    </Svg>
)
export default SvgEnAu
