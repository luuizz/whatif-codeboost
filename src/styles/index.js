import { createStitches } from '@stitches/react'

export const { styled, globalCss, keyframes, getCssText, theme } = createStitches({
    theme: {
        colors: {
            red900: '#FF0000',
            red800: '#FF040D',
            white: '#FFFFFF',
            gray900: '#33303E',
            gray800: '#4E4B59',
            gray700: '#5F5C6B',
            gray600: '#7A7786',
            gray500: '#8C8A97',
            gray400: '#ACABB7',
            gray200: '#C6C5CE',
            gray100: '#E1E0E7'
        },
    },
    media: {
        lgScreen: "(max-width: 1200px)",
        tablet: "(max-width: 998px)",
        mobile: "(max-width: 560px)",
    }
})