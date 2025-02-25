import { useSnapshot } from "valtio";
import { state } from "../state/state";
import "./buttonStyles.css";

function RightPanel() {
    const snap = useSnapshot(state);

    return (
        <div className="flex flex-col rounded-lg w-full max-w-md mx-auto shadow-lg">
            <div className="text-center text-sm bg-gray-100 font-semibold mb-4">Selected Color</div>

            <div >
                {Object.keys(snap.items)
                    .filter((item) => item !== "null" && snap.items[item] !== undefined)  
                    .map((item) => (
                        <div key={item} className="flex items-center justify-around rounded-lg shadow-sm">
                            <span className="text-gray-700 font-medium text-sm">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                            <div className="flex items-center space-x-2 w-1/2 justify-around">
                                <div className=" text-gray-700 items-center">{snap.items[item]}</div>
                                <div
                                    className="w-6 h-4 rounded-full items-center"
                                    style={{ backgroundColor: snap.items[item] }}
                                ></div>
                            </div>
                        </div>
                    ))}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Render</button>
        </div>
    );
}

export default RightPanel;

