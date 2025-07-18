import React, { useMemo } from 'react'
import type { SvgProps } from './components/CrossPlatformSvg'
import { flags } from './flags-react'
import * as Fictional from './flags-react/fictional'
import * as Languages from './flags-react/language'

export type FlagProps = {
    code: string
    size?: number | string
} & SvgProps

const flagComponentCache: Record<string, React.FC<SvgProps> | null> = {}

export const CachedFlags: Record<string, React.FC<SvgProps>> = {}

export function precacheFlagComponents() {
    Object.entries(flags).forEach(([code, Component]) => {
        if (!flagComponentCache[code]) {
            flagComponentCache[code] = Component
        }
        CachedFlags[code] = Component
    })

    return CachedFlags
}

precacheFlagComponents()

const Flag = React.memo(({ code, ...props }: FlagProps) => {
    const lowerCode = code?.toLowerCase()

    const FlagComponent = useMemo(() => {
        if (flagComponentCache.hasOwnProperty(lowerCode)) {
            return flagComponentCache[lowerCode]
        }

        const component = flags[lowerCode] || null
        flagComponentCache[lowerCode] = component
        return component
    }, [lowerCode])

    return FlagComponent ? <FlagComponent {...props} /> : null
})

export const FlagsCache = React.memo(
    ({ size = 28, ...props }: Omit<SvgProps, 'code'> & { size: number }) => {
        return (
            <>
                {Object.entries(CachedFlags).map(([code, FlagComponent]) => (
                    <FlagComponent
                        key={code}
                        width={size}
                        height={size}
                        {...props}
                        style={{ position: 'absolute', opacity: 0 }}
                    />
                ))}
            </>
        )
    }
)

export * from './flags-react'
export { Fictional, Flag, Languages }

