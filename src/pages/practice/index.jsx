import { useEffect, useState } from "react"
import Popup from 'reactjs-popup';
import PopupPreview from "./Popup";

export default function Practice() {
    const [ExerciseList, setExerciseList] = useState(null);
    const [RandomQuestionsPrislovi1, setRandomQuestionsPrislovi1] = useState(" ");
    const [RandomQuestionsPrislovi2, setRandomQuestionsPrislovi2] = useState(" ");
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

        const fetchRandomQuestionsPrislovi1= async()=> {
            try {
                const response = await fetch('http://localhost:5174/api/random/prislovi1');
                if (!response.ok) {
                    throw new Error('Odezva serveru nebyla OK.');
                }
                const data = await response.json();
                setRandomQuestionsPrislovi1(data);
            } catch (error) {
                console.error('Problém při stahování dat:', error);
            }
        }
        
        fetchExerciseList();
        fetchRandomQuestionsPrislovi1();
    }, []);
    return (
        <>
        {ExerciseList === null || RandomQuestionsPrislovi1 === null || RandomQuestionsPrislovi2 === null ? (
            <div></div>
        ) : (
        <div className="h-screen w-screen py-[10vh]">
            <div className="flex justify-center text-center align-middle">
                <div className="grid grid-cols-5">
                <PopupPreview number="0" exerciseName="prislovi1" />
                <PopupPreview number="1" exerciseName="prislovi2" />
                {/*<Popup trigger={<button className="border border-black p-[1vw]">{ExerciseList[0].name}</button>} modal nested>
                {   close => (
                        <div className='border-black w-[50vw] h-[65vh] text-[4vh] border-[1px] px-[5vw] py-[5vh]'>
                            <div className="justify-center flex text-center">
                                výběr cvičení: {ExerciseList[0].name}
                            </div>
                            <div className="justify-center flex text-center">počet otázek: {ExerciseList[0].questions}</div>
                            <div className="text-[3vh]">
                            <div className="mt-[5vh] justify-center flex text-center">ukázka cvičení:</div>
                            <div className="flex justify-center text-center">{RandomQuestionsPrislovi1[0].first_part} ______ {RandomQuestionsPrislovi1[0].last_part}</div>
                            </div>
                            <div className="flex items-end">
                            <div className="">
                                <button className="mt-[10vh]" onClick={() => close()}>zavřít</button>
                            </div>
                            </div>
                        </div>
                    )
                }
            </Popup> */}
                </div>
            </div>
        </div>
        )}
        </>
    )
}