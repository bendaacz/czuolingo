import { useState, useEffect } from 'react';

export default function Practice() {
    const [jsonData, setJsonData] = useState(null);
    const [result, setResult] = useState(null);
    const [jsonValue, setJsonValue] = useState(0);
    const [incorrect, setIncorrect] = useState(null);
    const [inputValue, setInputValue] = useState("");

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

    useEffect(() => {
        setInputValue("");
    }, [jsonValue]);

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        if (formJson.answer === jsonData[jsonValue].answer) {
            setResult("correct");
            setJsonValue(jsonValue + 1);
            setIncorrect(null);
        } else {
            setResult("incorrect");
            setIncorrect("incorrect!");
        }

        setInputValue("");

        console.log(jsonValue, result, incorrect)
    }

    return (
        <div>
            {jsonData ? (
                <>
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='flex items-center mb-[25vh] h-[55vh] justify-center'>
                            <p className='m-[0px] mr-[10px]'>{jsonData[jsonValue].first_part}</p>
                            <label>
                                <input
                                    name='answer'
                                    className="resize-none overflow-hidden"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    autoCapitalize="off"
                                    autoFocus="on"
                                    rows="1"
                                    autoComplete="off"
                                    autoCorrect="off"
                                    type="text"
                                    spellCheck="false"
                                    lang="cs"
                                    placeholder={jsonData[jsonValue].answer}
                                />
                            </label>
                            <p className='m-[0px] ml-[10px]'>{jsonData[jsonValue].last_part}</p>
                            <p className=''>{incorrect}</p>
                        </div>
                        <button type='submit' onChange={(e) => setInputValue(e.target.value)} className='text-[28px] bg-transparent border-[5px] border-red px-4 py-2 text-white hover:bg-white hover:text-black ml-[80vh] h-[50px]'>odeslat</button>
                    </form>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
