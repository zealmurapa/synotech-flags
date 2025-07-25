import * as React from 'react'
import { Svg, Mask, Circle, G, Path } from "../components/CrossPlatformSvg"
import type { SvgProps } from "../components/CrossPlatformSvg"
const SvgAuAct = (props: SvgProps) => (
    <Svg width={24} height={24} viewBox="0 0 512 512" {...props}>
        <Mask id="au-act_svg__a">
            <Circle cx={256} cy={256} r={256} fill="#fff" />
        </Mask>
        <G mask="url(#au-act_svg__a)">
            <Path fill="#0052b4" d="M0 0h170l64 256-64 256H0Z" />
            <Path fill="#ffda44" d="M170 0h342v512H170z" />
            <Path
                fill="#eee"
                d="m136 189 7 14.7 15.9-3.7-7.2 14.7 12.7 10-15.9 3.7v16.3l-12.6-10.2-12.7 10.2v-16.3l-15.9-3.6 12.8-10.1L113 200l15.9 3.7zm-45-43 7 14.7 15.9-3.7-7.2 14.7 12.7 10-15.9 3.7v16.3l-12.6-10.2-12.7 10.2v-16.3l-15.9-3.6 12.8-10.1L68 157l15.9 3.7zm19 92 5.6 17h17.8l-14.5 10.5 5.5 17-14.5-10.5-14.4 10.5 5.5-17L86.5 255h18zm-70-34 7 14.7 15.9-3.7-7.2 14.7 12.7 10-15.9 3.7v16.3l-12.6-10.2-12.7 10.2v-16.3l-15.9-3.6 12.8-10.1L17 215l15.9 3.7zm51 99-6 17-17-8 8 17-17 6 17 6-8 17 17-8 6 17 6-17 17 8-8-17 17-6-17-6 8-17-17 8z"
            />
            <G transform="translate(0 22)">
                <Path
                    fill="#0052b4"
                    d="M276 200a17 17 0 0 0-17 17h-51a17 17 0 0 0 17 17 17 17 0 0 0 17 17 17 17 0 0 0 17 17h71v-68z"
                />
                <Path
                    fill="#eee"
                    d="M384 200a17 17 0 0 1 17 17h51a17 17 0 0 1-17 17 17 17 0 0 1-17 17 17 17 0 0 1-17 17h-71v-68z"
                />
                <Path
                    fill="#0052b4"
                    d="M285.5 200v68c0 34 44.5 44 44.5 44s44.5-10 44.5-44v-68z"
                />
                <Path
                    fill="#eee"
                    d="m294.4 204-2.5 7.5 26.8 10-26.8 10 2.5 7.5 35.6-13.3 35.7 13.3 2.5-7.5-26.9-10 26.9-10-2.5-7.5-35.7 13.3zm25 31.2V254h-6.2v-9.2h-15V284h63.7v-38.8h-15v8.8h-7.5v-18.8z"
                />
                <Circle cx={330} cy={297.2} r={9} fill="#eee" />
            </G>
        </G>
    </Svg>
)
export default SvgAuAct
