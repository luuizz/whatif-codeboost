import { styled } from '../../../styles'

export const StyleSectionCharacters = styled("section", {
    paddingTop: 56,
    paddingBottom: 72,
    ".title": {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 56,
        span: {
            fontWeight: 400,
            fontSize: 18,
            lineHeight: "2.7rem",
            color: "$white",
            opacity: 0.4,
            marginRight: "11.3rem",
        },
        h2: {
            fontWeight: 600,
            fontSize: "2.5rem",
            lineHeight: "3.5rem",
            color: "$white",
            maxWidth: '21.6rem',
            position: 'relative',
            paddingLeft: 16,
            "&:before": {
                content: "",
                position: 'absolute',
                top: 5.5,
                left: 0,
                width: "0.2rem",
                height: "5.9rem",
                backgroundColor: "$red800",
            }
        },
    },
});

export const StyleListCharacters = styled("div", {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: "4rem 3.3rem",
    ".marvel": {
        width: "28rem",
        height: "36.8rem",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid $gray900',
        borderRadius: 4,
    },
});