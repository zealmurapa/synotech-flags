import * as React from 'react'
import Svg, { Mask, Circle, G, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'
const SvgEnIn = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="en-in_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#en-in_svg__a)">
            <Path
                fill="#eee"
                d="M512 0 0 160v192l45 160h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32h68l-8-22 8-23v-23l-32-54 32-54v-32l-32-48 32-48v-32l-32-54 32-54z"
            />
            <Path fill="#6da544" d="M0 352v160l96-64 64-96z" />
            <Circle cx={256} cy={256} r={72} fill="#0052b4" />
            <Circle cx={256} cy={256} r={48} fill="#eee" />
            <Circle cx={256} cy={256} r={24} fill="#0052b4" />
            <Path fill="#eee" d="m160 352 192-192v192z" />
            <Path
                fill="#d80027"
                d="m304 208-96 96v208h96V304h208v-96ZM176 336 0 512h45l131-131Zm160 0 176 176v-45L381 336Z"
            />
            <Path
                fill="#0052b4"
                d="M512 68 404 176h108ZM404 336l108 108V336Zm-228 68L68 512h108zm160 0v108h108z"
            />
            <Path fill="#ff9811" d="M0 0v160h352L512 0Z" />
        </G>
    </Svg>
)
export default SvgEnIn
