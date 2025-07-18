import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgEnZa = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="en-za_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#en-za_svg__a)">
            <Path
                fill="#eee"
                d="m0 0 192 256L45 512h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54V0L280 157 47 0Z"
            />
            <Path fill="#333" d="M0 142v228l140-114z" />
            <Path fill="#ffda44" d="M192 256 0 95v47l114 114L0 370v47z" />
            <Path
                fill="#0052b4"
                d="M512 68 404 176h108ZM404 336l108 108V336Zm-228 68L68 512h108zm160 0v108h108z"
            />
            <Path
                fill="#6da544"
                d="M0 0v94l161 162L0 418v94l104-72 72-104 32-32 57-24 24-57h-66z"
            />
            <Path
                fill="#d80027"
                d="m47 0 189 189h87L512 0H47zm257 208-96 96v208h96V304h208v-96H304zM176 336 0 512h45l131-131v-45zm160 0 176 176v-45L381 336h-45z"
            />
        </G>
    </Svg>
)
export default SvgEnZa
