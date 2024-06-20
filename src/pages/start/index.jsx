import { useState } from "react";
import "./index.css"
import { Link } from "react-router-dom";

export default function Start() {
    const [show, setShow] = useState(false);

    const showClick = () => {
        setShow(true);
    }
    return (
        <>
            {show && (<Main />)}
            {!show && (
                <div className="select-none h-screen">
                    <div className="">
                        <div className="p-[1.5vh] h-[9.1vh] justify-between inline-block px-[20vh] fixed top-0 left-0 right-0">
                            <div className="flex w-full justify-between items-center">
                                <div className="flex text-[38px] justify-between w-[55vh]">
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <h2 className="text-[15vw] mt-[9.1vh] inline-block text-[#F1FAFF]">asdfghjkl</h2>
                            <p className="w-[32vw] mt-[9.1vh] text-[2.8vw] p-[1vw] flex text-center items-center border-black border-t-[1px] border-l-[1px] border-b-[1px] break-words">Učte se Český jazyk a všechny jeho nástrahy s jednou aplikací a 5 minutami denně.</p>

                        </div>
                        <button className="w-[67.9945vw] text-[70px] border-black border-[1px] inline-block justify-end" onClick={showClick}>začít!</button>
                    </div>
                </div>
            )}
        </>
    );
}

export function Main() {
    return (
        <div className="h-[190vh]">
            <div className=""> {/* add different bg color maybe. */}
                <div className="border-black border-b-[1px] p-[1.5vh] h-[9.1vh] justify-between inline-block px-[20vh] fixed top-0 left-0 right-0">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex text-[22px] justify-between w-[55vh]">
                            <Link to="/practice"> {/*temp link !!!!*/}
                                <p>učit se</p>
                            </Link>
                            <p>/</p>
                            <p>kontakt</p>
                            <p>/</p>
                            <p>o nás</p>
                        </div>
                    </div>
                </div>
                <div className="flex">
                    <h2 className="text-[15vw] mt-[9.1vh] inline-block font-inter border-r-[1px] border-black border-b-[1px]">asdfghjkl</h2>
                    <p className="w-[32vw] mt-[9.1vh] text-[2.8vw] p-[1vw] flex text-center items-center border-black border-b-[1px] break-words">Učte se Český jazyk a všechny jeho nástrahy s jednou aplikací a 5 minutami denně.</p>
                </div>

                <div className="">
                    <div className="inline-block">
                        <Link to="/practice">
                            <p className="text-[#2824ff] text-[2.6vw] border-black border-b-[1px] border-r-[1px]">Chci 50 bodů z ČJ</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}