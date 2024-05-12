import { useState, useEffect } from 'react';

export default function Practice() {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5174/prislovi');
                if (!response.ok) {
                    throw new Error('Odezva serveru nebyla OK.');
                }
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error('Problém při stahování dat:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {jsonData ? (
                <div className='flex items-center'>
                    <p className='m-[0px] mr-[5px]'>{jsonData[0].first_part}</p>
                    <textarea className='resize-none' autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" lang="cs" placeholder="Pište zde"></textarea>
                    <p className='m-[0px]'>{jsonData[0].last_part}</p>
                </div >
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
}
