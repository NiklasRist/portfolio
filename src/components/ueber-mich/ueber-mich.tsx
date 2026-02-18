import {styles} from "./ueber-mich.styles.ts";

export function UeberMich(){
    return (
        <main style={styles.main}>
            <section style={styles.begruessung}>
                <h1>Herzlich Wilkommen!</h1>
            </section>
            <section style={styles.praxisbeschreibung}>
                <p>
                    Wir sind eine wunderbare Praxiskette geführt von erfolgreichen Möwen, spezialisiert auf die Behandlung von Schnäbeln. Text und so viele Worte... Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...Text und so viele Worte...
                </p>
            </section>
            <section style={styles.onlineTermin}>
                <label style={styles.label}>
                    <h3> Praxis auswählen: </h3>
                    <input style={styles.input} />
                </label>
                <iframe style={styles.waehlePraxisAufKarteAus} title="Praxisstandorte auf der Karte" loading="lazy"></iframe>
            </section>

        </main>
    )
}