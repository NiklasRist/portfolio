import {styles} from "./home.styles.ts";

export function Home(){
    return (
            <main style={styles.main}>
                <section style={styles.begruessung}>
                    <h1>Herzlich Wilkommen! Hier sind meine Projekte:</h1>
                </section>
                <section style={styles.onlineTermin} id="projekte">
                    <label style={styles.label}>
                        <h3> Praxis auswählen: </h3>
                        <input style={styles.input} />
                    </label>
                    <iframe style={styles.waehlePraxisAufKarteAus} title="Praxisstandorte auf der Karte" loading="lazy"></iframe>
                </section>

            </main>
    )
}