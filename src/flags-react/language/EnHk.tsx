import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgEnHk = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="en-hk_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#en-hk_svg__a)">
            <Path fill="#d80027" d="M0 0h512L288 288 0 512Z" />
            <Path
                fill="#eee"
                d="M212.2 133.6c-5.8 24.2-16.1 19.6-21.2 40.7A55.7 55.7 0 0 1 217 66c-10.1 42.2.4 46-4.8 67.6zm-77.4 17.9c21.2 13 13.6 21.4 32.1 32.8A55.7 55.7 0 0 1 72 126.1c37 22.7 43.8 13.8 62.8 25.4zm-7 79.3c19-16.2 24.7-6.4 41.2-20.4a55.7 55.7 0 0 1-84.7 72.2c33-28.2 26.6-37.4 43.6-51.8zm73.4 31c-9.6-23 1.5-25.3-6.8-45.3A55.7 55.7 0 0 1 237 319.3c-16.6-40-27.3-36.9-35.8-57.4zm52.2-60c-24.9 2-23.7-9.3-45.3-7.6a55.7 55.7 0 0 1 111-8.7c-43.3 3.4-43.6 14.5-65.7 16.3z"
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
export default SvgEnHk
