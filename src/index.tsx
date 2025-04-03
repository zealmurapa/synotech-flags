import React, { useMemo } from 'react'
import * as Languages from './flags/language'
import * as Fictional from './flags/fictional'
import type { SvgProps } from 'react-native-svg'
import { flags } from './flags'

export type FlagProps = {
    code: string
} & SvgProps

// Cache for rendered flag components
const flagComponentCache: Record<string, React.FC<SvgProps> | null> = {};

// Pre-cached flag components
export const CachedFlags: Record<string, React.FC<SvgProps>> = {};

// Function to pre-cache all flags
export function precacheFlagComponents() {
    Object.entries(flags).forEach(([code, Component]) => {
        if (!flagComponentCache[code]) {
            flagComponentCache[code] = Component;
        }
        CachedFlags[code] = Component;
    });

    return CachedFlags;
}

// Initialize the cache with all flags
precacheFlagComponents();

const Flag = React.memo(({ code, ...props }: FlagProps) => {
    const lowerCode = code?.toLowerCase();

    // Use useMemo to cache the flag component based on the code
    const FlagComponent = useMemo(() => {
        // If we already have this flag in cache, return it
        if (flagComponentCache.hasOwnProperty(lowerCode)) {
            return flagComponentCache[lowerCode];
        }

        // Otherwise, get the component and cache it
        const component = flags[lowerCode] || null;
        flagComponentCache[lowerCode] = component;
        return component;
    }, [lowerCode]);

    return FlagComponent ? <FlagComponent {...props} /> : null;
});

// Component that renders all flags (useful for preloading)
export const AllFlags = React.memo(({ size = 24, ...props }: Omit<SvgProps, 'code'>) => {
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
    );
});

export * from './flags'
export { Languages, Fictional, Flag }
