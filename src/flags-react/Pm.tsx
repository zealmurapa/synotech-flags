import * as React from 'react'
import { Svg, Mask, Circle, G, Path, Rect } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgPm = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="pm_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#pm_svg__a)">
            <Path fill="#338af3" d="M160 0h352v512H160l-32-256z" />
            <Path fill="#eee" d="m0 160 80-32 80 32v192l-80 32-80-32z" />
            <Rect width={160} height={160} fill="#d80027" ry={0} />
            <Path fill="#6da544" d="M160 21V0h-20L0 139v21h20z" />
            <Path fill="#6da544" d="M0 21V0h20l140 139v21h-20z" />
            <Path fill="#eee" d="M0 64h160v32H0z" />
            <Path fill="#eee" d="M64 0h32v160H64z" />
            <Path fill="#d80027" d="M0 512h160V352H0z" />
            <Path
                fill="#ffda44"
                d="M340 146v158h-40c-24 0-24-32-24-32h-96v32h20l147 32 145-32v-24h-80s0 24-24 24h-32V146z"
            />
            <Path
                fill="#ffda44"
                d="M356 138v32c-31-11-61 8-80-32 33 23 51-10 80 0zm-72 46s-24 24-16 72h-72s32-56 88-72zm16 104h95c-31-48 0-104 0-104h-95s-40 56 0 104zm101-24a96 96 0 0 1 4-64h63s-16 32-1 64zm-101 40h192s-8 0-16 24-16 48-56 48H276c-39 0-52-50-76-72z"
            />
            <Rect
                width={96}
                height={32}
                x={32}
                y={384}
                fill="#ffda44"
                rx={16}
                ry={16}
            />
            <Rect
                width={96}
                height={32}
                x={32}
                y={448}
                fill="#ffda44"
                rx={16}
                ry={16}
            />
        </G>
    </Svg>
)
export default SvgPm
