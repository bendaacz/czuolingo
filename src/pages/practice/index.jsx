import { useState, useEffect } from 'react';
import "./index.css";

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
        <div className="h-[100vh] overflow-hidden">
            {jsonData ? (
                <form method='post' onSubmit={handleSubmit}>
                    <div className="text-[30px]">
                        <div className='mt-[40vh] flex justify-center'>
                            <p className='m-[0px]'>{jsonData[jsonValue].first_part}</p>
                            <label>
                                <input
                                    name='answer'
                                    className="ml-[8px] mr-[8px] w-[130px] border-b-5 outline-none border-[#bcd3dd] bg-[#D8F1FF] border-b-[2px] resize-none overflow-hidden"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    autoCapitalize="off"
                                    autoFocus="on"
                                    rows="1"
                                    type="text"
                                    spellCheck="false"
                                    autoCorrect="off"
                                    autoComplete="off"
                                    lang="cs"
                                    placeholder={jsonData[jsonValue].answer}
                                />
                            </label>
                            <p className=''>{jsonData[jsonValue].last_part}</p>
                        </div>
                        <p className="text-[#ff0000]">{incorrect}</p>
                        <div className='w-full mt-[10vh] flex justify-center'>
                            <button type='submit' onChange={(e) => setInputValue(e.target.value)} className='hover:font-bold hover:text-[#00a2ff67]'>odeslat</button>
                        </div>
                    </div>
                </form>

            ) : (
                <div>
                    <div className=' text-[20px] flex justify-center mt-[25vh]'>
                        <p>Loading...</p>
                    </div>
                    <div className=' text-[20px] flex justify-center mt-[5vh]'>
                        <p>Načítání...</p>
                    </div>
                    <div className=' text-[20px] flex justify-center mt-[5vh]'>
                        <p>Loading...</p>
                    </div>
                    <div className=' text-[20px] flex justify-center mt-[5vh]'>
                        <p>Načítání...</p>
                    </div>
                </div>
            )}
        </div>
    );
}
