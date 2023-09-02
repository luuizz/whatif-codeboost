import { styled } from '../../styles'

export const StyleCard = styled("div", {
    width: "100%",
    maxWidth: "28rem",
    "&:hover": {
        ".image": {
            img: {
                transform: "scale(1.05)",
            },
        },
        ".info": {
            h3: {
                color: "$red800",
            }
        },
    },
    a: {
        display: 'block',
    },
    ".image": {
        width: "100%",
        height: "37.2rem",
        marginBottom: 16,
        borderRadius: 5,
        overflow: 'hidden',
        img: {
            width: "100%",
            height: "100%",
            objetFit: 'cover',
            transition: 'transform .3s ease',
        },
    },
    span: {
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "150%",
        color: "$gray500",
    },
    ".info": {
        display: 'flex',
        justifyContent: 'space-between',
        h3: {
            fontSize: "1.8rem",
            fontWeight: 600,
            lineHeight: "120%",
            color: "$white",
            marginBottom: 4,
            transition: 'color .3s ease',
        },
        span: {
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "150%",
            color: "$gray500",
        },
    },
})