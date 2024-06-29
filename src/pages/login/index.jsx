import { useCookies } from 'react-cookie';
import { useState, useEffect } from "react";
import axios from "axios";

export default function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(['user']);
    const [hash, setHash] = useState(null);
    const [loginError, setLoginError] = useState(null);

    const getHash = async (password) => {
        try {
            const response = await fetch('http://localhost:5174/api/hash/' + password);
            if (!response.ok) {
                throw new Error('Odezva serveru nebyla OK.');
            }
            const data = await response.json();
            return data.hash;
        } catch (error) {
            console.error('Problém při stahování dat:', error);
            return null;
        }
    };

    const onClick = async () => {
        handleUsername();
        const hashedPassword = await handleHash();
        if (hashedPassword) {
            checkCredentials(hashedPassword);
        }
    }

    const checkCredentials = async (hashedPassword) => {
        try {
            const response = await axios.post('http://localhost:5174/login', { username, hash: hashedPassword }, {
            });

            if (response.status === 200) {
                console.log("Login successful");
                setLoginError(null)
                setCookie("username", username);
                setCookie("hash", hashedPassword);
            }
        } catch (error) {
            if (error.response) {
                setLoginError("login failed, try using different username or retyping the password");
            }
        }
    };

    const handleUsername = async () => {

    }

    const handleHash = async () => {
        const hash = await getHash(password);
        setHash(hash);
        return hash;
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
            <div className=''>{loginError}</div>
        </div>
    )
}
