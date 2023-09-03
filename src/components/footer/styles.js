import { Container } from '@/styles/global'
import { styled } from '../../styles'

export const FooterStyle = styled("footer", {
    borderTop: "1px solid rgba(255,255,255,0.2)",
    padding: "4rem 0",
    [`${Container}`]: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        "& > div": {
            display: "flex",
            alignItems: "flex-start",
            span: {
                fontWeight: 500,
                fontSize: "1.4rem",
            },
            p: {
                flex: 1,
                fontSize: "1.4rem",
                color: "$gray500",
                lineHeight: "2.1rem",
                maxWidth: 593,
                marginLeft: "18.6rem",
            }
        }
    },
})