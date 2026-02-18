import type {CSSProperties} from 'react';

export const styles: Record<string, CSSProperties> = {
    header: {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        padding: "24px",
        borderRadius: "20px",
        background: "#0f4d5c",
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-center",
        gap: "16px",
    },

    title: {
        flex: "0 0 17%",
        margin: 0,
        fontSize: "60px",
        lineHeight: 1.05,
        fontWeight: 800,
        overflow: "hidden",
    },

    onlineRezeption: {
        flex: "0 0 42%",
        background: "white",
        color: "#111",
        padding: "16px",
        borderRadius: "12px",
        overflow: "hidden",
    },

    newsfeed: {
        background: "white",
        color: "#111",
        padding: "32px",
        borderRadius: "12px",
        flex: "0 0 77%",
        overflow: "hidden",
    },

    nav: {
        marginTop: "8px",
        paddingTop: "12px",
        borderTop: "1px solid rgba(255,255,255,0.25)",
        minHeight: "48px",
        flex: "0 0 100%",
        display: "flex",
        gap: "12px",
        alignItems: "center",
        flexWrap: "wrap",
    },

    navLink: {
        color: "white",
        textDecoration: "none",
        padding: "6px 8px",
        borderRadius: "8px",
    },

    navLinkActive: {
        textDecoration: "underline",
        fontWeight: 700,
    },
}