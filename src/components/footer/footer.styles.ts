import type {CSSProperties} from 'react';

export const styles: Record<string, CSSProperties> = {
    footer: {
        background: "#0f4d5c",
        color: "white",
        borderRadius: "20px",
        padding: "24px",
    },

    container: {
        background: "white",
        color: "#111",
        padding: "16px",
        borderRadius: "12px",
    },

    row: {
        display: "grid",
        flexDirection: "column",
        gap: "12px",
    },

    col: {
        fontSize: "14px",
        lineHeight: 1.3,
    },

    copyright: {
        display: "block",
        marginTop: "12px",
        opacity: 0.85,
        fontSize: "12px",
    },

    link: {
        color: "inherit",
        textDecoration: "underline"
    },

}