import {Routes, Route} from "react-router-dom";
import {Header} from './components/header/header.tsx';
import {Footer} from "./components/footer/footer.tsx";
import {Home} from "./components/home/home.tsx";
import {Kontakt} from "./components/kontakt/kontakt.tsx";
import {UeberMich} from "./components/ueber-mich/ueber-mich.tsx";



function App() {
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/ueber-mich" element={<UeberMich />} />
            <Route path="*" element={<div>404 - Seite nicht gefunden.</div>} />
        </Routes>
        <Footer />
    </>
  )
}

export default App
