import { useCookies } from 'react-cookie';
import { useState, navigate } from "react";
import axios from "axios";

export default function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(['user']);
    const [hash, setHash] = useState(null);

    const getHash = async (password) => {
        try {
            const response = await fetch('http://localhost:5174/api/hash/' + password);
            if (!response.ok) {
                throw new Error('Odezva serveru nebyla OK.');
            }
            const data = await response.json();
            setHash(data.hash);
            return data.hash;
        } catch (error) {
            console.error('Problém při stahování dat:', error);
            return null;
        }
    };

    const onClick = async () => {
        handleUsername()
        handleHash()
        checkCredentials()
    }

    const checkCredentials = async () => {
        const response = await axios.post('http://localhost:5174/login', { username, hash });
        if (response.status === 200) {
            console.log("Logged in!") // IMPLEMENT SUCCESSFUL LOGIN LOGIC HERE
        }
    }

    const handleUsername = async () => {
        setCookie("username", username);
    }

    const handleHash = async () => {
        const hash = await getHash(password);
        if (hash) {
            setCookie('password', hash, { path: '/' });
        }
    };

    return (
        <div>
            <h1>username</h1>
            <input
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <h1>password</h1>
            <input
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <div>
                <button onClick={onClick}>Set Cookie</button>
            </div>
        </div>
    )
}
