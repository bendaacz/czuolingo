import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from "./pages/start/index";
import Practice from "./pages/practice/index";

import "./index.css";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path='/practice' element={<Practice />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}