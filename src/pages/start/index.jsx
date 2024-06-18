import "./index.css"
import { Link } from "react-router-dom";

export default function Start() {
    return (
        <div className="w-90 h-[190vh]">
            <div className=""> {/* add different bg color maybe. */}
                <div className="border-black border-b-[1px] p-[2vh] h-[8vh] justify-between flex px-[20vh] fixed top-0 left-0 right-0">
                    <div className="flex w-full justify-between items-center">
                        <div className="flex justify-between w-[30vh]">
                            <p>item1</p>
                            <p>item2</p>
                            <p>item3</p>
                        </div>
                        <div className="w-[30vh] flex justify-between">
                            <p>item4</p>
                            <p>item5</p>
                            <p>item6</p>
                        </div>
                    </div>
                </div>
                <h2 className="text-[200px] mt-[5vh] flex border-black border-b-[1px]">czuolingo</h2>
                <div className="flex">
                    <Link to="/practice">
                        <p className="text-[#2824ff] text-[50px] border-black border-b-[1px] border-r-[1px]">Chci 50 bodů z ČJ</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}