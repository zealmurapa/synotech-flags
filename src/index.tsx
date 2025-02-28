import React from 'react'
import * as Languages from './flags/language'
import * as Fictional from './flags/fictional'
import type { SvgProps } from 'react-native-svg'
import { flags } from './flags'

type FlagProps = {
    code: string
} & SvgProps

function Flag({ code, ...props }: FlagProps) {
    const FlagComponent = flags[code?.toLowerCase()]
    return FlagComponent ? <FlagComponent {...props} /> : null
}

export * from './flags'
export { Languages, Fictional, Flag }
