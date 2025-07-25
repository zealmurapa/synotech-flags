import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgWiphala = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="wiphala_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#wiphala_svg__a)">
            <Path fill="#eee" d="M0 73V0h73l439 439v73h-73Z" />
            <Path
                fill="#ffda44"
                d="M73 0v73h73v73h73v73h74v74h73v73h73v73h73v-73l-73-73-73-73v-1l-73-73-74-73-73-73H73z"
            />
            <Path
                fill="#ff9811"
                d="M146 0v73h73v73h74v73h73v74h73v73h73v-73l-73-74L293 73 219 0h-73z"
            />
            <Path
                fill="#d80027"
                d="M219 0v73h74v73h73v73h73v74h73v-74l-73-73-73-73-73-73h-74z"
            />
            <Path
                fill="#4a1f63"
                d="M293 0v73h73v73h73v73h73v-73l-73-73-73-73h-73z"
            />
            <Path fill="#0052b4" d="M366 0v73h73v73h73V73L439 0h-73z" />
            <Path
                fill="#6da544"
                d="M439 0v73h73V0Zm0 512v-73h-74v-73h-73v-73h-73v-74h-73v-73H73V73H0v73l73 73 73 73v1l73 73 73 73 73 73z"
            />
            <Path
                fill="#0052b4"
                d="M366 512v-73h-74v-73h-73v-73h-73v-74H73v-73H0v73l73 74 146 146 73 73z"
            />
            <Path
                fill="#4a1f63"
                d="M292 512v-73h-73v-73h-73v-73H73v-74H0v74l73 73 73 73 73 73z"
            />
            <Path
                fill="#d80027"
                d="M219 512v-73h-73v-73H73v-74H0v74l73 73 73 73z"
            />
            <Path fill="#ff9811" d="M146 512v-73H73v-73H0v73l73 73z" />
            <Path fill="#ffda44" d="M73 512v-73H0v73z" />
        </G>
    </Svg>
)
export default SvgWiphala
