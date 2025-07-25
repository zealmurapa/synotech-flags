import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgCq = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="cq_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#cq_svg__a)">
            <Path
                fill="#eee"
                d="M304 0h208v208l-32 48 32 48v208H304l-48-32-48 32H0V304Z"
            />
            <Path fill="#d80027" d="M0 0v304h208v208h96V304h208v-96H304V0Z" />
            <Path
                fill="#ffda44"
                d="M120 27a23 23 0 0 0-23 23v16h-9v-9c0-10-8-18-18-18-2 0-4 2-4 4v42c0 2 2 4 4 4h27a21 21 0 0 0 21 22v9h-8c-11 0-19 8-19 18 0 3 2 5 5 5h41c3 0 5-2 5-5v-28h57v9h-9c-10 0-18 8-18 18 0 2 2 4 4 4h42c2 0 4-2 4-4V82c9 0 16-7 16-16s-7-16-16-16h-54c-3 0-5-2-5-5s2-6 5-6h54V29h-54c-8 0-16 7-16 16 0 8 8 16 16 16h54c3 0 6 2 6 5s-3 5-6 5h-58c-12 0-22-9-22-21a23 23 0 0 0-22-23zm0 135a23 23 0 0 0-23 23v16h-9v-9c0-10-8-18-18-18-2 0-4 2-4 4v42c0 2 2 4 4 4h27a21 21 0 0 0 21 22v9h-8c-11 0-19 8-19 18 0 3 2 5 5 5h41c3 0 5-2 5-5v-28h57v9h-9c-10 0-18 8-18 18 0 2 2 4 4 4h42c2 0 4-2 4-4v-55c9 0 16-7 16-16s-7-16-16-16h-54c-3 0-5-2-5-5s2-6 5-6h54v-10h-54c-8 0-16 7-16 16 0 8 8 16 16 16h54c3 0 6 2 6 5s-3 5-6 5h-58c-12 0-22-9-22-21a23 23 0 0 0-22-23z"
            />
        </G>
    </Svg>
)
export default SvgCq
