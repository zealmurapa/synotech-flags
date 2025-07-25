import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgEnPh = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="en-ph_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#en-ph_svg__a)">
            <Path fill="#eee" d="M0 0v512l160-96 96-160-96-160Z" />
            <Path
                fill="#ffda44"
                d="m175 256-31-15 17-30-34 7-5-35-23 25-24-25-4 35-34-7 16 30-31 15 32 15-17 30 34-6 4 34 24-25 24 25 4-34 34 6-17-30zM68 100l11 15 17-6-11 15 11 14-17-5-11 14v-18l-17-6 17-5zm0 265 11 15 17-6-11 15 11 14-17-6-11 15v-18l-17-6 17-5zm149-132-11 14-17-5 11 14-11 15 17-6 11 14v-18l17-5-17-6z"
            />
            <Path fill="#0052b4" d="M0 0h512l-96 160-160 96Z" />
            <Path
                fill="#eee"
                d="M512 0 0 512l23-8 22 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54z"
            />
            <Path
                fill="#d80027"
                d="m304 208-96 96v208h96V304h208v-96ZM176 336 0 512h45l131-131Zm160 0 176 176v-45L381 336Z"
            />
            <Path
                fill="#0052b4"
                d="M512 68 404 176h108ZM404 336l108 108V336Zm-228 68L68 512h108zm160 0v108h108z"
            />
        </G>
    </Svg>
)
export default SvgEnPh
