import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgEnTz = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="en-tz_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#en-tz_svg__a)">
            <Path
                fill="#ffda44"
                d="M399 0 268 68l-68 132 24 88 89 25 131-68 68-132V68L444 0Z"
            />
            <Path fill="#333" d="M444 0 222 222l2 66 66 2L512 68V0Z" />
            <Path fill="#338af3" d="M512 113 313 313l67 131 132 68Z" />
            <Path fill="#6da544" d="m0 0 68 132 132 68L399 0Z" />
            <Path
                fill="#eee"
                d="M512 512 0 0l8 23-8 22v23l32 54-32 54v32l32 48-32 48v32l32 54-32 54v68l22-8 23 8h23l54-32 54 32h32l48-32 48 32h32l54-32 54 32z"
            />
            <Path
                fill="#d80027"
                d="m304 304-96-96H0v96h208v208h96zM176 176 0 0v45l131 131Zm0 160L0 512h45l131-131Z"
            />
            <Path
                fill="#0052b4"
                d="M444 512 336 404v108ZM176 404 68 512h108Zm-68-228L0 68v108zm0 160H0v108z"
            />
        </G>
    </Svg>
)
export default SvgEnTz
