import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../../components/CrossPlatformSvg"
import type { SvgProps } from "../../components/CrossPlatformSvg"
const SvgVo = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="vo_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#vo_svg__a)">
            <Path fill="#4a1f63" d="M0 0h512v512H0z" />
            <Path fill="#ffda44" d="M0 0h304v304H0Z" />
            <Path
                fill="#4a1f63"
                d="M176 72a104 104 0 1 0 0 208 104 104 0 0 0 0-208zm-25 20c-8 8-16 18-22 31l-17-7c10-11 24-20 39-24zm50 0c15 4 29 13 39 24l-17 7c-6-13-14-23-22-31zm-17 5c7 7 16 17 24 30l-24 4zm-16 0v34l-24-4c8-13 17-23 24-30zm82 31c8 12 12 26 14 40h-28c-1-11-3-21-7-31zm-148 0 21 9c-4 10-6 20-7 31H88c2-14 6-28 14-40zm112 14c3 8 5 17 6 26h-36v-21zm-76 0 30 5v21h-36c1-9 3-18 6-26zm-50 42h28c1 11 3 21 7 31l-21 9c-8-12-12-25-14-40Zm44 0h36v21l-30 5c-3-8-5-17-6-26zm52 0h36c-1 9-3 18-6 26l-30-5zm52 0h28c-2 15-6 28-14 40l-21-9c4-10 6-20 7-31zm-68 37v34c-7-6-16-17-24-30zm16 0 24 4c-8 13-17 24-24 30zm39 8c7 3 13 5 17 8a89 89 0 0 1-39 23c8-8 16-18 22-31zm-94 0c6 13 14 23 22 31-15-4-29-12-39-23z"
            />
        </G>
    </Svg>
)
export default SvgVo
