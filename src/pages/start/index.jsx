import "./index.css"
import { Link } from "react-router-dom";

export default function Start() {
    return (
        <div className="w-90 h-[190vh]">
            <div className=""> {/* add different bg color maybe. */}
                <div className="border-black border-b-[1px] p-[1.5vh] h-[9.1vh] justify-between inline-block px-[20vh] fixed top-0 left-0 right-0">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex text-[2vw] justify-between w-[40vh]">
                            <p>item1</p>
                            <p>/</p>
                            <p>item2</p>
                            <p>/</p>
                            <p>item3</p>
                        </div>
                    </div>
                </div>
                <h2 className="text-[20vw] mt-[5vh] inline-block font-inter border-r-[1px] border-black border-b-[1px]">asdfghjkl</h2>
                <div className="inline-block">
                    <Link to="/practice">
                        <p className="text-[#2824ff] text-[2.6vw] border-black border-b-[1px] border-r-[1px]">Chci 50 bodů z ČJ</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}