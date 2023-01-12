import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About/About';
import Main from './pages/Main/Main';
import NavPage from "./pages/NavPage/NavPage";
import Projects from './pages/Projects/Projects';
import "./styles/App.scss";

function App() {

    const mobileStyle = {
        marginTop: "3rem",
        padding : "2rem",
        textAlign : "center"
    }

    if(window.innerWidth < "720"){
        return <h1 style={mobileStyle}>This website doesn't work on mobile. Please try on your desktop.</h1>
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NavPage />}></Route>
                <Route path="main" element={<Main />}>
                    <Route path="about" element={<About />}></Route>
                    <Route path="projects" element={<Projects />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
