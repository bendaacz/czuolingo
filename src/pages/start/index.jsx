export default function Start() {
    return (
        <div className="w-screen h-screen p-[2vh] px-[20vh]">
            <div className=""> {/* add different bg color maybe. */}
                <div className="flex w-full justify-between">
                    <div className="flex justify-between w-[30vh]">
                        <p>item1</p>
                        <p>item2</p>
                        <p>item3</p>
                    </div>
                    <div className="w-[20vh] flex justify-between">
                        <p>item4</p>
                        <p>item5</p>
                        <p>item6</p>
                    </div>
                </div>
                <h2 className="text-[50px] flex justify-center">czuolingo</h2>
                <div className="justify-center flex">
                    <a className="text-[#2824ff] " href="practice">Chci 50 bodů z ČJ</a>
                </div>
            </div>
        </div>
    )
}