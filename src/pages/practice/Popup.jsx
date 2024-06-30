import { useState, useEffect } from "react";
import Popup from "reactjs-popup";

export default function PopupPreview({number, exerciseName}) {
    const [ExerciseList, setExerciseList] = useState(null);
    const [RandomQuestions, setRandomQuestions] = useState(null);
    const [lastID, setLastID] = useState(null);
    useEffect(() => {
        const fetchExerciseList= async()=> {
            try {
                const response = await fetch('http://localhost:5174/api/exercises/list');
                if (!response.ok) {
                    throw new Error('Odezva serveru nebyla OK.');
                }
                const data = await response.json();
                setExerciseList(data);
            } catch (error) {
                console.error('Problém při stahování dat:', error);
            }
        }

        const fetchRandomQuestions= async()=> {
            try {
                const response = await fetch('http://localhost:5174/api/random/' + exerciseName.toLowerCase());
                if (!response.ok) {
                    throw new Error('Odezva serveru nebyla OK.');
                }
                const data = await response.json();
                setRandomQuestions(data);
            } catch (error) {
                console.error('Problém při stahování dat:', error);
            }
        }

        const fetchLastID= async()=> {
            try {
                const response = await fetch('http://localhost:5174/api/lastid/' + exerciseName.toLowerCase());
                if (!response.ok) {
                    throw new Error('Odezva serveru nebyla OK.');
                }
                const data = await response.json();
                setLastID(data);
            } catch (error) {
                console.error('Problém při stahování dat:', error);
            }
        }
        
        fetchLastID();
        fetchExerciseList();
        fetchRandomQuestions();
    }, []);
    return (
        <>
        {!ExerciseList || !RandomQuestions ? (
            <div></div>
        ) : (
            <div className="flex justify-center text-center align-middle">
                <Popup trigger={<button className="border border-black p-[1vw]">{ExerciseList[number].name}</button>} modal nested>
                {   close => (
                        <div className='border-black w-[50vw] h-[65vh] text-[4vh] border-[1px] px-[5vw] py-[5vh]'>
                            <div className="justify-center flex text-center">
                                výběr cvičení: {ExerciseList[number].name}
                            </div>
                            <div className="justify-center flex text-center">počet otázek: {lastID[0].id}</div>
                            <div className="text-[3vh]">
                            <div className="mt-[5vh] justify-center flex text-center">ukázka cvičení:</div>
                            <div className="flex justify-center text-center">{RandomQuestions[0].first_part} ______ {RandomQuestions[0].last_part}</div>
                            </div>
                            <div className="flex items-end">
                            <div className="">
                                <button className="mt-[10vh]" onClick={() => close()}>zavřít</button>
                            </div>
                            </div>
                        </div>
                    )
                }
            </Popup>
                </div>
        )}
        </>
    ) }