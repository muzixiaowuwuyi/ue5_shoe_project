/* eslint-disable react/no-unknown-property */
import { useRef, useState, useEffect } from 'react';
import { useSnapshot } from 'valtio';
import { useGLTF } from '@react-three/drei';
import { state } from '../state/state';
import { useFrame } from '@react-three/fiber';

export default function Shoe() {
  const ref = useRef();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shoe-draco.glb');
  const [hovered, setHovered] = useState(null);

  //update the color of the material
  const handleMaterialUpdate = (key) => {
    if (materials[key]) {
      materials[key].color.set(snap.items[key]);
    }
  };

  useEffect(() => {
    if (snap.current && materials[snap.current]) {
      handleMaterialUpdate(snap.current);
    }
  }, [snap.current, snap.items]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.set(
      Math.cos(t / 4) / 8,
      Math.sin(t / 4) / 8,
      -0.2 - (1 + Math.sin(t / 1.5)) / 20
    );
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
        state.current = e.object.material.name; //update the current material
      }}
    >
      <mesh
        receiveShadow={true}
        castShadow={true}
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-color={snap.items.laces}
      />
      <mesh
        receiveShadow={true}
        castShadow={true}
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
        material-color={snap.items.mesh}
      />
      <mesh
        receiveShadow={true}
        castShadow={true}
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-color={snap.items.caps}
      />
      <mesh
        receiveShadow={true}
        castShadow={true}
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-color={snap.items.inner}
      />
      <mesh
        receiveShadow={true}
        castShadow={true}
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-color={snap.items.sole}
      />
      <mesh
        receiveShadow={true}
        castShadow={true}
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-color={snap.items.stripes}
      />
      <mesh
        receiveShadow={true}
        castShadow={true}
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-color={snap.items.band}
      />
      <mesh
        receiveShadow={true}
        castShadow={true}
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-color={snap.items.patch}
      />
    </group>
  );
}
