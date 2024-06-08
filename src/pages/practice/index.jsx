import { useState, useEffect } from 'react';
import Next from "./next";

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

    function Correct() {
        alert("aaaa");
    }
    
    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
    
        // Read the form data
        const form = e.target;
        const formData = new FormData(form);
    
        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        // Answer check
        if (formJson.answer === jsonData[0].answer) {
            Correct
        } else {
            Correct
        }
        
      }
    return (
        <div>
            {jsonData ? (
                <>
                <form method='post' onSubmit={handleSubmit}>
                    <div className='flex items-center mb-[25vh] h-[55vh] justify-center'>   
                        <p className='m-[0px] mr-[10px]'>{jsonData[0].first_part}</p>
                        <label>
                        <textarea name='answer' className="resize-none overflow-hidden" autoCapitalize="off" autoFocus="on" rows="1" autoComplete="off" autoCorrect="off" type="text" spellCheck="false" lang="cs" placeholder={jsonData[0].answer}></textarea>
                        </label>
                        <p className='m-[0px] ml-[10px]'>{jsonData[0].last_part}</p>
                    </div >
                    <button type='submit' className='text-[28px] bg-transparent border-[5px] border-red px-4 py-2 text-white hover:bg-white hover:text-black ml-[80vh] h-[50px]'>odeslat</button>
                    </form>
                </>
            ) : (
                <p>Loading...</p>
            )
            }
        </div >
    );
}
