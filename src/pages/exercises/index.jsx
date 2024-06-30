import { useState, useEffect } from 'react';
import "./index.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { useStopwatch  } from 'react-timer-hook';

export default function Exercise({ exerciseName }) {
    const [exercise, setExercise] = useState(null);
    const [lastID, setLastID] = useState("");
    const [result, setResult] = useState(null);
    const [currentValue, setCurrentValue] = useState(0);
    const [incorrect, setIncorrect] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [questionsCompleted, setQuestionsCompleted] = useState(false);
    const stopwatch = useStopwatch({ autoStart: true });

    useEffect(() => {
        const fetchExercise = async () => {
            try {
                const response = await fetch('http://localhost:5174/api/random/' + exerciseName);
                if (!response.ok) {
                    throw new Error('Odezva serveru nebyla OK.');
                }
                const data = await response.json();
                setExercise(data);
            } catch (error) {
                console.error('Problém při stahování dat:', error);
            }
        };

        const fetchLastID = async () => {
            try {
                const response = await fetch('http://localhost:5174/api/lastid/' + exerciseName);
                if (!response.ok) {
                    throw new Error('Odezva serveru nebyla OK.');
                }
                const data = await response.json();
                setLastID(data[0].id);
            } catch (error) {
                console.error('Problém při stahování dat:', error);
            }
        };

        fetchExercise();
        fetchLastID();
    }, []);

    useEffect(() => {
        setInputValue("");
    }, [currentValue]);

    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        if (formJson.answer === exercise[currentValue].answer) {
            setResult("correct");
            setCurrentValue(currentValue + 1);
            setIncorrect(null);
            if (currentValue + 1 >= exercise.length) {
                setQuestionsCompleted(true);
            }
        } else {
            setResult("incorrect");
            setIncorrect("incorrect!");
        }

        setInputValue("");

        console.log("currentValue, result, incorrect, lastID");
        console.log(currentValue, result, incorrect, lastID);
    }

    return (
        <div className="h-[100vh] overflow-hidden">
            {questionsCompleted ? (
                <Overview pause={stopwatch.pause} minutes={stopwatch.minutes} seconds={stopwatch.seconds} currentValue={currentValue} lastID={lastID} />
            ) : exercise ? (
                <form method='post' onSubmit={handleSubmit}>
                    <ProgressBar
                        borderRadius='0px'
                        completed={currentValue}
                        bgColor="#09a9ff"
                        labelAlignment="outside"
                        labelColor="#09a9ff"
                        maxCompleted={lastID}
                        customLabel=""
                        isLabelVisible="false"
                    />
                    <div className="text-[40px]">

                        <div className='mt-[40vh] flex justify-center'>
                            <p className='m-[0px]'>{exercise[currentValue].first_part}</p>
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
                                    placeholder={exercise[currentValue].answer}
                                />
                            </label>
                            <p className=''>{exercise[currentValue].last_part}</p>
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


function Overview({ pause, minutes, seconds, currentValue, lastID }) {

    useEffect(() => {
        if (currentValue === lastID) {
            pause()
        }
    }, [currentValue, lastID, pause]);

    return (
        <>
            <h1 className='text-[6vw]'>Hotovo!</h1>
            <div className='flex justify-center h-screen w-screen overflow-hidden'>
                <div className='mt-[3vw] p-[5vw] flex w-[50vw] h-[70vh] justify-around items-end'>
                    <div className='text-[2vw] text-center'>{lastID} otázek</div>
                    <div className='text-center text-[2vw]'>čas {minutes}:{seconds}</div>
                </div>
            </div>
        </>
    );
}