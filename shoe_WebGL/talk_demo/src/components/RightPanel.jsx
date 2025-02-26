import { useSnapshot } from 'valtio';
import { state } from '../state/state';
import { WebGLRenderer, Vector3, OrthographicCamera, Scene } from 'three';
import { useGLTF } from '@react-three/drei';
import { AmbientLight, SpotLight } from 'three';

function RightPanel() {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('shoe-draco.glb'); // Ensure the shoe model is loaded
  console.log('Nodes:', nodes);

  const handleRender = () => {
    if (!nodes.shoe) {
      console.error('Shoe model not loaded yet.');
      return;
    }

    const canvas_new = document.createElement('canvas');
    const renderer = new WebGLRenderer({ canvas: canvas_new, antialias: true });
    renderer.setClearColor(0xf5f5f5, 1);
    renderer.setSize(1024, 1024);

    const scene = new Scene();

    // Use similar lighting as your preview scene
    const ambientLight = new AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    // Spot light or other directional light
    const spotLight = new SpotLight(0xffffff, 700);
    spotLight.position.set(10, 10, 10);
    spotLight.angle = Math.PI/6;
    spotLight.penumbra = 0.3;
    spotLight.decay = 2;
    spotLight.castShadow = true;

    spotLight.shadow

    scene.add(spotLight);

    scene.add(nodes.shoe);
    scene.add(nodes.shoe_1);
    scene.add(nodes.shoe_2);
    scene.add(nodes.shoe_3);
    scene.add(nodes.shoe_4);
    scene.add(nodes.shoe_5);
    scene.add(nodes.shoe_6);
    scene.add(nodes.shoe_7);

    // Update materials with the current color state
    Object.keys(snap.items).forEach((key) => {
      if (materials[key]) {
        materials[key].color.set(snap.items[key]);
      }
    });

    // Set the camera
    const camera = new OrthographicCamera(-2.5, 2.5, 2.5, -2.5, 0.1, 100);
    camera.position.set(0, 0, 3);
    camera.lookAt(0, 0, 0);

    const renderImages = [];
    const positions = [
      new Vector3(0, 0, 1),
      new Vector3(0, 0, -1),
      new Vector3(-1, 0, 0),
      new Vector3(1, 0, 0),
      new Vector3(0, 1, 0),
      new Vector3(0, -1, 0),
    ];

    // Render the shoe from different positions
    positions.forEach((pos) => {
      camera.position.copy(pos);
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);

      const imageData = renderer.domElement.toDataURL('image/png');
      renderImages.push(imageData);
    });

    state.renderedImages = [...renderImages];
  };

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
              key={item}
              onClick={() => (state.current = item)}
              className="flex items-center justify-around rounded-lg shadow-sm hover:bg-gray-100 cursor-pointer"
            >
              <span className="text-gray-700 font-medium text-sm flex-shrink-0 min-w-[50px] text-right">
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
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={handleRender}
      >
        Render
      </button>
    </div>
  );
}

export default RightPanel;
