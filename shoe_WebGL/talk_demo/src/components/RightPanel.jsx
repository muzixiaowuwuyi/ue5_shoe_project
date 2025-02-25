import { useSnapshot } from 'valtio';
import { state } from '../state/state';

function RightPanel() {
  const snap = useSnapshot(state);

  return (
    <div className="flex flex-col w-full max-w-md mx-auto shadow-lg p-1 rounded bg-white-50">
      <div className="text-center text-sm bg-gray-100 font-semibold mb-4 rounded-lg">
        Selected Color
      </div>

      <div>
        {Object.keys(snap.items)
          .filter((item) => item !== 'null' && snap.items[item] !== undefined)
          .map((item) => (
            <div
              // ODO: Tadd onclick event to change the snap.current to the item
              onClick={() => (state.current = item)}
              key={item}
              className="flex items-center justify-around rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer"
            >
              <span className="text-gray-700 font-medium text-sm flex-shrink-0 min-w-[50px] text-right text-gray-700">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              <div className="flex items-center space-x-2 w-1/2 justify-between">
                <div
                  className="flex-shrink-0 min-w-[50px] text-right"
                  style={{ color: snap.items[item] }}
                >
                  {snap.items[item]}
                </div>
                <div
                  className="w-12 h-4 rounded-full items-end"
                  style={{ backgroundColor: snap.items[item] }}
                ></div>
              </div>
            </div>
          ))}
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
        Render
      </button>
    </div>
  );
}

export default RightPanel;
// export const state = proxy({
//   current: null,
//   items: {
//     laces: "#fff",
//     mesh: "#fff",
//     caps: "#fff",
//     inner: "#fff",
//     sole: "#fff",
//     stripes: "#fff",
//     band: "#fff",
//     patch: "#fff",
//   },
// });
