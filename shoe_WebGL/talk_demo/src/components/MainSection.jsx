import { useSnapshot } from 'valtio';
import { useState } from 'react';
import { state } from '../state/state';

function MainSection() {
  const snap = useSnapshot(state);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex-1 rounded-lg shadow min-h-full p-4">
      <h2 className="text-lg font-semibold bg-white text-center rounded">
        Render
      </h2>
      <div className="flex justify-between gap-4">
        <div className="mt-4">
          <img
            src={snap.renderedImages[imageIndex]}
            alt="Rendered"
            className="w-[80%] h-[80%] mx-auto object-cover rounded-lg shadow-"
          />
        </div>
        <div className="flex flex-col items-center gap-2 p-2 overflow-y-auto">
          {snap.renderedImages.length > 0 ? (
            snap.renderedImages.map((image, index) => (
              <div
                key={index}
                className="transition-transform duration-300 hover:scale-125"
                onClick={() => setImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`Rendered ${index}`}
                  className="w-[100px] object-cover rounded shadow-lg"
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">No render</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainSection;
