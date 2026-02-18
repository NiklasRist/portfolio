import type { CSSProperties } from "react";

export const styles: Record<string, CSSProperties> = {
    main: {
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
    },

    begruessung: {
        background: "#0f4d5c",
        color: "white",
        borderRadius: "20px",
        padding: "28px",
        minHeight: "160px",
        display: "flex",
        alignItems: "center",
    },

    praxisbeschreibung: {
        background: "white",
        color: "#111",
        borderRadius: "20px",
        padding: "18px 20px",
        lineHeight: 1.55,
    },

    onlineTermin: {
        background: "white",
        color: "#111",
        borderRadius: "20px",
        padding: "18px 20px",
        scrollMarginTop: "300px",
        // 2 Spalten: links Auswahl, rechts Karte
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "16px",
        alignItems: "start",
    },

    label: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "14px",
        borderRadius: "14px",
        background: "rgba(15,77,92,0.06)",
        border: "1px solid rgba(15,77,92,0.18)",
    },

    input: {
        padding: "10px 12px",
        borderRadius: "10px",
        border: "1px solid rgba(0,0,0,0.18)",
        outline: "none",
        fontSize: "14px",
    },

    waehlePraxisAufKarteAus: {
        width: "100%",
        height: "320px",
        border: 0,
        borderRadius: "14px",
        overflow: "hidden",
        background: "#f6f6f6",
    },
};
