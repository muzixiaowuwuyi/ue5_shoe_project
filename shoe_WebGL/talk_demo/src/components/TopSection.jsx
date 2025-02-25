import ShoeCanvas from "./ShoeCanvas";
import RightPanel from "./RightPanel";

function TopSection() {
    return (
        <div className="flex p-2 rounded-lg shadow h-full space-x-4"> 
            <div className="w-1/3 rounded-lg flex items-center justify-center">
                <h3 className="font-semibold text-gray-800">
                    <ShoeCanvas />
                </h3>
            </div>

            <RightPanel />

        </div>
    );
}

export default TopSection;