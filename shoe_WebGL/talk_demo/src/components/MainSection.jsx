import { useSnapshot } from 'valtio';
import { state } from '../state/state';

function MainSection() {
  const snap = useSnapshot(state);

  return (
    <div className="flex-1 rounded-lg shadow min-h-full p-4">
      <h2 className="text-lg font-semibold bg-white text-center rounded">
        Render
      </h2>
      <div></div>

      <div className="flex flex-col items-center gap-2 p-2 overflow-y-auto w-[100px]">
        {snap.renderedImages.length > 0 ? (
          snap.renderedImages.map((image, index) => (
            <div
              key={index}
              className="transition-transform duration-300 hover:scale-125"
            >
              <img
                src={image}
                alt={`Rendered ${index}`}
                className="w-[60px] h-[60px] object-cover rounded-lg shadow"
              />
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No render yet</p>
        )}
      </div>
    </div>
  );
}

export default MainSection;
