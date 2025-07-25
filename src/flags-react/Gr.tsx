import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgGr = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="gr_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#gr_svg__a)">
            <Path
                fill="#0052b4"
                d="M0 0h99l29 32 28-32h356v57l-32 28 32 29v57l-32 28 32 29v57l-32 28 32 28v57l-32 29 32 28v57H0v-57l32-28-32-29v-56l32-29-32-28V171l32-29-32-28Z"
            />
            <Path
                fill="#eee"
                d="M99 0v114H0v57h99v114H0v57h512v-57H156V171h100v-57H156V0Zm157 57v57h256V57Zm0 114v57h256v-57ZM0 398v57h512v-57z"
            />
        </G>
    </Svg>
)
export default SvgGr
