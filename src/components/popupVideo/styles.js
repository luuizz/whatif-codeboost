import { styled } from "../../styles";
import bgThumb from '../../assets/bg-video.png'

export const StylePopupVideo = styled("div", {
    width: "100%",
    maxWidth: 312,
    span: {
        display: 'block',
        textTransform: 'uppercase',
        lineHeight: '1.8rem',
        fontSize: 12,
        color: "$gray100",
        marginBottom: 14,
    },
    button: {
        width: '100%',
        height: 179,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `url(${bgThumb.src}) no-repeat center center`,
        backgroundSize: 'cover',
        borderRadius: 10,
        "&:hover": {
            "& > div": {
                transform: "scale(1.1)",
            },
        },
        "& > div": {
            width: 47,
            height: 47,
            background: "rgba(19,19,19,0.8)",
            backgroundFilter: "blur(2.5px)",
            borderRadius: "50%",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: "transform .3s ease",
        }
    }
});