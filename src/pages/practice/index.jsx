import PopupPreview from "./Popup";

export default function Practice() {
    return (
        <>
        <div className="h-screen w-screen py-[10vh]">
            <div className="flex justify-center text-center align-middle">
                <div className="grid grid-cols-5">
                <PopupPreview number="0" exerciseName="prislovi1" />
                <PopupPreview number="1" exerciseName="prislovi2" />
                </div>
            </div>
        </div>
        </>
    )
}