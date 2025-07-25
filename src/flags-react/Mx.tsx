import * as React from 'react'
import { Svg, Mask, Circle, G, Path, Rect } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgMx = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="mx_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#mx_svg__a)">
            <Path fill="#eee" d="M144 0h223l33 256-33 256H144l-32-256z" />
            <Path fill="#496e2d" d="M0 0h144v512H0z" />
            <Path fill="#d80027" d="M368 0h144v512H368z" />
            <Path fill="#ffda44" d="M256 277v10h12l10-22z" />
            <Path
                fill="#496e2d"
                d="M160 242a96 96 0 0 0 192 0h-11a85 85 0 0 1-170 0zm39 17-4 2c-2 2-2 6 1 8 15 14 34 22 54 24v17h12v-17c20-2 39-10 54-24 3-2 3-6 1-8s-6-2-8 0a78 78 0 0 1-53 21c-19 0-38-8-53-21z"
            />
            <Path
                fill="#338af3"
                d="M256 316c-14 0-28-5-40-13l6-9c20 13 48 13 68 0l7 9c-12 8-26 13-41 13z"
            />
            <Path
                fill="#751a46"
                d="M256 174c22 11 12 33 11 34l-2-4c-5-11-18-18-31-18v11c6 0 11 5 11 11-7 7-9 17-4 26l4 8-13 23 29-7 18 18v-11l11 11 23-11-35-21-5-21 28 16c4 11 12 21 23 26 9-83-42-91-61-91z"
            />
            <Path
                fill="#6da544"
                d="M222 271c-15 0-33-12-38-40l11-2c4 23 18 31 27 31 3 0 5-1 6-3 0-2 0-3-6-5-3-1-7-2-10-5-10-12 4-24 11-30 1-1 2-2 1-3 0 0-2-2-5-2-7 0-12-4-14-11-2-6 2-13 8-17l5 11c-2 0-2 2-2 4 0 0 1 2 3 2 7 0 14 4 16 9 1 3 2 9-5 15-7 7-11 12-9 15l5 1c5 2 14 5 13 17-1 8-8 13-17 13h-1z"
            />
            <Path fill="#ffda44" d="m234 186-12 11v11l18-9c3-1 3-5 1-7z" />
            <Circle cx={172} cy={275} r={8} fill="#ffda44" />
            <Circle cx={189} cy={302} r={8} fill="#ffda44" />
            <Circle cx={216} cy={323} r={8} fill="#ffda44" />
            <Circle cx={297} cy={323} r={8} fill="#ffda44" />
            <Circle cx={324} cy={302} r={8} fill="#ffda44" />
            <Circle cx={341} cy={275} r={8} fill="#ffda44" />
            <Rect
                width={34}
                height={22}
                x={239}
                y={299}
                fill="#ff9811"
                rx={11}
                ry={11}
            />
        </G>
    </Svg>
)
export default SvgMx
