import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgEnKe = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="en-ke_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#en-ke_svg__a)">
            <Path
                fill="#eee"
                d="m0 145 253-28 259 28v33l-36 76 36 80v33l-257 33L0 367v-33l39-78-39-78Z"
            />
            <Path fill="#333" d="M0 0h512v145H0Z" />
            <Path fill="#a2001d" d="M0 178h512v156H0Z" />
            <Path fill="#496e2d" d="M0 367h512v145H0Z" />
            <Path
                fill="#eee"
                d="M0 145v33l32 78-32 78v33l72 32 73-32 143-79 79-143-183-32Z"
            />
            <Path fill="#333" d="M0 0v145h367l105-41L512 0Z" />
            <Path fill="#a2001d" d="M0 178v156h178l110-46 46-110Z" />
            <Path fill="#496e2d" d="M0 367v145l104-40 41-105z" />
            <Path
                fill="#eee"
                d="m240 118-30-14-50 112-49-112-31 14 62 138-62 138 31 14 49-112 50 112 30-14-61-138Z"
            />
            <Path
                fill="#eee"
                d="m160 111-17 16-15 128 16 130 16 16 17-16 15-131-15-127-17-16z"
            />
            <Path
                fill="#333"
                d="m216 179-10 76 10 78a159 159 0 0 0 22-77c0-28-10-54-22-77zm-111 0 8 74-9 80a159 159 0 0 1-22-77c0-28 10-54 22-77z"
            />
            <Path
                fill="#a2001d"
                d="M105 179v154a269 269 0 0 0 39 52V127c-12 12-27 30-39 52zm111 0a269 269 0 0 0-39-52v258c11-12 26-30 39-52V179Z"
            />
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
export default SvgEnKe
