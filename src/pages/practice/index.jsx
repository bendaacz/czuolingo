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
                <>
                    <div className='flex items-center mb-[25vh] h-[55vh] justify-center'>
                        <p className='m-[0px] mr-[10px]'>{jsonData[0].first_part}</p>
                        <textarea className="resize-none overflow-hidden" autoCapitalize="off" autoFocus="on" rows="1" autoComplete="off" autoCorrect="off" type="text" spellCheck="false" lang="cs" placeholder="Pište zde"></textarea>
                        <p className='m-[0px] ml-[10px]'>{jsonData[0].last_part}</p>
                    </div >
                    <button className='text-[28px] bg-transparent border-[5px] border-red px-4 py-2 text-white hover:bg-white hover:text-black ml-[80vh] h-[50px]'>odeslat</button>
                </>
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
}
