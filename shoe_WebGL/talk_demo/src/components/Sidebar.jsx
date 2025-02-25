import { ChromePicker } from 'react-color';
import { useSnapshot } from 'valtio';
import { state } from '../state/state';

export default function Sidebar() {
  const snap = useSnapshot(state);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-5 bg-gray-100 shadow-md box-border rounded-lg p-2">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Color Customizer
      </h2>
      <ChromePicker
        color={snap.items[snap.current]}
        onChange={(color) => (state.items[snap.current] = color.hex)}
        className="mb-4"
        disableAlpha
      />

      <p className="text-gray-700">
        Editing: <strong className="text-blue-500">{snap.current}</strong>
      </p>

      <div
        className="w-full h-12 mt-4 rounded-md"
        style={{ backgroundColor: snap.items[snap.current] }}
      ></div>

      <div className="mt-4 text-center">
        <p className="text-gray-700">
          Current Color:{' '}
          <span className="font-bold text-blue-500">
            {snap.items[snap.current]}
          </span>
        </p>
        <p className="text-gray-700">
          Current Item:{' '}
          <span className="font-bold text-blue-500">{snap.current}</span>
        </p>
      </div>
    </div>
  );
}
