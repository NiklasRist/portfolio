import {styles} from "./header.styles";
import {NavLink, type NavLinkRenderProps} from "react-router-dom";

export function Header(){
    const links = [
        {label: "Projekte", to: "/#projekte"},
        {label: "Kontakt", to: "/#kontakt"},
        {label: "Über mich", to: "/#ueber-mich"},
    ];
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>
                Niklas <br/>
                Rist
            </h1>
            <aside style={styles.newsfeed}>
                Breaking News! <br/>
                Neueste Nachrichten berichtet im Nachrichtenfeed!!!!
            </aside>
            <nav style={styles.nav}>
                {links.map(({ label, to }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === "/"}
                        style={({ isActive } :NavLinkRenderProps) =>
                            isActive
                                ? { ...styles.navLink, ...styles.navLinkActive }
                                : styles.navLink
                        }
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
}

