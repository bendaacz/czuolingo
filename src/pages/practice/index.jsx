import { useEffect, useState } from "react"

export default function Practice() {

    const [username, setUsername] = useState("bendaa");
    const [hash, setHash] = useState(null);

    useEffect(() => {
        const getHash = async () => {
            try {
                const response = await fetch('http://localhost:5174/api/hash/' + username);
                if (!response.ok) {
                    throw new Error('Odezva serveru nebyla OK.');
                }
                const data = await response.json();
                setHash(data.hash);
            } catch (error) {
                console.error('Problém při stahování dat:', error);
            }
        };

        getHash();
    }, []);

    return (
        <>
            <p>Practice</p>
            <div className="">{hash}</div>
        </>
    )
}