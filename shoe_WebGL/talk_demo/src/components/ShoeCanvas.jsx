import { Canvas } from '@react-three/fiber';
import { useSnapshot } from 'valtio';
import Shoe from './Shoe';
import { state } from '../state/state';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
import { useEffect } from 'react';

export default function ShoeCanvas() {
  const snap = useSnapshot(state);

  useEffect(() => {
    if (snap.current) {
      console.log('Updated color:', snap.items[snap.current]);
    }
  }, [snap.current, snap.items]);

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 18 }}>
      <ambientLight intensity={0.7} />
      <spotLight
        intensity={0.5}
        angle={0.5}
        penumbra={1}
        position={[10, 10, 10]}
        castShadow
      />
      <Shoe />
      <Environment preset="city" />
      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.25}
        scale={10}
        blur={1.5}
        far={0.8}
      />
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={false}
        enablePan={false}
      />
    </Canvas>
  );
}
