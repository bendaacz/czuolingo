import { useState, useEffect } from "react";
import "./index.css"
import { Link } from "react-router-dom";
import Loading from "../loading/index.jsx";
import Responsive from 'react-responsive'

export default function Start() {
    const [show, setShow] = useState(false);

    const showClick = () => {
        setShow(true);
    }
    return (
        <>
        <Responsive minWidth={1250}>
            {show && (<Main />)}
            {!show && (
                <div className="select-none">
                    <div className="h-[9.1vh] justify-between inline-block fixed top-0 left-0 right-0">
                        <div className="flex w-full justify-between items-center">
                            <div className="flex text-[38px] justify-between w-[55vh]">
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center text-center">
                        <h2 className="w-[68vw] mt-[9.1vh] inline-block text-[10vw]"></h2>
                        <p className="w-[32vw] mt-[9.1vh] text-[2.8vw] p-[1vw] flex text-center items-center border-black border-t-[1px] border-l-[1px] border-b-[1px] break-words">Učte se Český jazyk a všechny jeho nástrahy s jednou aplikací a 5 minutami denně.</p>
                    </div>
                    <div className="flex justify-end items-end">
                        <button className="text-[70px] w-[32vw] text-[#00a2ff] border-black border-l-[1px] border-b-[1px] inline-block justify-end" onClick={showClick}>začít!</button>
                    </div>
                </div>
            )}
            </Responsive>
            <Responsive maxWidth={1250}>
            <div className="h-screen w-screen">
            <h1 className="flex justify-center items-center text-center align-middle">Screen too small :/</h1>
            </div>
            </Responsive>
        </>
    );
}

export function Main() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1);
    }, []);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="h-[190vh]">
            <div className="animate-fade-in">
                <div className="border-black border-b-[1px] p-[1.5vh] h-[9.1vh] justify-between inline-block px-[20vh] fixed top-0 left-0 right-0">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex text-[4vh] justify-between w-[55vh]">
                            <Link to="/practice">
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