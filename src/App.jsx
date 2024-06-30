import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from "./pages/start/index";
import LogIn from "./pages/login/index";
import "./index.css";
import Practice from './pages/practice';
import Exercise from './pages/exercises/index';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path='/practice' element={<Practice />} />
                    <Route path='/exercise/prislovi1' element={<Exercise exerciseName="prislovi1" />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}