import {styles} from "./footer.styles"

export function Footer() {
    return (
      <footer style={styles.footer}>
          <h1 id="kontakt">Kontakt:</h1>
          <div style={styles.container}>
              <div style={styles.row}>
                  <div style={styles.col}>Telefon: <a style={styles.link} href="tel:+4917624418989">+4917624418989</a></div>
                  <div style={styles.col}>Email: <a style={styles.link} href="mailto:niklas.a.rist@gmail.com">niklas.a.rist@gmail.com</a></div>
              </div>
          </div>
          <small style={styles.copyright}>
              ©2026 Niklas Rist
          </small>
      </footer>
    );
}