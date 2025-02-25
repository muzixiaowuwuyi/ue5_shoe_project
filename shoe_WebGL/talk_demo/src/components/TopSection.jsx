import ShoeCanvas from './ShoeCanvas';
import RightPanel from './RightPanel';

function TopSection() {
  return (
    <div className="flex p-2 rounded-lg shadow h-full space-x-4">
      <div className="rounded-lg flex items-center justify-center w-[70%] h-full">
        <ShoeCanvas />
      </div>
      <RightPanel />
    </div>
  );
}

export default TopSection;
