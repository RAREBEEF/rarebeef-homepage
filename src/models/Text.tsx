/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import angleToRadians from "../tools/angleToRadians";

type GLTFResult = GLTF & {
  nodes: {
    텍스트001: THREE.Mesh;
  };
  materials: {
    ["매테리얼.001"]: THREE.MeshStandardMaterial;
  };
};

export default function Text() {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/models/text.glb") as GLTFResult;
  return (
    <group
      ref={group}
      dispose={null}
      scale={0.5}
      rotation={[0, 0, 0]}
      position={[2, 1, -10]}
    >
      <mesh
        geometry={nodes.텍스트001.geometry}
        material={materials["매테리얼.001"]}
        position={[-5.48, 4.88, 18.13]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/text.glb");