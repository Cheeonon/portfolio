import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './pages/About/About';
import Main from './pages/Main/Main';
import NavPage from "./pages/NavPage/NavPage";
import Projects from './pages/Projects/Projects';
import "./styles/App.scss";

function App() {

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
