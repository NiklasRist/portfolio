import {Routes, Route} from "react-router-dom";
import {Header} from './components/header/header.tsx';
import {Footer} from "./components/footer/footer.tsx";
import {Home} from "./components/home/home.tsx";
import {UeberMich} from "./components/ueber-mich/ueber-mich.tsx";
import {ScrollToHash} from "./components/utility/ScrollToHash.tsx";



function App() {
  return (
    <>
        <ScrollToHash />
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<div>404 - Seite nicht gefunden.</div>} />
        </Routes>
        <UeberMich />
        <Footer />
    </>
  )
}

export default App
