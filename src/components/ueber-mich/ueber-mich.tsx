import {styles} from "./ueber-mich.styles.ts";

export function UeberMich(){
    return (
        <main style={styles.main} id="ueber-mich">
            <section style={styles.begruessung}>
                <h1 >Über mich:</h1>
                <section style={styles.praxisbeschreibung}>
                    <p>
                        Ich bin ein Informatikstudent mit starker Leidenschaft für Softwareentwicklung und
                        Problemlösung. Erste Programmiererfahrung sammelte ich bereits mit 13 Jahren
                        in der RoboticsAG am Karl-Maybach-Gymnasium in Friedrichshafen. Seitdem
                        habe ich fundierte Kenntnisse in Java, Python, TypeScript, JavaScript sowie
                        modernen Frameworks wie Spring Boot und React aufgebaut. Nun suche ich ein
                        Praktikum, um meine technischen Fähigkeiten in einem professionellen Umfeld
                        einzusetzen und praxisnahe Industrieerfahrung zu gewinnen.
                    </p>
                </section>
            </section>

        </main>
    )
}