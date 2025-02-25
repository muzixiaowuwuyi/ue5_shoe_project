
import { useRef, useState, useEffect } from "react";
import { useSnapshot } from "valtio";
import { useGLTF } from "@react-three/drei";
import { state } from "../state/state";
import { useFrame } from "@react-three/fiber";

export default function Shoe() {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF("/shoe-draco.glb");
  const [hovered, setHovered] = useState(null);

  // 更新选中的部分颜色
  const handleMaterialUpdate = (key) => {
    if (materials[key]) {
      materials[key].color.set(snap.items[key]);
    }
  };

  useEffect(() => {
    // 监听 snap.current 和 snap.items 的变化，并实时更新颜色
    if (snap.current && materials[snap.current]) {
      handleMaterialUpdate(snap.current); // 更新对应部位的颜色
    }
  }, [snap.current, snap.items]);  // 依赖于 snap.current 和 snap.items

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 4) / 8, -0.2 - (1 + Math.sin(t / 1.5)) / 20);
    ref.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
  });

  return (
    <group
      ref={ref}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => e.intersections.length === 0 && setHovered(null)}
      onClick={(e) => {
        e.stopPropagation();
        state.current = e.object.material.name; // 更新当前选中的部位
      }}
    >
      {materials &&
        Object.keys(materials).map((key, index) => (
          <mesh
            key={index}
            receiveShadow
            castShadow
            geometry={nodes[`shoe_${index}`]?.geometry}
            material={materials[key]}
          />
        ))}
    </group>
  );
}
