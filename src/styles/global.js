import { globalCss, styled } from './index'

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        border: 'none',
        boxSizing: 'border-box',
        fontFamily: 'Poppins, sans-serif',

    },
    html: {
        fontSize: "62.5%",
    },
    body: {
        "webkit-font-smoothing": "antialiased",
        background: 'black',
        color: '$white',
    },
    img: {
        maxWidth: "100%",
        display: 'block',
    },
    button: {
        cursor: 'pointer',
    },
});

export const Container = styled("div", {
    width: "100%",
    maxWidth: 1246,
    margin: "0 auto",
    padding: "0 15px"
})