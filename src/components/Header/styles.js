import {styled} from '../../styles'
import {Container} from '../../styles/global'

export const HeaderStyle = styled("header", {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 96,
    borderBottom: "1px solid rgba(255, 255, 255, 0.20)",
    display: "flex",
    alignItems: "center",
    zIndex: 2025,
    [`${Container}`]: {
        height: "100%",
        borderLeft: "1px solid rgba(255,255, 255, 0.20)",
        borderRight: "1px solid rgba(255,255, 255, 0.20)",
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ".logo": {
        position: 'relative',
        paddingLeft: 23,
        "&:before": {
            content: "",
            backgroundColor: "$red800",
            boxShadow: "0px 2px 4px 0px rgba(255, 4, 13, 0.16)",
            position: 'absolute',
            bottom: -28,
            width: 104,
            height: 1,
            left: 23,
        },
    },
    ".code": {
        display: 'flex',
        alignItems: 'center',
        height: "100%",
        padding: "0 23px",
        borderLeft: "1px solid rgba(255,255, 255, 0.20)",
    }
})