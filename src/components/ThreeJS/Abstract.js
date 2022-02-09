import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

export default function Model({ ...props }) {
  const abstractRef = useRef(null);

  useFrame(() => {
    const abstract = abstractRef.current;
    abstract.rotation.x += 0.005;
    abstract.rotation.y += 0.005;
  });
  const { nodes, materials } = useGLTF('/abstract.gltf')
  materials.Material.map=null;
  materials.Material.metalness=0.7;
  materials.Material.color = {r:0,g:0.5,b:0.5}
  return (
    <group ref={abstractRef} {...props} dispose={null} scale={1.5}>
      <group rotation={[0, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={[2, 2, 2]}>
            <mesh geometry={nodes.VoronoiDynoBake_Material_0.geometry} material={materials.Material} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/abstract.gltf')
