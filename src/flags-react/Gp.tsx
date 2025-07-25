import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgGp = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="gp_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#gp_svg__a)">
            <Path fill="#333" d="M0 176h512v336H0z" />
            <Path fill="#0052b4" d="M0 0h512v176H0z" />
            <Path
                fill="#6da544"
                d="M94 228a8 8 0 0 0-2 0 8 8 0 0 0-5 4 8 8 0 0 0-1 6l7 25-39-23a8 8 0 0 0-11 3 8 8 0 0 0 3 11l39 23-25 6a8 8 0 0 0-5 4 8 8 0 0 0-1 6 8 8 0 0 0 10 6l41-11 8 5-26 6a8 8 0 0 0-4 4 8 8 0 0 0-1 6 8 8 0 0 0 10 6l40-11 8 5-25 6a8 8 0 0 0-4 4 8 8 0 0 0-1 6 8 8 0 0 0 10 6l40-11 25 14a8 8 0 0 0 11-3 8 8 0 0 0-3-10l-25-15-11-40a8 8 0 0 0-10-6 8 8 0 0 0-5 4 8 8 0 0 0 0 6l6 25-8-5-11-40a8 8 0 0 0-9-6 8 8 0 0 0-5 4 8 8 0 0 0-1 6l7 25-8-5-11-40a8 8 0 0 0-8-6zm180 96 122 107c17-13 32-30 44-48l-166-59z"
            />
            <Path
                fill="#ffda44"
                d="m256 480-21-29-31 19-8-35-36 5 6-35-36-9 19-31-29-21 29-21-19-31 36-8-6-36 36 6 8-36 31 19 21-29 21 29 31-19 8 36 36-6-6 36 36 8-19 31 29 21-29 21 19 31-36 8 6 36-36-5-8 35-31-19zm0-440-10 11c-7 11-9 22-5 31l7 17c-4-6-9-10-15-12-4-1-11 0-16 5-7 6-10 24 11 27-2-3-2-9 3-11 3-2 7-1 8 0 2 1 4 4 5 7h-5v10h6c-2 6-6 9-15 16 8 1 17-5 19-7l2-5-1 20c1 5 2 7 6 11 4-4 5-6 6-11l-1-20 2 4c2 3 11 9 19 9-9-8-13-11-14-17h5v-10h-5c1-3 3-6 5-7 1-1 5-2 9 0s4 8 2 11c21-3 18-21 11-27-5-5-11-6-16-5-6 2-11 6-15 12l7-17c4-9 2-20-5-31l-10-11zm96 0-10 11c-7 11-9 22-5 31l7 17c-4-6-9-10-15-12-5-1-11 0-17 5-6 6-9 24 12 27-2-3-2-9 3-11 3-2 7-1 8 0 2 1 4 4 5 7h-5v10h5c-1 6-5 9-14 16 8 1 17-5 19-7l2-5-1 20c1 5 2 7 6 11 4-4 5-6 6-11l-1-20 2 4c2 3 11 9 19 9-9-8-13-11-15-17h6v-10h-5c1-3 3-6 5-7 1-1 5-2 8 0 5 2 5 8 3 11 21-3 18-21 11-27-5-5-11-6-16-5-6 2-11 6-15 12l7-17c4-9 2-20-5-31l-10-11zm-192 0-10 11c-7 11-9 22-5 31l7 17c-4-6-9-10-15-12-4-1-11 0-16 5-7 6-10 24 11 27-2-3-2-9 3-11 3-2 7-1 8 0 2 1 4 4 5 7h-5v10h6c-2 6-6 9-15 16 8 1 17-5 19-7l2-5-1 20c1 5 2 7 6 11 4-4 5-6 6-11l-1-20 2 4c2 3 11 9 19 9-9-8-13-11-14-17h5v-10h-5c1-3 3-6 5-7 1-1 5-2 9 0s4 8 2 11c21-3 19-21 12-27-6-5-12-6-17-5-6 2-11 6-15 12l7-17c4-9 2-20-5-31l-10-11z"
            />
        </G>
    </Svg>
)
export default SvgGp
