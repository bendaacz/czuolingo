import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Start from "./pages/start/index";
import LogIn from "./pages/login/index";
import "./index.css";
import Practice from './pages/practice';
import Exercise from './pages/exercises/index';

function DynamicLink() {
    const { exerciseName } = useParams();
    return <Exercise exerciseName={exerciseName} />;
}

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Start />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path='/practice' element={<Practice />} />
                    <Route path="/exercise/:exerciseName" element={<DynamicLink />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}