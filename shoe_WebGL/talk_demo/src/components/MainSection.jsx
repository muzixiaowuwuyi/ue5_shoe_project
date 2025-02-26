import { useSnapshot } from 'valtio';
import { useState } from 'react';
import { state } from '../state/state';

function MainSection() {
  const snap = useSnapshot(state);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex-1 rounded-lg shadow min-h-full p-4 align-middle ">
      <h2 className="text-lg font-semibold bg-white text-center rounded">
        Render
      </h2>
      <div className="flex justify-between p-4">
          {
          snap.renderedImages.length > 0 && (<img
            src={snap.renderedImages[imageIndex]}
            alt="Rendered"
            className="mx-auto rounded-lg shadow object-none w-[50%] h-[50%]"
          />)
          }
        <div className="flex flex-col items-center gap-2 p-2 h-[50%]">
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
                  className="w-[80px] object-fill rounded shadow-lg cursor-pointer"
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
