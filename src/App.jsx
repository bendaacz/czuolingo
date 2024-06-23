import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from "./pages/start/index";
import Prislovi1 from "./pages/exercises/prislovi1/index";
import "./index.css";
import Practice from './pages/practice';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path='/practice' element={<Practice />} />
                    <Route path='/prislovi1' element={<Prislovi1 />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}