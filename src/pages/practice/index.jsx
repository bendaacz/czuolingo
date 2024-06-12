import React, { useState, useEffect } from 'react';
import "./index.css";
import ProgressBar from "@ramonak/react-progress-bar";

export default function Practice() {
    const [jsonData, setJsonData] = useState(null);
    const [lastID, setLastID] = useState("");
    const [result, setResult] = useState(null);
    const [jsonValue, setJsonValue] = useState(0);
    const [incorrect, setIncorrect] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [questionsCompleted, setQuestionsCompleted] = useState(false); // New state to track if questions are completed

    useEffect(() => {
        const fetchPrislovi = async () => {
            try {
                const response = await fetch('http://localhost:5174/api/prislovi');
                if (!response.ok) {
                    throw new Error('Odezva serveru nebyla OK.');
                }
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error('Problém při stahování dat:', error);
            }
        };

        const fetchPrisloviID = async () => {
            try {
                const response = await fetch('http://localhost:5174/api/prislovi_id');
                if (!response.ok) {
                    throw new Error('Odezva serveru nebyla OK.');
                }
                const data = await response.json();
                setLastID(data[0].id);
            } catch (error) {
                console.error('Problém při stahování dat:', error);
            }
        };

        fetchPrislovi();
        fetchPrisloviID();
    }, []);

    useEffect(() => {
        setInputValue("");
    }, [jsonValue]);

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        if (formJson.answer === jsonData[jsonValue].answer) {
            setResult("correct");
            setJsonValue(jsonValue + 1);
            setIncorrect(null);
            if (jsonValue + 1 >= jsonData.length) {
                setQuestionsCompleted(true); // If all questions are completed, set questionsCompleted to true
            }
        } else {
            setResult("incorrect");
            setIncorrect("incorrect!");
        }

        setInputValue("");

        console.log("jsonValue, result, incorrect, lastID");
        console.log(jsonValue, result, incorrect, lastID);
    }

    return (
        <div className="h-[100vh] overflow-hidden">
            {questionsCompleted ? (
                <Overview />
            ) : jsonData ? (
                <form method='post' onSubmit={handleSubmit}>
                    <div className="text-[40px]">
                        <ProgressBar
                            completed={jsonValue}
                            bgColor="#09a9ff"
                            labelAlignment="outside"
                            labelColor="#09a9ff"
                            maxCompleted={lastID}
                            customLabel=""
                        />
                        <div className='mt-[40vh] flex justify-center'>
                            <p className='m-[0px]'>{jsonData[jsonValue].first_part}</p>
                            <label>
                                <input
                                    name='answer'
                                    className="ml-[8px] mr-[8px] w-[220px] border-b-5 outline-none border-[#bcd3dd] bg-[#D8F1FF] border-b-[2px] resize-none overflow-hidden"
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
                        <div className='w-full mt-[10vh] flex justify-center'>
                            <button type='submit' onChange={(e) => setInputValue(e.target.value)} className='hover:font-bold'>odeslat</button>
                        </div>
                        <div className='p-[7vh] w-full fixed bottom-[0px] align-baseline justify-center'>
                            <p className="text-[#ff7300c9]">{incorrect}</p>
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

function Overview() {
    return (
        <p>done</p>
    );
}
