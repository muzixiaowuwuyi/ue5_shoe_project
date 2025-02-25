
// import { Canvas } from "@react-three/fiber";
// // import { proxy } from "valtio";
// import { useSnapshot } from "valtio";
// import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
// import Shoe from "./Shoe";
// import { state } from "../state/state";

// export default function ShoeCanvas() {
//   const snap = useSnapshot(state); // 访问 global state
//   return (
//     <Canvas shadows camera={{ position: [0, 0, 5], fov: 18 }}>
//       <ambientLight intensity={0.7} />
//       <spotLight intensity={0.5} angle={0.5} penumbra={1} position={[10, 10, 10]} castShadow />
//       <Shoe />
//       <Environment preset="city" />
//       <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
//       <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
//     </Canvas>
//   );
// }

// src/components/ShoeCanvas.jsx
// import { Canvas } from "@react-three/fiber";
// import { useSnapshot } from "valtio";
// import Shoe from "./Shoe";
// import { state } from "../state/state";  // 引入状态
// import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";

// export default function ShoeCanvas() {
//   const snap = useSnapshot(state); // 访问 global state

//   console.log(snap.items[snap.current])

//   return (
//     <Canvas shadows camera={{ position: [0, 0, 5], fov: 18 }}>
//       <ambientLight intensity={0.7} />
//       <spotLight intensity={0.5} angle={0.5} penumbra={1} position={[10, 10, 10]} castShadow />
//       <Shoe />
//             <Environment preset="city" />
//      <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
//    <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
//     </Canvas>
//   );
// }


import { Canvas } from "@react-three/fiber";
import { useSnapshot } from "valtio";
import Shoe from "./Shoe";
import { state } from "../state/state"; // 引入状态
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { useEffect } from "react";

export default function ShoeCanvas() {
  const snap = useSnapshot(state); // 访问 global state

  useEffect(() => {
    // 监听 snap.current 或 snap.items 的变化
    if (snap.current) {
      // 强制触发相关更新或重新渲染 Canvas
      console.log('Updated color:', snap.items[snap.current]);  // 查看实时更新的颜色
    }
  }, [snap.current, snap.items]);  // 在 snap.current 或 snap.items 变化时触发

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 18 }}>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.5} penumbra={1} position={[10, 10, 10]} castShadow />
      <Shoe />  {/* 渲染鞋子模型 */}
      <Environment preset="city" />
      <ContactShadows position={[0, -0.8, 0]} opacity={0.25} scale={10} blur={1.5} far={0.8} />
      <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
